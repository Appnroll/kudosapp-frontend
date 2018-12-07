(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(n,t,e){n.exports=e(43)},33:function(n,t,e){},35:function(n,t,e){},43:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),c=e(12),o=e.n(c),i=(e(33),e(35),e(7)),u=e(8),l=e(10),s=e(9),f=e(11),p=e(2),h=e(3),m={White:"#FFFFFF",Overcast:"#F1F1F2",WarmGray:"#BCBABE",Ice:"#A1D6E2",GlacierBlue:"#1995AD",Banana:"#FFDB5C"},b=e(45),d=e(47);var v=function(n){return r.a.createElement("div",null)};function j(){var n=Object(p.a)(["\n  font-weight: bold;\n  font-size: 25px;\n  span {\n    color: ","\n  }\n"]);return j=function(){return n},n}function O(){var n=Object(p.a)(["\n  display: flex;\n  li {\n    font-size: 12px;\n    margin-left: 25px;\n    color: ","\n    text-transform: uppercase;\n    font-weight: 400;\n    letter-spacing: 0.5px;\n  }\n"]);return O=function(){return n},n}function g(){var n=Object(p.a)(["\n  width: 100%;\n  height: ","px;\n  background: ",";\n  border-bottom: 2px solid ","\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n  box-sizing: border-box;\n"]);return g=function(){return n},n}var x=function(n){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(f.a)(t,n),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(k,null,r.a.createElement(y,null,r.a.createElement(v,null),"KUDOS",r.a.createElement("span",null,"ME")),r.a.createElement(E,null,r.a.createElement("li",null,r.a.createElement(b.a,{to:"/wall",activeStyle:{color:m.Banana}},"Wall")),r.a.createElement("li",null,r.a.createElement(b.a,{to:"/stats",activeStyle:{color:m.Banana}},"Statistics"))))}}]),t}(a.Component),k=h.a.header(g(),70,m.White,m.Ice),E=h.a.ul(O(),m.WarmGray),y=h.a.h1(j(),m.Banana),w=Object(d.a)(x),B=e(46),F=e(16);function W(){var n=Object(p.a)(["\n  font-size: 12px;\n  margin-top: 20px;\n"]);return W=function(){return n},n}function S(){var n=Object(p.a)(["\n  font-size: 16px;\n  font-weight: 300;\n"]);return S=function(){return n},n}function C(){var n=Object(p.a)(["\n  color: ","\n"]);return C=function(){return n},n}function U(){var n=Object(p.a)(["\n  color: ","\n"]);return U=function(){return n},n}function z(){var n=Object(p.a)(["\n  font-weight: bold;\n  font-size: 14px;\n  margin-right: 3px;\n"]);return z=function(){return n},n}function P(){var n=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return P=function(){return n},n}function G(){var n=Object(p.a)(["\n  width: 100%;\n  background: ",";\n  box-sizing: border-box;\n  border-radius: 15px;\n  min-height: 50px;\n  margin-top: 20px;\n  padding: 20px;\n  border: 2px solid ",";\n  h6 {\n    margin-bottom: 10px;\n  }\n"]);return G=function(){return n},n}var A=function(n){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(f.a)(t,n),Object(u.a)(t,[{key:"isSlackUser",value:function(n){return"@"===n[0]}},{key:"render",value:function(){var n=this.props.kudos,t=n.name,e=n.points,a=n.description,c=n.from;return r.a.createElement(D,null,r.a.createElement(I,null,r.a.createElement("h6",null,r.a.createElement(M,null,"KUDOS "),"for",r.a.createElement(J,{slackUser:this.isSlackUser(t)}," ",t)),r.a.createElement(K,null,e>0?"+"+e:e)),r.a.createElement($,null,a),r.a.createElement(q,null,"by ",r.a.createElement(J,{slackUser:this.isSlackUser(c)},c)))}}]),t}(a.Component),D=h.a.li(G(),m.White,m.Ice),I=h.a.div(P()),M=h.a.strong(z()),J=h.a.span(U(),function(n){return n.slackUser?m.GlacierBlue:m.WarmGray}),K=h.a.div(C(),m.Banana),$=h.a.p(S()),q=h.a.p(W()),H=A,L="https://kudos-anr.herokuapp.com/";function N(){var n=Object(p.a)(["\n   max-width: 500px;\n   margin: 0 auto 20px;\n"]);return N=function(){return n},n}var Q=function(n){function t(){var n,e;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=Object(l.a)(this,(n=Object(s.a)(t)).call.apply(n,[this].concat(r)))).state={kudoses:[]},e}return Object(f.a)(t,n),Object(u.a)(t,[{key:"componentWillMount",value:function(){var n=this;fetch(L+"kudos").then(function(n){return n.json()}).then(function(t){n.setState({kudoses:t})})}},{key:"render",value:function(){return r.a.createElement(R,null,this.state.kudoses.map(function(n,t){return r.a.createElement(H,{kudos:n,key:t})}))}}]),t}(a.Component),R=h.a.ul(N()),T=Q;function V(){var n=Object(p.a)(["\n  width: 100%;\n  text-align: center;\n"]);return V=function(){return n},n}function X(){var n=Object(p.a)(["\n  width: 100%;\n  text-align: center;\n"]);return X=function(){return n},n}function Y(){var n=Object(p.a)(["\n  width: 100px;\n  background: ",";\n  height: calc(","%);\n  margin: 10px;\n  position: relative;\n"]);return Y=function(){return n},n}function Z(){var n=Object(p.a)(["\n   margin: 50px auto 0;\n   display: flex;\n   overflow-x: scroll;\n   padding: 20px 20px 60px;\n   li {\n    height: 50vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n   }\n"]);return Z=function(){return n},n}var _=function(n){function t(){var n,e;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=Object(l.a)(this,(n=Object(s.a)(t)).call.apply(n,[this].concat(r)))).state={ranking:[]},e}return Object(f.a)(t,n),Object(u.a)(t,[{key:"componentWillMount",value:function(){var n=this;fetch(L+"kudos/ranking").then(function(n){return n.json()}).then(function(t){return t.sort(n.compare)}).then(function(t){n.setState({ranking:t})})}},{key:"compare",value:function(n,t){return n.totalPoints>t.totalPoints?-1:n.totalPoints<t.totalPoints?1:0}},{key:"calculateBar",value:function(n){var t=this.state.ranking[0].totalPoints;return n>0?n/t*100:0}},{key:"render",value:function(){var n=this;return r.a.createElement(nn,null,this.state.ranking.map(function(t,e){return r.a.createElement("li",{key:e},r.a.createElement(en,null,t.totalPoints),r.a.createElement(tn,{best:!e,height:n.calculateBar(t.totalPoints)}),r.a.createElement(an,null,t.name))}))}}]),t}(a.Component),nn=h.a.ul(Z()),tn=h.a.div(Y(),m.GlacierBlue,function(n){return n.height}),en=h.a.div(X()),an=h.a.div(V()),rn=_;function cn(){var n=Object(p.a)(["\n  width: 100%;\n  height: calc(100vh - ","px);\n  overflow: scroll;\n"]);return cn=function(){return n},n}function on(){var n=Object(p.a)(["\n   background: ",";\n   width: 100vw;\n   height: 100vh;\n   overflow: hidden;\n"]);return on=function(){return n},n}var un=function(n){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(f.a)(t,n),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(ln,null,r.a.createElement(w,null),r.a.createElement(sn,null,r.a.createElement(B.a,null,r.a.createElement(F.a,{exact:!0,path:"/wall",component:T}),r.a.createElement(F.a,{path:"/stats",component:rn}))))}}]),t}(a.Component),ln=h.a.div(on(),m.Overcast),sn=h.a.main(cn(),70),fn=un,pn=function(n){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(f.a)(t,n),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(fn,null)}}]),t}(a.Component),hn=e(44);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(hn.a,null,r.a.createElement(pn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.18024ebc.chunk.js.map