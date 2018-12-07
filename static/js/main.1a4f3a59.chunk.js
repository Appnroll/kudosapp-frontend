(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(n,e,t){n.exports=t(43)},33:function(n,e,t){},35:function(n,e,t){},43:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(12),c=t.n(o),i=(t(33),t(35),t(5)),l=t(6),u=t(8),s=t(7),p=t(9),f=t(2),m=t(3),d={White:"#FFFFFF",Overcast:"#F1F1F2",WarmGray:"#BCBABE",Ice:"#A1D6E2",GlacierBlue:"#1995AD",Banana:"#FFDB5C"},h=t(45),b=t(47);var v=function(n){return r.a.createElement("div",null)};function x(){var n=Object(f.a)(["\n  font-weight: bold;\n  font-size: 25px;\n  span {\n    color: ","\n  }\n"]);return x=function(){return n},n}function g(){var n=Object(f.a)(["\n  display: flex;\n  li {\n    font-size: 12px;\n    margin-left: 25px;\n    color: ","\n    text-transform: uppercase;\n    font-weight: 400;\n    letter-spacing: 0.5px;\n  }\n"]);return g=function(){return n},n}function j(){var n=Object(f.a)(["\n  width: 100%;\n  height: ","px;\n  background: ",";\n  border-bottom: 2px solid ",";\n  padding: 0 20px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  & > div {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      width: 100%;\n      max-width: 1000px;\n      margin: auto;\n  }\n"]);return j=function(){return n},n}var O=function(n){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(p.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement(E,null,r.a.createElement("div",null,r.a.createElement(y,null,r.a.createElement(v,null),"KUDOS",r.a.createElement("span",null,"ME")),r.a.createElement(k,null,r.a.createElement("li",null,r.a.createElement(h.a,{to:"/kup-kudosapp-frontend/instructions",activeStyle:{color:d.Banana}},"Instructions")),r.a.createElement("li",null,r.a.createElement(h.a,{to:"/kup-kudosapp-frontend/wall",activeStyle:{color:d.Banana}},"Wall")),r.a.createElement("li",null,r.a.createElement(h.a,{to:"/kup-kudosapp-frontend/stats",activeStyle:{color:d.Banana}},"Statistics")))))}}]),e}(a.Component),E=m.a.header(j(),70,d.White,d.Ice),k=m.a.ul(g(),d.WarmGray),y=m.a.h1(x(),d.Banana),w=Object(b.a)(O),B=t(46),S=t(20);function W(){var n=Object(f.a)(["\n  font-size: 12px;\n  margin-top: 20px;\n"]);return W=function(){return n},n}function z(){var n=Object(f.a)(["\n  font-size: 16px;\n  font-weight: 300;\n"]);return z=function(){return n},n}function F(){var n=Object(f.a)(["\n  color: ","\n"]);return F=function(){return n},n}function C(){var n=Object(f.a)(["\n  color: ","\n"]);return C=function(){return n},n}function U(){var n=Object(f.a)(["\n  font-weight: bold;\n  font-size: 14px;\n  margin-right: 3px;\n"]);return U=function(){return n},n}function G(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return G=function(){return n},n}function P(){var n=Object(f.a)(["\n  width: 100%;\n  background: ",";\n  box-sizing: border-box;\n  border-radius: 15px;\n  min-height: 50px;\n  margin-top: 20px;\n  padding: 20px;\n  border: 2px solid ",";\n  h6 {\n    margin-bottom: 10px;\n  }\n"]);return P=function(){return n},n}var I=function(n){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(p.a)(e,n),Object(l.a)(e,[{key:"isSlackUser",value:function(n){return"@"===n[0]}},{key:"render",value:function(){var n=this.props.kudos,e=n.name,t=n.points,a=n.description,o=n.from;return r.a.createElement(A,null,r.a.createElement(D,null,r.a.createElement("h6",null,r.a.createElement(M,null,"KUDOS "),"for",r.a.createElement(J,{slackUser:this.isSlackUser(e)}," ",e)),r.a.createElement(K,null,t>0?"+"+t:t)),r.a.createElement(L,null,a),r.a.createElement(T,null,"by ",r.a.createElement(J,{slackUser:this.isSlackUser(o)},o)))}}]),e}(a.Component),A=m.a.li(P(),d.White,d.Ice),D=m.a.div(G()),M=m.a.strong(U()),J=m.a.span(C(),function(n){return n.slackUser?d.GlacierBlue:d.WarmGray}),K=m.a.div(F(),d.Banana),L=m.a.p(z()),T=m.a.p(W()),Y=I,$="https://kudos-anr.herokuapp.com/";function q(){var n=Object(f.a)(["\n   max-width: 500px;\n   margin: 0 auto 20px;\n"]);return q=function(){return n},n}var H=function(n){function e(){var n,t;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(n=Object(s.a)(e)).call.apply(n,[this].concat(r)))).state={kudoses:[]},t}return Object(p.a)(e,n),Object(l.a)(e,[{key:"componentWillMount",value:function(){var n=this;fetch($+"kudos").then(function(n){return n.json()}).then(function(e){n.setState({kudoses:e})})}},{key:"render",value:function(){return r.a.createElement(N,null,this.state.kudoses.map(function(n,e){return r.a.createElement(Y,{kudos:n,key:e})}))}}]),e}(a.Component),N=m.a.ul(q()),Q=H;function R(){var n=Object(f.a)(["\n  width: 100%;\n  text-align: center;\n"]);return R=function(){return n},n}function V(){var n=Object(f.a)(["\n  width: 100%;\n  text-align: center;\n"]);return V=function(){return n},n}function X(){var n=Object(f.a)(["\n  width: 100px;\n  background: ",";\n  height: calc(","%);\n  margin: 10px;\n  position: relative;\n"]);return X=function(){return n},n}function Z(){var n=Object(f.a)(["\n   margin: 50px auto 0;\n   display: flex;\n   overflow-x: scroll;\n   padding: 20px 20px 60px;\n   li {\n    height: 50vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n   }\n"]);return Z=function(){return n},n}var _=function(n){function e(){var n,t;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(n=Object(s.a)(e)).call.apply(n,[this].concat(r)))).state={ranking:[]},t}return Object(p.a)(e,n),Object(l.a)(e,[{key:"componentWillMount",value:function(){var n=this;fetch($+"kudos/ranking").then(function(n){return n.json()}).then(function(e){return e.sort(n.compare)}).then(function(e){n.setState({ranking:e})})}},{key:"compare",value:function(n,e){return n.totalPoints>e.totalPoints?-1:n.totalPoints<e.totalPoints?1:0}},{key:"calculateBar",value:function(n){var e=this.state.ranking[0].totalPoints;return n>0?n/e*100:0}},{key:"render",value:function(){var n=this;return r.a.createElement(nn,null,this.state.ranking.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(tn,null,e.totalPoints),r.a.createElement(en,{best:!t,height:n.calculateBar(e.totalPoints)}),r.a.createElement(an,null,e.name))}))}}]),e}(a.Component),nn=m.a.ul(Z()),en=m.a.div(X(),d.GlacierBlue,function(n){return n.height}),tn=m.a.div(V()),an=m.a.div(R()),rn=_;function on(){var n=Object(f.a)(["\n   color: ","\n"]);return on=function(){return n},n}function cn(){var n=Object(f.a)(["\n   font-size: 16px;\n"]);return cn=function(){return n},n}function ln(){var n=Object(f.a)(["\n   color: ",";\n   font-size: 30px;\n   font-weight: bold;\n   margin-right: 30px;\n"]);return ln=function(){return n},n}function un(){var n=Object(f.a)(["\n   max-width: 600px;\n   margin: 20px auto;\n   background: ",";\n   border-radius: 20px;\n   padding: 40px;\n   border: 2px solid ",";\n   li {\n    display: flex;\n    align-items: center;\n    padding: 20px;\n   }\n   h4 {\n    font-size: 20px;\n    font-weight: bold;\n    text-align: center;\n   }\n"]);return un=function(){return n},n}var sn=function(n){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(p.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement(pn,null,r.a.createElement("h4",null,"4 steps to be a hero!"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(fn,null,"1"),r.a.createElement(mn,null,"Log in to Slack")),r.a.createElement("li",null,r.a.createElement(fn,null,"2"),r.a.createElement(mn,null,"Open random conversation")),r.a.createElement("li",null,r.a.createElement(fn,null,"3"),r.a.createElement(mn,null,"Type ",r.a.createElement(dn,null,"/kudos\xa0@somebody; thank\xa0you for\xa0being\xa0awesome; 100"))),r.a.createElement("li",null,r.a.createElement(fn,null,"4"),r.a.createElement(mn,null,"You're a hero!"))))}}]),e}(a.Component),pn=m.a.ul(un(),d.White,d.Ice),fn=m.a.div(ln(),d.Banana),mn=m.a.div(cn()),dn=m.a.span(on(),d.GlacierBlue),hn=sn;function bn(){var n=Object(f.a)(["\n  width: 100%;\n  height: calc(100vh - ","px);\n  overflow: scroll;\n  padding: 0 20px;\n  box-sizing: border-box;\n"]);return bn=function(){return n},n}function vn(){var n=Object(f.a)(["\n   background: ",";\n   width: 100vw;\n   height: 100vh;\n   overflow: hidden;\n"]);return vn=function(){return n},n}var xn=function(n){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(p.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement(gn,null,r.a.createElement(w,null),r.a.createElement(jn,null,r.a.createElement(B.a,null,r.a.createElement(S.a,{path:"/kup-kudosapp-frontend/instructions",component:hn}),r.a.createElement(S.a,{path:"/kup-kudosapp-frontend/wall",component:Q}),r.a.createElement(S.a,{path:"/kup-kudosapp-frontend/stats",component:rn}))))}}]),e}(a.Component),gn=m.a.div(vn(),d.Overcast),jn=m.a.main(bn(),70),On=xn,En=function(n){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(p.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement(On,null)}}]),e}(a.Component),kn=t(44);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(kn.a,null,r.a.createElement(En,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.1a4f3a59.chunk.js.map