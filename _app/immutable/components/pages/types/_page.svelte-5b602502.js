import{S as It,i as Tt,s as Dt,k as dt,a as Pt,E as X,l as wt,m as C,h as M,c as Ft,F as Y,n as N,N as G,b as D,G as mt,H as R,C as W,L as rt,O as xt,e as ot,P as Bt,Q as St,q as Z,r as tt,p as ft,u as jt}from"../../../chunks/index-1e84a01c.js";const F=[{name:"bug",color:"#A8B820",halfEffectiveAgainst:["fairy","fighting","fire","flying","ghost","poison","steel"],twiceEffectiveAgainst:["dark","grass","psychic"],zeroEffectiveAgainst:[]},{name:"dark",color:"#705848",halfEffectiveAgainst:["dark","fairy","fighting"],twiceEffectiveAgainst:["ghost","psychic"],zeroEffectiveAgainst:[]},{name:"dragon",color:"#7038F8",halfEffectiveAgainst:["steel"],twiceEffectiveAgainst:["dragon"],zeroEffectiveAgainst:["fairy"]},{name:"electric",color:"#F8D030",halfEffectiveAgainst:["dragon","electric","grass"],twiceEffectiveAgainst:["flying","water"],zeroEffectiveAgainst:[]},{name:"fairy",color:"#EE99AC",halfEffectiveAgainst:["fire","poison","steel"],twiceEffectiveAgainst:["dark","dragon","fighting"],zeroEffectiveAgainst:[]},{name:"fighting",color:"#C03028",halfEffectiveAgainst:["bug","fairy","flying","poison","psychic"],twiceEffectiveAgainst:["dark","ice","normal","rock","steel"],zeroEffectiveAgainst:["ghost"]},{name:"fire",color:"#F08030",halfEffectiveAgainst:["dragon","fire","rock","water"],twiceEffectiveAgainst:["bug","grass","ice","steel"],zeroEffectiveAgainst:[]},{name:"flying",color:"#A890F0",halfEffectiveAgainst:["electric","rock","steel"],twiceEffectiveAgainst:["bug","fighting","grass"],zeroEffectiveAgainst:[]},{name:"ghost",color:"#705898",halfEffectiveAgainst:["dark"],twiceEffectiveAgainst:["ghost","psychic"],zeroEffectiveAgainst:["normal"]},{name:"grass",color:"#78C850",halfEffectiveAgainst:["bug","dragon","fire","flying","grass","poison"],twiceEffectiveAgainst:["ground","rock","water"],zeroEffectiveAgainst:[]},{name:"ground",color:"#E0C068",halfEffectiveAgainst:["bug","grass"],twiceEffectiveAgainst:["electric","fire","poison","rock","steel"],zeroEffectiveAgainst:["flying"]},{name:"ice",color:"#98D8D8",halfEffectiveAgainst:["fire","ice","steel","water"],twiceEffectiveAgainst:["dragon","flying","grass","ground"],zeroEffectiveAgainst:[]},{name:"normal",color:"#A8A878",halfEffectiveAgainst:[],twiceEffectiveAgainst:[],zeroEffectiveAgainst:[]},{name:"poison",color:"#A040A0",halfEffectiveAgainst:["ghost","ground","poison","rock"],twiceEffectiveAgainst:["fairy","grass"],zeroEffectiveAgainst:["steel"]},{name:"psychic",color:"#F85888",halfEffectiveAgainst:["psychic"],twiceEffectiveAgainst:["fighting","poison"],zeroEffectiveAgainst:["dark"]},{name:"rock",color:"#B8A038",halfEffectiveAgainst:["fighting","ground","steel"],twiceEffectiveAgainst:["bug","fire","flying","ice"],zeroEffectiveAgainst:[]},{name:"steel",color:"#B8B8D0",halfEffectiveAgainst:["electric","fire","steel","water"],twiceEffectiveAgainst:["fairy","ice","rock"],zeroEffectiveAgainst:[]},{name:"water",color:"#6890F0",halfEffectiveAgainst:["dragon","grass","water"],twiceEffectiveAgainst:["fire","ground","rock"],zeroEffectiveAgainst:[]}];function Ct(t){const e=+this._x.call(null,t),n=+this._y.call(null,t);return At(this.cover(e,n),e,n,t)}function At(t,e,n,i){if(isNaN(e)||isNaN(n))return t;var r,o=t._root,c={data:i},a=t._x0,g=t._y0,v=t._x1,p=t._y1,m,y,u,d,f,l,s,h;if(!o)return t._root=c,t;for(;o.length;)if((f=e>=(m=(a+v)/2))?a=m:v=m,(l=n>=(y=(g+p)/2))?g=y:p=y,r=o,!(o=o[s=l<<1|f]))return r[s]=c,t;if(u=+t._x.call(null,o.data),d=+t._y.call(null,o.data),e===u&&n===d)return c.next=o,r?r[s]=c:t._root=c,t;do r=r?r[s]=new Array(4):t._root=new Array(4),(f=e>=(m=(a+v)/2))?a=m:v=m,(l=n>=(y=(g+p)/2))?g=y:p=y;while((s=l<<1|f)===(h=(d>=y)<<1|u>=m));return r[h]=o,r[s]=c,t}function Ot(t){var e,n,i=t.length,r,o,c=new Array(i),a=new Array(i),g=1/0,v=1/0,p=-1/0,m=-1/0;for(n=0;n<i;++n)isNaN(r=+this._x.call(null,e=t[n]))||isNaN(o=+this._y.call(null,e))||(c[n]=r,a[n]=o,r<g&&(g=r),r>p&&(p=r),o<v&&(v=o),o>m&&(m=o));if(g>p||v>m)return this;for(this.cover(g,v).cover(p,m),n=0;n<i;++n)At(this,c[n],a[n],t[n]);return this}function qt(t,e){if(isNaN(t=+t)||isNaN(e=+e))return this;var n=this._x0,i=this._y0,r=this._x1,o=this._y1;if(isNaN(n))r=(n=Math.floor(t))+1,o=(i=Math.floor(e))+1;else{for(var c=r-n||1,a=this._root,g,v;n>t||t>=r||i>e||e>=o;)switch(v=(e<i)<<1|t<n,g=new Array(4),g[v]=a,a=g,c*=2,v){case 0:r=n+c,o=i+c;break;case 1:n=r-c,o=i+c;break;case 2:r=n+c,i=o-c;break;case 3:n=r-c,i=o-c;break}this._root&&this._root.length&&(this._root=a)}return this._x0=n,this._y0=i,this._x1=r,this._y1=o,this}function $t(){var t=[];return this.visit(function(e){if(!e.length)do t.push(e.data);while(e=e.next)}),t}function Lt(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function b(t,e,n,i,r){this.node=t,this.x0=e,this.y0=n,this.x1=i,this.y1=r}function Ht(t,e,n){var i,r=this._x0,o=this._y0,c,a,g,v,p=this._x1,m=this._y1,y=[],u=this._root,d,f;for(u&&y.push(new b(u,r,o,p,m)),n==null?n=1/0:(r=t-n,o=e-n,p=t+n,m=e+n,n*=n);d=y.pop();)if(!(!(u=d.node)||(c=d.x0)>p||(a=d.y0)>m||(g=d.x1)<r||(v=d.y1)<o))if(u.length){var l=(c+g)/2,s=(a+v)/2;y.push(new b(u[3],l,s,g,v),new b(u[2],c,s,l,v),new b(u[1],l,a,g,s),new b(u[0],c,a,l,s)),(f=(e>=s)<<1|t>=l)&&(d=y[y.length-1],y[y.length-1]=y[y.length-1-f],y[y.length-1-f]=d)}else{var h=t-+this._x.call(null,u.data),w=e-+this._y.call(null,u.data),_=h*h+w*w;if(_<n){var x=Math.sqrt(n=_);r=t-x,o=e-x,p=t+x,m=e+x,i=u.data}}return i}function Qt(t){if(isNaN(p=+this._x.call(null,t))||isNaN(m=+this._y.call(null,t)))return this;var e,n=this._root,i,r,o,c=this._x0,a=this._y0,g=this._x1,v=this._y1,p,m,y,u,d,f,l,s;if(!n)return this;if(n.length)for(;;){if((d=p>=(y=(c+g)/2))?c=y:g=y,(f=m>=(u=(a+v)/2))?a=u:v=u,e=n,!(n=n[l=f<<1|d]))return this;if(!n.length)break;(e[l+1&3]||e[l+2&3]||e[l+3&3])&&(i=e,s=l)}for(;n.data!==t;)if(r=n,!(n=n.next))return this;return(o=n.next)&&delete n.next,r?(o?r.next=o:delete r.next,this):e?(o?e[l]=o:delete e[l],(n=e[0]||e[1]||e[2]||e[3])&&n===(e[3]||e[2]||e[1]||e[0])&&!n.length&&(i?i[s]=n:this._root=n),this):(this._root=o,this)}function Xt(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this}function Yt(){return this._root}function Gt(){var t=0;return this.visit(function(e){if(!e.length)do++t;while(e=e.next)}),t}function Rt(t){var e=[],n,i=this._root,r,o,c,a,g;for(i&&e.push(new b(i,this._x0,this._y0,this._x1,this._y1));n=e.pop();)if(!t(i=n.node,o=n.x0,c=n.y0,a=n.x1,g=n.y1)&&i.length){var v=(o+a)/2,p=(c+g)/2;(r=i[3])&&e.push(new b(r,v,p,a,g)),(r=i[2])&&e.push(new b(r,o,p,v,g)),(r=i[1])&&e.push(new b(r,v,c,a,p)),(r=i[0])&&e.push(new b(r,o,c,v,p))}return this}function Jt(t){var e=[],n=[],i;for(this._root&&e.push(new b(this._root,this._x0,this._y0,this._x1,this._y1));i=e.pop();){var r=i.node;if(r.length){var o,c=i.x0,a=i.y0,g=i.x1,v=i.y1,p=(c+g)/2,m=(a+v)/2;(o=r[0])&&e.push(new b(o,c,a,p,m)),(o=r[1])&&e.push(new b(o,p,a,g,m)),(o=r[2])&&e.push(new b(o,c,m,p,v)),(o=r[3])&&e.push(new b(o,p,m,g,v))}n.push(i)}for(;i=n.pop();)t(i.node,i.x0,i.y0,i.x1,i.y1);return this}function Kt(t){return t[0]}function Ut(t){return arguments.length?(this._x=t,this):this._x}function Vt(t){return t[1]}function Wt(t){return arguments.length?(this._y=t,this):this._y}function Et(t,e,n){var i=new it(e??Kt,n??Vt,NaN,NaN,NaN,NaN);return t==null?i:i.addAll(t)}function it(t,e,n,i,r,o){this._x=t,this._y=e,this._x0=n,this._y0=i,this._x1=r,this._y1=o,this._root=void 0}function at(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}var z=Et.prototype=it.prototype;z.copy=function(){var t=new it(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,n,i;if(!e)return t;if(!e.length)return t._root=at(e),t;for(n=[{source:e,target:t._root=new Array(4)}];e=n.pop();)for(var r=0;r<4;++r)(i=e.source[r])&&(i.length?n.push({source:i,target:e.target[r]=new Array(4)}):e.target[r]=at(i));return t};z.add=Ct;z.addAll=Ot;z.cover=qt;z.data=$t;z.extent=Lt;z.find=Ht;z.remove=Qt;z.removeAll=Xt;z.root=Yt;z.size=Gt;z.visit=Rt;z.visitAfter=Jt;z.x=Ut;z.y=Wt;function I(t){return function(){return t}}function j(t){return(t()-.5)*1e-6}function Zt(t){return t.index}function st(t,e){var n=t.get(e);if(!n)throw new Error("node not found: "+e);return n}function te(t){var e=Zt,n=m,i,r=I(30),o,c,a,g,v,p=1;t==null&&(t=[]);function m(l){return 1/Math.min(a[l.source.index],a[l.target.index])}function y(l){for(var s=0,h=t.length;s<p;++s)for(var w=0,_,x,A,E,k,T,P;w<h;++w)_=t[w],x=_.source,A=_.target,E=A.x+A.vx-x.x-x.vx||j(v),k=A.y+A.vy-x.y-x.vy||j(v),T=Math.sqrt(E*E+k*k),T=(T-o[w])/T*l*i[w],E*=T,k*=T,A.vx-=E*(P=g[w]),A.vy-=k*P,x.vx+=E*(P=1-P),x.vy+=k*P}function u(){if(c){var l,s=c.length,h=t.length,w=new Map(c.map((x,A)=>[e(x,A,c),x])),_;for(l=0,a=new Array(s);l<h;++l)_=t[l],_.index=l,typeof _.source!="object"&&(_.source=st(w,_.source)),typeof _.target!="object"&&(_.target=st(w,_.target)),a[_.source.index]=(a[_.source.index]||0)+1,a[_.target.index]=(a[_.target.index]||0)+1;for(l=0,g=new Array(h);l<h;++l)_=t[l],g[l]=a[_.source.index]/(a[_.source.index]+a[_.target.index]);i=new Array(h),d(),o=new Array(h),f()}}function d(){if(c)for(var l=0,s=t.length;l<s;++l)i[l]=+n(t[l],l,t)}function f(){if(c)for(var l=0,s=t.length;l<s;++l)o[l]=+r(t[l],l,t)}return y.initialize=function(l,s){c=l,v=s,u()},y.links=function(l){return arguments.length?(t=l,u(),y):t},y.id=function(l){return arguments.length?(e=l,y):e},y.iterations=function(l){return arguments.length?(p=+l,y):p},y.strength=function(l){return arguments.length?(n=typeof l=="function"?l:I(+l),d(),y):n},y.distance=function(l){return arguments.length?(r=typeof l=="function"?l:I(+l),f(),y):r},y}var ee={value:()=>{}};function kt(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new Q(n)}function Q(t){this._=t}function ne(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",r=n.indexOf(".");if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}Q.prototype=kt.prototype={constructor:Q,on:function(t,e){var n=this._,i=ne(t+"",n),r,o=-1,c=i.length;if(arguments.length<2){for(;++o<c;)if((r=(t=i[o]).type)&&(r=ie(n[r],t.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<c;)if(r=(t=i[o]).type)n[r]=lt(n[r],t.name,e);else if(e==null)for(r in n)n[r]=lt(n[r],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new Q(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,o;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],i=0,r=o.length;i<r;++i)o[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,o=i.length;r<o;++r)i[r].value.apply(e,n)}};function ie(t,e){for(var n=0,i=t.length,r;n<i;++n)if((r=t[n]).name===e)return r.value}function lt(t,e,n){for(var i=0,r=t.length;i<r;++i)if(t[i].name===e){t[i]=ee,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}var O=0,$=0,q=0,Nt=1e3,J,L,K=0,B=0,U=0,H=typeof performance=="object"&&performance.now?performance:Date,Mt=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function bt(){return B||(Mt(re),B=H.now()+U)}function re(){B=0}function et(){this._call=this._time=this._next=null}et.prototype=zt.prototype={constructor:et,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?bt():+n)+(e==null?0:+e),!this._next&&L!==this&&(L?L._next=this:J=this,L=this),this._call=t,this._time=n,nt()},stop:function(){this._call&&(this._call=null,this._time=1/0,nt())}};function zt(t,e,n){var i=new et;return i.restart(t,e,n),i}function oe(){bt(),++O;for(var t=J,e;t;)(e=B-t._time)>=0&&t._call.call(void 0,e),t=t._next;--O}function ct(){B=(K=H.now())+U,O=$=0;try{oe()}finally{O=0,ae(),B=0}}function fe(){var t=H.now(),e=t-K;e>Nt&&(U-=e,K=t)}function ae(){for(var t,e=J,n,i=1/0;e;)e._call?(i>e._time&&(i=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:J=n);L=t,nt(i)}function nt(t){if(!O){$&&($=clearTimeout($));var e=t-B;e>24?(t<1/0&&($=setTimeout(ct,t-H.now()-U)),q&&(q=clearInterval(q))):(q||(K=H.now(),q=setInterval(fe,Nt)),O=1,Mt(ct))}}const se=1664525,le=1013904223,ut=4294967296;function ce(){let t=1;return()=>(t=(se*t+le)%ut)/ut}function ue(t){return t.x}function he(t){return t.y}var ge=10,ve=Math.PI*(3-Math.sqrt(5));function _e(t){var e,n=1,i=.001,r=1-Math.pow(i,1/300),o=0,c=.6,a=new Map,g=zt(m),v=kt("tick","end"),p=ce();t==null&&(t=[]);function m(){y(),v.call("tick",e),n<i&&(g.stop(),v.call("end",e))}function y(f){var l,s=t.length,h;f===void 0&&(f=1);for(var w=0;w<f;++w)for(n+=(o-n)*r,a.forEach(function(_){_(n)}),l=0;l<s;++l)h=t[l],h.fx==null?h.x+=h.vx*=c:(h.x=h.fx,h.vx=0),h.fy==null?h.y+=h.vy*=c:(h.y=h.fy,h.vy=0);return e}function u(){for(var f=0,l=t.length,s;f<l;++f){if(s=t[f],s.index=f,s.fx!=null&&(s.x=s.fx),s.fy!=null&&(s.y=s.fy),isNaN(s.x)||isNaN(s.y)){var h=ge*Math.sqrt(.5+f),w=f*ve;s.x=h*Math.cos(w),s.y=h*Math.sin(w)}(isNaN(s.vx)||isNaN(s.vy))&&(s.vx=s.vy=0)}}function d(f){return f.initialize&&f.initialize(t,p),f}return u(),e={tick:y,restart:function(){return g.restart(m),e},stop:function(){return g.stop(),e},nodes:function(f){return arguments.length?(t=f,u(),a.forEach(d),e):t},alpha:function(f){return arguments.length?(n=+f,e):n},alphaMin:function(f){return arguments.length?(i=+f,e):i},alphaDecay:function(f){return arguments.length?(r=+f,e):+r},alphaTarget:function(f){return arguments.length?(o=+f,e):o},velocityDecay:function(f){return arguments.length?(c=1-f,e):1-c},randomSource:function(f){return arguments.length?(p=f,a.forEach(d),e):p},force:function(f,l){return arguments.length>1?(l==null?a.delete(f):a.set(f,d(l)),e):a.get(f)},find:function(f,l,s){var h=0,w=t.length,_,x,A,E,k;for(s==null?s=1/0:s*=s,h=0;h<w;++h)E=t[h],_=f-E.x,x=l-E.y,A=_*_+x*x,A<s&&(k=E,s=A);return k},on:function(f,l){return arguments.length>1?(v.on(f,l),e):v.on(f)}}}function pe(){var t,e,n,i,r=I(-30),o,c=1,a=1/0,g=.81;function v(u){var d,f=t.length,l=Et(t,ue,he).visitAfter(m);for(i=u,d=0;d<f;++d)e=t[d],l.visit(y)}function p(){if(t){var u,d=t.length,f;for(o=new Array(d),u=0;u<d;++u)f=t[u],o[f.index]=+r(f,u,t)}}function m(u){var d=0,f,l,s=0,h,w,_;if(u.length){for(h=w=_=0;_<4;++_)(f=u[_])&&(l=Math.abs(f.value))&&(d+=f.value,s+=l,h+=l*f.x,w+=l*f.y);u.x=h/s,u.y=w/s}else{f=u,f.x=f.data.x,f.y=f.data.y;do d+=o[f.data.index];while(f=f.next)}u.value=d}function y(u,d,f,l){if(!u.value)return!0;var s=u.x-e.x,h=u.y-e.y,w=l-d,_=s*s+h*h;if(w*w/g<_)return _<a&&(s===0&&(s=j(n),_+=s*s),h===0&&(h=j(n),_+=h*h),_<c&&(_=Math.sqrt(c*_)),e.vx+=s*u.value*i/_,e.vy+=h*u.value*i/_),!0;if(u.length||_>=a)return;(u.data!==e||u.next)&&(s===0&&(s=j(n),_+=s*s),h===0&&(h=j(n),_+=h*h),_<c&&(_=Math.sqrt(c*_)));do u.data!==e&&(w=o[u.data.index]*i/_,e.vx+=s*w,e.vy+=h*w);while(u=u.next)}return v.initialize=function(u,d){t=u,n=d,p()},v.strength=function(u){return arguments.length?(r=typeof u=="function"?u:I(+u),p(),v):r},v.distanceMin=function(u){return arguments.length?(c=u*u,v):Math.sqrt(c)},v.distanceMax=function(u){return arguments.length?(a=u*u,v):Math.sqrt(a)},v.theta=function(u){return arguments.length?(g=u*u,v):Math.sqrt(g)},v}function ye(t){var e=I(.1),n,i,r;typeof t!="function"&&(t=I(t==null?0:+t));function o(a){for(var g=0,v=n.length,p;g<v;++g)p=n[g],p.vx+=(r[g]-p.x)*i[g]*a}function c(){if(n){var a,g=n.length;for(i=new Array(g),r=new Array(g),a=0;a<g;++a)i[a]=isNaN(r[a]=+t(n[a],a,n))?0:+e(n[a],a,n)}}return o.initialize=function(a){n=a,c()},o.strength=function(a){return arguments.length?(e=typeof a=="function"?a:I(+a),c(),o):e},o.x=function(a){return arguments.length?(t=typeof a=="function"?a:I(+a),c(),o):t},o}function de(t){var e=I(.1),n,i,r;typeof t!="function"&&(t=I(t==null?0:+t));function o(a){for(var g=0,v=n.length,p;g<v;++g)p=n[g],p.vy+=(r[g]-p.y)*i[g]*a}function c(){if(n){var a,g=n.length;for(i=new Array(g),r=new Array(g),a=0;a<g;++a)i[a]=isNaN(r[a]=+t(n[a],a,n))?0:+e(n[a],a,n)}}return o.initialize=function(a){n=a,c()},o.strength=function(a){return arguments.length?(e=typeof a=="function"?a:I(+a),c(),o):e},o.y=function(a){return arguments.length?(t=typeof a=="function"?a:I(+a),c(),o):t},o}function ht(t,e,n){const i=t.slice();return i[15]=e[n],i[17]=n,i}function gt(t,e,n){const i=t.slice();i[18]=e[n].source,i[19]=e[n].target;const r=i[18];i[20]=r.x,i[21]=r.y,i[22]=r.id,i[23]=r.index;const o=i[19];return i[24]=o.x,i[25]=o.y,i[26]=o.id,i}function V(t){const e=t.slice(),n=e[22]===e[26]?e[6](e[20],e[21],2*e[3]):e[7](e[20],e[21],e[24],e[25]);return e[29]=n,e}function we(t){const e=t.slice(),n=F[e[2].index??0];return e[30]=n.name,e[31]=n.color,e}function me(t){let e;return{c(){e=Z("drag around the nodes")},l(n){e=tt(n,"drag around the nodes")},m(n,i){D(n,e,i)},p:W,d(n){n&&M(e)}}}function vt(t){let e,n,i=t[30]+"",r;return{c(){e=Z(`you're holding
		`),n=dt("span"),r=Z(i),this.h()},l(o){e=tt(o,`you're holding
		`),n=wt(o,"SPAN",{});var c=C(n);r=tt(c,i),c.forEach(M),this.h()},h(){ft(n,"color",t[31])},m(o,c){D(o,e,c),D(o,n,c),mt(n,r)},p(o,c){c[0]&4&&i!==(i=o[30]+"")&&jt(r,i),c[0]&4&&ft(n,"color",o[31])},d(o){o&&M(e),o&&M(n)}}}function _t(t){let e,n,i,r;return{c(){e=X("path"),this.h()},l(o){e=Y(o,"path",{"stroke-opacity":!0,stroke:!0,d:!0}),C(e).forEach(M),this.h()},h(){var o;N(e,"stroke-opacity",n=t[22]===((o=t[2])==null?void 0:o.id)?1:.3),N(e,"stroke",i=t[23]!==void 0?F[t[23]].color:"none"),N(e,"d",r=t[29])},m(o,c){D(o,e,c)},p(o,c){var a;c[0]&6&&n!==(n=o[22]===((a=o[2])==null?void 0:a.id)?1:.3)&&N(e,"stroke-opacity",n),c[0]&2&&i!==(i=o[23]!==void 0?F[o[23]].color:"none")&&N(e,"stroke",i),c[0]&2&&r!==(r=o[29])&&N(e,"d",r)},d(o){o&&M(e)}}}function pt(t){let e,n=t[20]!==void 0&&t[21]!==void 0&&t[24]!==void 0&&t[25]!==void 0&&_t(V(t));return{c(){n&&n.c(),e=ot()},l(i){n&&n.l(i),e=ot()},m(i,r){n&&n.m(i,r),D(i,e,r)},p(i,r){i[20]!==void 0&&i[21]!==void 0&&i[24]!==void 0&&i[25]!==void 0?n?n.p(V(i),r):(n=_t(V(i)),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(i){n&&n.d(i),i&&M(e)}}}function yt(t){let e,n,i,r,o;function c(){return t[9](t[15])}return{c(){e=X("circle"),this.h()},l(a){e=Y(a,"circle",{fill:!0,cx:!0,cy:!0,r:!0}),C(e).forEach(M),this.h()},h(){N(e,"fill",F[t[17]].color),N(e,"cx",n=t[15].x),N(e,"cy",i=t[15].y),N(e,"r",t[3]),G(e,"cursor-grab",t[2]===null)},m(a,g){D(a,e,g),r||(o=[R(e,"pointerdown",c),R(e,"touchstart",Bt(t[8]))],r=!0)},p(a,g){t=a,g[0]&1&&n!==(n=t[15].x)&&N(e,"cx",n),g[0]&1&&i!==(i=t[15].y)&&N(e,"cy",i),g[0]&4&&G(e,"cursor-grab",t[2]===null)},d(a){a&&M(e),r=!1,xt(o)}}}function xe(t){let e,n,i,r,o,c;function a(f,l){return f[2]?vt:me}function g(f,l){return l===vt?we(f):f}let v=a(t),p=v(g(t,v)),m=t[1],y=[];for(let f=0;f<m.length;f+=1)y[f]=pt(gt(t,m,f));let u=t[0],d=[];for(let f=0;f<u.length;f+=1)d[f]=yt(ht(t,u,f));return{c(){e=dt("h1"),p.c(),n=Pt(),i=X("svg"),r=X("g");for(let f=0;f<y.length;f+=1)y[f].c();for(let f=0;f<d.length;f+=1)d[f].c();this.h()},l(f){e=wt(f,"H1",{});var l=C(e);p.l(l),l.forEach(M),n=Ft(f),i=Y(f,"svg",{fill:!0,"stroke-linecap":!0,viewBox:!0,xmlns:!0});var s=C(i);r=Y(s,"g",{"stroke-width":!0});var h=C(r);for(let w=0;w<y.length;w+=1)y[w].l(h);h.forEach(M);for(let w=0;w<d.length;w+=1)d[w].l(s);s.forEach(M),this.h()},h(){N(r,"stroke-width","1%"),N(i,"fill","none"),N(i,"stroke-linecap","round"),N(i,"viewBox",t[4]),N(i,"xmlns","http://www.w3.org/2000/svg"),G(i,"cursor-grabbing",t[2]!==null)},m(f,l){D(f,e,l),p.m(e,null),D(f,n,l),D(f,i,l),mt(i,r);for(let s=0;s<y.length;s+=1)y[s].m(r,null);for(let s=0;s<d.length;s+=1)d[s].m(i,null);o||(c=[R(i,"pointermove",t[10]),R(i,"pointerup",t[11])],o=!0)},p(f,l){if(v===(v=a(f))&&p?p.p(g(f,v),l):(p.d(1),p=v(g(f,v)),p&&(p.c(),p.m(e,null))),l[0]&206){m=f[1];let s;for(s=0;s<m.length;s+=1){const h=gt(f,m,s);y[s]?y[s].p(h,l):(y[s]=pt(h),y[s].c(),y[s].m(r,null))}for(;s<y.length;s+=1)y[s].d(1);y.length=m.length}if(l[0]&45){u=f[0];let s;for(s=0;s<u.length;s+=1){const h=ht(f,u,s);d[s]?d[s].p(h,l):(d[s]=yt(h),d[s].c(),d[s].m(i,null))}for(;s<d.length;s+=1)d[s].d(1);d.length=u.length}l[0]&4&&G(i,"cursor-grabbing",f[2]!==null)},i:W,o:W,d(f){f&&M(e),p.d(),f&&M(n),f&&M(i),rt(y,f),rt(d,f),o=!1,xt(c)}}}const S=1;function Ae(t,e,n){const i=2*Math.PI/F.length,r=S/25,o=2*S,c=[-S,o].flatMap(h=>[h,h]).join(" ");let a=F.map(({name:h},w)=>{const _=w*i;return{id:h,x:Math.cos(_),y:Math.sin(_)}});const g=F.flatMap(({name:h,twiceEffectiveAgainst:w})=>w.map(_=>({source:h,target:_})));let v=[];const p=_e(a).force("x",ye().strength(S/2)).force("y",de().strength(S/2)).force("charge",pe().strength(-r)).force("links",te(g).id(h=>h.id).distance(S/3)).on("tick",()=>{n(0,a),n(1,v=g)}),m=(h,w,_)=>{const x=Math.hypot(h,w),[A,E]=[h,w].map(P=>_*P/x),k=Math.max(A,E)/2,T=`${k} ${k} 0 0 0`;return`M${h} ${w} a${T} ${A} ${E} ${T} ${-A} ${-E}`},y=(h,w,_,x)=>{const A=_-h,E=x-w,k=Math.hypot(A,E);return`M${h} ${w}a${k} ${k} 0 0 0 ${A} ${E}`};let u=null;function d(h){St.call(this,t,h)}return[a,v,u,r,c,p,m,y,d,h=>{n(2,u=h),p.alphaTarget(.3).restart()},h=>{var w;if(u){const{currentTarget:_,pointerId:x,x:A,y:E}=h;_.setPointerCapture(x);const k=new DOMPoint(A,E).matrixTransform((w=_.getScreenCTM())==null?void 0:w.inverse());n(2,u.fx=k.x,u),n(2,u.fy=k.y,u)}},()=>{u&&(n(2,u.fx=null,u),n(2,u.fy=null,u),n(2,u=null),p.alphaTarget(0))}]}class ke extends It{constructor(e){super(),Tt(this,e,Ae,xe,Dt,{},null,[-1,-1])}}export{ke as default};