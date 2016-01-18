// Based on http://bl.ocks.org/mbostock/8bee9cf362d56d9cb19f/507166861adc3d52038ba43c934e6073937eb13c


/* https://github.com/d3/d3-path Copyright 2015 Mike Bostock */
!function(t,s){"object"==typeof exports&&"undefined"!=typeof module?s(exports):"function"==typeof define&&define.amd?define("d3-path",["exports"],s):s(t.d3_path={})}(this,function(t){"use strict";function s(){this._x0=this._y0=this._x1=this._y1=null,this._=[]}function i(){return new s}var h=Math.PI,_=2*h,n=1e-6,e=_-n;s.prototype=i.prototype={moveTo:function(t,s){this._.push("M",this._x0=this._x1=+t,",",this._y0=this._y1=+s)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._.push("Z"))},lineTo:function(t,s){this._.push("L",this._x1=+t,",",this._y1=+s)},quadraticCurveTo:function(t,s,i,h){this._.push("Q",+t,",",+s,",",this._x1=+i,",",this._y1=+h)},bezierCurveTo:function(t,s,i,h,_,n){this._.push("C",+t,",",+s,",",+i,",",+h,",",this._x1=+_,",",this._y1=+n)},arcTo:function(t,s,i,_,e){t=+t,s=+s,i=+i,_=+_,e=+e;var o=this._x1,u=this._y1,a=i-t,r=_-s,p=o-t,f=u-s,c=p*p+f*f;if(0>e)throw new Error("negative radius: "+e);if(null===this._x1)this._.push("M",this._x1=t,",",this._y1=s);else if(c>n)if(Math.abs(f*a-r*p)>n&&e){var x=i-o,y=_-u,M=a*a+r*r,l=x*x+y*y,d=Math.sqrt(M),v=Math.sqrt(c),b=e*Math.tan((h-Math.acos((M+c-l)/(2*d*v)))/2),w=b/v,T=b/d;Math.abs(w-1)>n&&this._.push("L",t+w*p,",",s+w*f),this._.push("A",e,",",e,",0,0,",+(f*x>p*y),",",this._x1=t+T*a,",",this._y1=s+T*r)}else this._.push("L",this._x1=t,",",this._y1=s);else;},arc:function(t,s,i,o,u,a){t=+t,s=+s,i=+i;var r=i*Math.cos(o),p=i*Math.sin(o),f=t+r,c=s+p,x=1^a,y=a?o-u:u-o;if(0>i)throw new Error("negative radius: "+i);null===this._x1?this._.push("M",f,",",c):(Math.abs(this._x1-f)>n||Math.abs(this._y1-c)>n)&&this._.push("L",f,",",c),i&&(y>e?this._.push("A",i,",",i,",0,1,",x,",",t-r,",",s-p,"A",i,",",i,",0,1,",x,",",this._x1=f,",",this._y1=c):(0>y&&(y=y%_+_),this._.push("A",i,",",i,",0,",+(y>=h),",",x,",",this._x1=t+i*Math.cos(u),",",this._y1=s+i*Math.sin(u))))},rect:function(t,s,i,h){this._.push("M",this._x0=this._x1=+t,",",this._y0=this._y1=+s,"h",+i,"v",+h,"h",-i,"Z")},toString:function(){return this._.join("")}};var o="0.1.2";t.version=o,t.path=i});

/* https://github.com/d3/d3-shape Copyright 2015 Mike Bostock */
!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports,require("d3-path")):"function"==typeof define&&define.amd?define("d3-shape",["exports","d3-path"],i):i(t.d3_shape={},t.d3_path)}(this,function(t,i){"use strict";function n(t){return function(){return t}}function s(t){return t.innerRadius}function h(t){return t.outerRadius}function _(t){return t.startAngle}function e(t){return t.endAngle}function o(t){return t&&t.padAngle}function a(t){return t>=1?it:-1>=t?-it:Math.asin(t)}function l(t,i,n,s,h,_,e,o){var a=n-t,l=s-i,c=e-h,r=o-_,u=(c*(i-_)-r*(t-h))/(r*a-c*l);return[t+u*a,i+u*l]}function c(t,i,n,s,h,_,e){var o=t-n,a=i-s,l=(e?_:-_)/Math.sqrt(o*o+a*a),c=l*a,r=-l*o,u=t+c,x=i+r,f=n+c,y=s+r,p=(u+f)/2,d=(x+y)/2,v=f-u,T=y-x,m=v*v+T*T,g=h-_,M=u*y-f*x,b=(0>T?-1:1)*Math.sqrt(Math.max(0,g*g*m-M*M)),w=(M*T-v*b)/m,N=(-M*v-T*b)/m,k=(M*T+v*b)/m,E=(-M*v+T*b)/m,S=w-p,P=N-d,q=k-p,A=E-d;return S*S+P*P>q*q+A*A&&(w=k,N=E),{cx:w,cy:N,x01:-c,y01:-r,x11:w*(h/g-1),y11:N*(h/g-1)}}function r(){function t(t,n){var s,h,_=+r(t,n),e=+u(t,n),o=y(t,n)-it,T=p(t,n)-it,m=Math.abs(T-o),g=T>o;if(v||(v=s=i.path()),_>e&&(h=e,e=_,_=h),e>0)if(m>=nt)v.moveTo(e*Math.cos(o),e*Math.sin(o)),v.arc(0,0,e,o,T,!g),_>0&&(v.moveTo(_*Math.cos(T),_*Math.sin(T)),v.arc(0,0,_,T,o,g));else{var M=o,b=T,w=o,N=T,k=m,E=m,S=d(t,n)/2,P=S>0&&(f?+f(t,n):Math.sqrt(_*_+e*e)),q=Math.min(Math.abs(e-_)/2,+x(t,n)),A=q,R=q;if(P>0){var C=a(P/_*Math.sin(S)),z=a(P/e*Math.sin(S));(k-=2*C)>0?(C*=g?1:-1,w+=C,N-=C):(k=0,w=N=(o+T)/2),(E-=2*z)>0?(z*=g?1:-1,M+=z,b-=z):(E=0,M=b=(o+T)/2)}var I=e*Math.cos(M),O=e*Math.sin(M),j=_*Math.cos(N),B=_*Math.sin(N);if(q>0){var D=e*Math.cos(b),U=e*Math.sin(b),F=_*Math.cos(w),G=_*Math.sin(w);if(tt>m){var H=k>0?l(I,O,F,G,D,U,j,B):[j,B],J=I-H[0],K=O-H[1],L=D-H[0],Q=U-H[1],V=1/Math.sin(Math.acos((J*L+K*Q)/(Math.sqrt(J*J+K*K)*Math.sqrt(L*L+Q*Q)))/2),W=Math.sqrt(H[0]*H[0]+H[1]*H[1]);A=Math.min(q,(_-W)/(V-1)),R=Math.min(q,(e-W)/(V+1))}}if(E>0)if(R>0){var X=c(F,G,I,O,e,R,g),Y=c(D,U,j,B,e,R,g);v.moveTo(X.cx+X.x01,X.cy+X.y01),q>R?v.arc(X.cx,X.cy,R,Math.atan2(X.y01,X.x01),Math.atan2(Y.y01,Y.x01),!g):(v.arc(X.cx,X.cy,R,Math.atan2(X.y01,X.x01),Math.atan2(X.y11,X.x11),!g),v.arc(0,0,e,Math.atan2(X.cy+X.y11,X.cx+X.x11),Math.atan2(Y.cy+Y.y11,Y.cx+Y.x11),!g),v.arc(Y.cx,Y.cy,R,Math.atan2(Y.y11,Y.x11),Math.atan2(Y.y01,Y.x01),!g))}else v.moveTo(I,O),v.arc(0,0,e,M,b,!g);else v.moveTo(I,O);if(_>0&&k>0)if(A>0){var X=c(j,B,D,U,_,-A,g),Y=c(I,O,F,G,_,-A,g);v.lineTo(X.cx+X.x01,X.cy+X.y01),q>A?v.arc(X.cx,X.cy,A,Math.atan2(X.y01,X.x01),Math.atan2(Y.y01,Y.x01),!g):(v.arc(X.cx,X.cy,A,Math.atan2(X.y01,X.x01),Math.atan2(X.y11,X.x11),!g),v.arc(0,0,_,Math.atan2(X.cy+X.y11,X.cx+X.x11),Math.atan2(Y.cy+Y.y11,Y.cx+Y.x11),g),v.arc(Y.cx,Y.cy,A,Math.atan2(Y.y11,Y.x11),Math.atan2(Y.y01,Y.x01),!g))}else v.arc(0,0,_,N,w,g);else v.lineTo(j,B)}else v.moveTo(0,0);return v.closePath(),s?(v=null,s+""||null):void 0}var r=s,u=h,x=n(0),f=null,y=_,p=e,d=o,v=null,T=null;return t.centroid=function(t,i){var n=(+r(t,i)+ +u(t,i))/2,s=(+y(t,i)+ +p(t,i))/2-Math.PI/2;return[Math.cos(s)*n,Math.sin(s)*n]},t.innerRadius=function(i){return arguments.length?(r="function"==typeof i?i:n(+i),t):r},t.outerRadius=function(i){return arguments.length?(u="function"==typeof i?i:n(+i),t):u},t.cornerRadius=function(i){return arguments.length?(x="function"==typeof i?i:n(+i),t):x},t.padRadius=function(i){return arguments.length?(f=null==i?null:"function"==typeof i?i:n(+i),t):f},t.startAngle=function(i){return arguments.length?(y="function"==typeof i?i:n(+i),t):y},t.endAngle=function(i){return arguments.length?(p="function"==typeof i?i:n(+i),t):p},t.padAngle=function(i){return arguments.length?(d="function"==typeof i?i:n(+i),t):d},t.context=function(i){return arguments.length?(v=T=null==i?null:i,t):v},t}function u(t){return new x(t)}function x(t){this._context=t}function f(t,i){return i=st.call(i),i[0]=null,function(n){return i[0]=n,t.apply(null,i)}}function y(t){return t[0]}function p(t){return t[1]}function d(){function t(t){var n,r,u,x,f,y=t.length,p=!1,d=new Array(y),v=new Array(y);for(a||(c=l(f=i.path())),n=0;y>=n;++n){if(!(y>n&&o(x=t[n],n))===p)if(p=!p)r=n,c.areaStart(),c.lineStart();else{for(c.lineEnd(),c.lineStart(),u=n-1;u>=r;--u)c.point(d[u],v[u]);c.lineEnd(),c.areaEnd()}p&&(d[n]=+s(x,n),v[n]=+_(x,n),c.point(h?+h(x,n):d[n],e?+e(x,n):v[n]))}return f?(c=null,f+""||null):void 0}var s=y,h=null,_=n(0),e=p,o=n(!0),a=null,l=u,c=null;return t.x=function(i){return arguments.length?t.x0(i).x1(null):s},t.x0=function(i){return arguments.length?(s="function"==typeof i?i:n(+i),t):s},t.x1=function(i){return arguments.length?(h=null==i?null:"function"==typeof i?i:n(+i),t):h},t.y=function(i){return arguments.length?t.y0(i).y1(null):_},t.y0=function(i){return arguments.length?(_="function"==typeof i?i:n(+i),t):_},t.y1=function(i){return arguments.length?(e=null==i?null:"function"==typeof i?i:n(+i),t):e},t.defined=function(i){return arguments.length?(o="function"==typeof i?i:n(!!i),t):o},t.curve=function(i){var n=arguments.length;return n?(l=n>1?f(i,arguments):i,null!=a&&(c=l(a)),t):l},t.context=function(i){return arguments.length?(null==i?a=c=null:c=l(a=i),t):a},t}function v(t,i,n){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+i)/6,(t._y0+4*t._y1+n)/6)}function T(t){return new m(t)}function m(t){this._context=t}function g(t){return new M(t)}function M(t){this._context=t}function b(t){return new w(t)}function w(t){this._context=t}function N(t,i){return null==i||1===(i=+i)?T(t):new k(t,i)}function k(t,i){this._basis=T(t),this._beta=i}function E(t,i,n){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-i),t._y2+t._k*(t._y1-n),t._x2,t._y2)}function S(t,i){return new P(t,(null==i?1:1-i)/6)}function P(t,i){this._context=t,this._k=i}function q(t,i){return new A(t,(null==i?1:1-i)/6)}function A(t,i){this._context=t,this._k=i}function R(t,i){return new C(t,(null==i?1:1-i)/6)}function C(t,i){this._context=t,this._k=i}function z(t,i,n){var s=t._x1,h=t._y1,_=t._x2,e=t._y2;if(t._l01_a>ht){var o=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,a=3*t._l01_a*(t._l01_a+t._l12_a);s=(s*o-t._x0*t._l12_2a+t._x2*t._l01_2a)/a,h=(h*o-t._y0*t._l12_2a+t._y2*t._l01_2a)/a}if(t._l23_a>ht){var l=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,c=3*t._l23_a*(t._l23_a+t._l12_a);_=(_*l+t._x1*t._l23_2a-i*t._l12_2a)/c,e=(e*l+t._y1*t._l23_2a-n*t._l12_2a)/c}t._context.bezierCurveTo(s,h,_,e,t._x2,t._y2)}function I(t,i){return null!=i&&(i=+i)?new O(t,i):S(t,0)}function O(t,i){this._context=t,this._alpha=i}function j(t,i){return null!=i&&(i=+i)?new B(t,i):q(t,0)}function B(t,i){this._context=t,this._alpha=i}function D(t,i){return null!=i&&(i=+i)?new U(t,i):R(t,0)}function U(t,i){this._context=t,this._alpha=i}function F(t){return new G(t)}function G(t){this._context=t}function H(){function t(t){var n,l,c,r=t.length,u=!1;for(e||(a=o(c=i.path())),n=0;r>=n;++n)!(r>n&&_(l=t[n],n))===u&&((u=!u)?a.lineStart():a.lineEnd()),u&&a.point(+s(l,n),+h(l,n));return c?(a=null,c+""||null):void 0}var s=y,h=p,_=n(!0),e=null,o=u,a=null;return t.x=function(i){return arguments.length?(s="function"==typeof i?i:n(+i),t):s},t.y=function(i){return arguments.length?(h="function"==typeof i?i:n(+i),t):h},t.defined=function(i){return arguments.length?(_="function"==typeof i?i:n(!!i),t):_},t.curve=function(i){var n=arguments.length;return n?(o=n>1?f(i,arguments):i,null!=e&&(a=o(e)),t):o},t.context=function(i){return arguments.length?(null==i?e=a=null:a=o(e=i),t):e},t}function J(t){return new K(t)}function K(t){this._context=t}function L(t){var i,n,s=t.length-1,h=new Array(s),_=new Array(s),e=new Array(s);for(h[0]=0,_[0]=2,e[0]=t[0]+2*t[1],i=1;s-1>i;++i)h[i]=1,_[i]=4,e[i]=4*t[i]+2*t[i+1];for(h[s-1]=2,_[s-1]=7,e[s-1]=8*t[s-1]+t[s],i=1;s>i;++i)n=h[i]/_[i-1],_[i]-=n,e[i]-=n*e[i-1];for(h[s-1]=e[s-1]/_[s-1],i=s-2;i>=0;--i)h[i]=(e[i]-h[i+1])/_[i];for(_[s-1]=(t[s]+h[s-1])/2,i=0;s-1>i;++i)_[i]=2*t[i+1]-h[i+1];return[h,_]}function Q(t){return new V(t)}function V(t){this._context=t}function W(t){return new X(t)}function X(t){this._context=t}function Y(t){return new Z(t)}function Z(t){this._context=t}function $(){function t(t,n){var e;return _||(_=e=i.path()),s(t,n).draw(_,+h(t,n)),e?(_=null,e+""||null):void 0}var s=n(_t),h=n(64),_=null;return t.type=function(i){return arguments.length?(s="function"==typeof i?i:n(i),t):s},t.size=function(i){return arguments.length?(h="function"==typeof i?i:n(+i),t):h},t.context=function(i){return arguments.length?(_=null==i?null:i,t):_},t}var tt=Math.PI,it=tt/2,nt=2*tt;x.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,i):this._context.moveTo(t,i);break;case 1:this._point=2;default:this._context.lineTo(t,i)}}};var st=Array.prototype.slice;m.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:v(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,i):this._context.moveTo(t,i);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:v(this,t,i)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=i}},M.prototype={lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break;case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1,this._x2=t,this._y2=i;break;case 1:this._point=2,this._x3=t,this._y3=i;break;case 2:this._point=3,this._x4=t,this._y4=i,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+i)/6);break;default:v(this,t,i)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=i}},w.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var n=(this._x0+4*this._x1+t)/6,s=(this._y0+4*this._y1+i)/6;this._line?this._context.lineTo(n,s):this._context.moveTo(n,s);break;case 3:this._point=4;default:v(this,t,i)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=i}},k.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,i=this._y,n=t.length-1;if(n>0)for(var s,h=t[0],_=i[0],e=t[n]-h,o=i[n]-_,a=-1;++a<=n;)s=a/n,this._basis.point(this._beta*t[a]+(1-this._beta)*(h+s*e),this._beta*i[a]+(1-this._beta)*(_+s*o));this._x=this._y=null,this._basis.lineEnd()},point:function(t,i){this._x.push(+t),this._y.push(+i)}},P.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:E(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,i):this._context.moveTo(t,i);break;case 1:this._point=2,this._x1=t,this._y1=i;break;case 2:this._point=3;default:E(this,t,i)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=i}},A.prototype={lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1,this._x3=t,this._y3=i;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=i);break;case 2:this._point=3,this._x5=t,this._y5=i;break;default:E(this,t,i)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=i}},C.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:E(this,t,i)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=i}};var ht=1e-6;O.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this,this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){if(t=+t,i=+i,this._point){var n=this._x2-t,s=this._y2-i;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+s*s,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,i):this._context.moveTo(t,i);break;case 1:this._point=2;break;case 2:this._point=3;default:z(this,t,i)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=i}},B.prototype={lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,i){if(t=+t,i=+i,this._point){var n=this._x2-t,s=this._y2-i;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+s*s,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=i;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=i);break;case 2:this._point=3,this._x5=t,this._y5=i;break;default:z(this,t,i)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=i}},U.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){if(t=+t,i=+i,this._point){var n=this._x2-t,s=this._y2-i;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+s*s,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:z(this,t,i)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=i}};var _t={draw:function(t,i){var n=Math.sqrt(i/Math.PI);t.moveTo(n,0),t.arc(0,0,n,0,2*Math.PI)}},et={draw:function(t,i){var n=Math.sqrt(i/5)/2;t.moveTo(-3*n,-n),t.lineTo(-n,-n),t.lineTo(-n,-3*n),t.lineTo(n,-3*n),t.lineTo(n,-n),t.lineTo(3*n,-n),t.lineTo(3*n,n),t.lineTo(n,n),t.lineTo(n,3*n),t.lineTo(-n,3*n),t.lineTo(-n,n),t.lineTo(-3*n,n),t.closePath()}},ot=Math.sqrt(1/3),at=2*ot,lt={draw:function(t,i){var n=Math.sqrt(i/at),s=n*ot;t.moveTo(0,-n),t.lineTo(s,0),t.lineTo(0,n),t.lineTo(-s,0),t.closePath()}};G.prototype={lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,i){t=+t,i=+i,this._point?this._context.lineTo(t,i):(this._point=1,this._context.moveTo(t,i))}},K.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,i=this._y,n=t.length;if(n)if(this._line?this._context.lineTo(t[0],i[0]):this._context.moveTo(t[0],i[0]),2===n)this._context.lineTo(t[1],i[1]);else for(var s=L(t),h=L(i),_=0,e=1;n>e;++_,++e)this._context.bezierCurveTo(s[0][_],h[0][_],s[1][_],h[1][_],t[e],i[e]);(this._line||0!==this._line&&1===n)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,i){this._x.push(+t),this._y.push(+i)}};var ct={draw:function(t,i){var n=Math.sqrt(i),s=-n/2;t.rect(s,s,n,n)}};V.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._y=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,i):this._context.moveTo(t,i);break;case 1:this._point=2;default:this._context.lineTo(t,this._y),this._context.lineTo(t,i)}this._y=i}},X.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,i):this._context.moveTo(t,i);break;case 1:this._point=2;default:this._context.lineTo(this._x,i),this._context.lineTo(t,i)}this._x=t}},Z.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){switch(t=+t,i=+i,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,i):this._context.moveTo(t,i);break;case 1:this._point=2;default:var n=(this._x+t)/2;this._context.lineTo(n,this._y),this._context.lineTo(n,i)}this._x=t,this._y=i}};var rt=Math.sqrt(3),ut={draw:function(t,i){var n=Math.sqrt(i/rt),s=n*rt/2;t.moveTo(0,s),t.lineTo(n,-s),t.lineTo(-n,-s),t.closePath()}},xt={draw:function(t,i){var n=Math.sqrt(i/rt),s=n*rt/2;t.moveTo(0,-s),t.lineTo(n,s),t.lineTo(-n,s),t.closePath()}},ft=[_t,et,lt,ct,ut,xt],yt="0.0.3";t.version=yt,t.arc=r,t.area=d,t.basisClosed=g,t.basisOpen=b,t.basis=T,t.bundle=N,t.cardinalClosed=q,t.cardinalOpen=R,t.cardinal=S,t.catmullRomClosed=j,t.catmullRomOpen=D,t.catmullRom=I,t.circle=_t,t.cross=et,t.diamond=lt,t.linearClosed=F,t.linear=u,t.line=H,t.natural=J,t.square=ct,t.stepAfter=Q,t.stepBefore=W,t.step=Y,t.symbol=$,t.symbols=ft,t.triangleDown=ut,t.triangleUp=xt});

/* https://github.com/d3/d3-timer Copyright 2015 Mike Bostock */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define("d3-timer",["exports"],e):e(t.d3_timer={})}(this,function(t){"use strict";function e(t,e,n){this.id=++c,this.restart(t,e,n)}function n(t,n,i){return new e(t,n,i)}function i(t){t=null==t?Date.now():+t,++l;try{for(var e,n=a;n;)t>=n.time&&(e=n.callback)(t-n.time,t),n=n.next}finally{--l}}function o(){l=f=0;try{i()}finally{for(var t,e=a,n=1/0;e;)e.callback?(n>e.time&&(n=e.time),e=(t=e).next):e=t?t.next=e.next:a=e.next;u=t,r(n)}}function r(t){if(!l){f&&(f=clearTimeout(f));var e=t-Date.now();e>24?1/0>t&&(f=setTimeout(o,e)):(l=1,s(o))}}var a,u,l=0,f=0,c=0,m={},s="undefined"!=typeof window&&(window.requestAnimationFrame||window.msRequestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame)||function(t){return setTimeout(t,17)};e.prototype=n.prototype={restart:function(t,e,n){if("function"!=typeof t)throw new TypeError("callback is not a function");n=(null==n?Date.now():+n)+(null==e?0:+e);var i=this.id,o=m[i];o?(o.callback=t,o.time=n):(o={next:null,callback:t,time:n},u?u.next=o:a=o,m[i]=u=o),r()},stop:function(){var t=this.id,e=m[t];e&&(e.callback=null,e.time=1/0,delete m[t],r())}};var d="0.0.6";t.version=d,t.timer=n,t.timerFlush=i});

function plot3d(data) {

	console.log('PLOTTING ', data)

	var arcs = [
	  // {"startAngle": 6.0164006661729340, "endAngle": 6.1497929866762595},
	  // {"startAngle": 6.1497929866762595, "endAngle": 6.2831853071795850},
	  // {"startAngle": 5.7696160251662825, "endAngle": 6.0164006661729340},
	  // {"startAngle": 5.4094390636563060, "endAngle": 5.7696160251662825},
	  // {"startAngle": 4.8224774611396780, "endAngle": 5.4094390636563060},
	  // {"startAngle": 3.8953388971130725, "endAngle": 4.8224774611396780},
	  // {"startAngle": 2.4012387305698390, "endAngle": 3.8953388971130725},
	  // {"startAngle": 0.0000000000000000, "endAngle": 2.4012387305698392}

	  // {"startAngle": 0.0000000000000000, "endAngle": 2.4012387305698392}
	  // {"startAngle": 0.0000000000000000, "endAngle": 2.4012387305698392}
	  // {"startAngle": 0.0000000000000000, "endAngle": 2.4012387305698392}
	];

	var x = 0;

	data.forEach( (d) => {
		if (d.depth != 1) return;
		a = d.x;
		b = d.x + d.dx;

		var s = Math.min(a, b);
		var t = Math.max(a, b);

		console.log(a, b, d);

		arcs.push({
			startAngle: s,
			endAngle: t
		});
	});

	console.log('arcs', arcs);

	var width = 960,
	    height = 500;

	var arc = d3_shape.arc()
	    .innerRadius(40) //
	    .outerRadius(90)
	    .cornerRadius(0)
	    .padAngle(0.02);

	var renderer = new THREE.WebGLRenderer;
	renderer.setClearColor(new THREE.Color("#fff", 1.0));
	renderer.setSize(width, height);
	renderer.domElement.style.cssText ="width: 960px; height: 500px; z-index:1000; position:absolute;"

	document.body.appendChild(renderer.domElement);

	window.meow = renderer.domElement;
	meow.style.display = 'none';

	var extrudeOptions = {
	  amount: 1,
	  bevelSize: 0,
	  bevelSegments: 1,
	  bevelEnabled: true,
	  curveSegments: 50,
	  steps: 1
	};

	var material = new THREE.MeshNormalMaterial({transparent: true, opacity: 0.7});
	var scene = new THREE.Scene;
	var shapes = [];

	arcs.forEach(function(d) {
	  var path = new THREE.Shape;

	  console.log(d);

	  arc.context({
	    moveTo: function(x, y) { path.moveTo(x, y); },
	    lineTo: function(x, y) { path.lineTo(x, y); },
	    arc: function(x, y, r, a0, a1, ccw) {
	    	// path.arc(x, y, r, a0, a1, ccw);
	      // var a;
	      if (ccw) a = a1, a1 = a0, a0 = a; // Uh, what?
	      // path.absarc(x, y, r, a0, a1, !ccw);
	      path.absarc(x, y, r, a0, a1, !ccw);
	    },
	    closePath: function() { path.closePath(); }
	  })(d);

	  var shape = THREE.SceneUtils.createMultiMaterialObject(path.extrude(extrudeOptions), [material]);
	  shapes.push(shape);
	  scene.add(shape);
	});


	// data.forEach(function(d) {
	//   var path = new THREE.Shape;

	//   console.log(d);

	// arc.innerRadius(20)
	//     .outerRadius(90)
	//     .cornerRadius(0)
	//     .padAngle(0.05);

	//   arc.context({
	//     moveTo: function(x, y) { path.moveTo(x, y); },
	//     lineTo: function(x, y) { path.lineTo(x, y); },
	//     arc: function(x, y, r, a0, a1, ccw) {
	// 		// path.arc(x, y, r, a0, a1, ccw);
	//       // var a;
	//       if (ccw) a = a1, a1 = a0, a0 = a; // Uh, what?
	//       path.absarc(x, y, r, a0, a1, !ccw);
	//     },
	//     closePath: function() { path.closePath(); }
	//   })(d);

	//   var shape = THREE.SceneUtils.createMultiMaterialObject(path.extrude(extrudeOptions), [material]);
	//   shapes.push(shape);
	//   scene.add(shape);
	// });

	var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
	camera.position.x = 250;
	camera.position.y = 100;
	camera.position.z = 100;
	camera.lookAt(new THREE.Vector3(20, 15, 0));

	d3_timer.timer(function(elapsed) {
	  shapes.forEach(function(s) { s.rotation.x = elapsed / 1600; });
	  renderer.render(scene, camera);
	});
}
