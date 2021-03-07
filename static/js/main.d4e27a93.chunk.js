(this["webpackJsonpfinance-diagram"]=this["webpackJsonpfinance-diagram"]||[]).push([[0],{171:function(e,t,a){},172:function(e,t,a){},271:function(e,t,a){},278:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),i=(a(171),a(24)),l=a(39),s=a(52),u=a(43),d=a(28),h=a.n(d);function j(e){return e.reduce((function(e,t){return e+t}),0)}function f(e,t){for(var a,n=(a=e,h()(a).set("s",59).set("m",59).set("h",23)),r=[];n.isBefore(t);)n=h()(n).add(1,"day"),r.push(n);return r}function b(e,t,a){return function(e,t,a){var n,r=f(e,t),c=a.chart.result[0],o=c.timestamp,l=Object(i.a)(c.indicators.quote,1)[0],s=l.high,d=l.low,h=l.open,j=(l.close,l.volume),b=[],p=0,m=Object(u.a)(r);try{for(m.s();!(n=m.n()).done;){for(var v=n.value,O={lows:[],sells:[],highs:[],volume:[],time:v.format("DD MMM")};p<o.length&&v.unix()>o[p];)O.lows.push(d[p]),O.sells.push(h[p]),O.highs.push(s[p]),O.volume.push(j[p]),p++;if(Object.values(O).some((function(e){return Array.isArray(e)&&e.length}))){if(O.volume.every((function(e){return 0==e})))for(var g in O.volume)O.volume[g]=1;b.push(O)}}}catch(x){m.e(x)}finally{m.f()}return b}(e,t,a).map((function(e){var t=e.highs,a=e.lows,n=e.sells,r=e.volume,c=e.time;return Object(l.a)(Object(l.a)({},function(e,t,a,n){var r=e.map((function(e,a){return t[a]*e})),c=j(e),o=j(r)/c;return{low:Math.min.apply(Math,Object(s.a)(a)),high:Math.max.apply(Math,Object(s.a)(n)),avg:o}}(r,n,a,t)),{},{time:c})}))}var p=a(288),m=a(307),v=a(299),O=a(289),g=a(305),x=a(290),y=a(308),w=a(303),S=a(70),k=a(306),M=a(292),A=a(293),D=(a(172),a(9)),N={avg:"Average",high:"High",low:"Low"},T="#fa541c",F="#1890ff",L="#cAA8ff",P=40,C=0,I=Object(l.a)(Object(l.a)({},S.b),{},{minWidth:60,backgroundColor:"rgba(0,0,0,0.9)",color:"white"});function R(e){var t=e.data,a=e.width,r=void 0===a?800:a,c=e.height,o=void 0===c?600:c,i=e.displayAverages,l=function(e){return Object(n.useMemo)((function(){var t=e?["low","avg","high"]:["low","high"];return{keys:t,colorScale:Object(p.a)({domain:t,range:e?[T,"#fadb14",F]:[T,F]}),aggregateDataScale:Object(m.a)({domain:t,padding:.1})}}),[e])}(void 0!==i&&i),u=l.keys,d=l.colorScale,h=l.aggregateDataScale,j=Object(n.useRef)(null),f=Object(m.a)({domain:t.map((function(e){return e.time})),padding:.2}),b=Object(v.a)({domain:[0,Math.max.apply(Math,Object(s.a)(t.map((function(e){return e.high}))))],nice:!0}),S=Object(O.a)(),R=S.tooltipOpen,J=S.tooltipLeft,B=S.tooltipTop,q=S.hideTooltip,E=S.showTooltip,z=S.tooltipData,H=Object(g.a)({scroll:!0}),U=H.containerRef,V=H.TooltipInPortal,W=r,Y=o-P-50;return f.rangeRound([0,W]),b.range([Y,0]),h.rangeRound([0,f.bandwidth()]),Object(D.jsxs)("div",{className:"stock-chart",children:[Object(D.jsxs)("svg",{ref:U,width:r,height:o,fill:"white",children:[Object(D.jsx)("rect",{x:0,y:0,width:r,height:o}),Object(D.jsx)(x.a,{top:P,children:Object(D.jsx)(y.a,{data:t,keys:u,x0:function(e){return e.time},yScale:b,x0Scale:f,x1Scale:h,color:d,height:Y,children:function(e){return e.map((function(e){return Object(D.jsx)(x.a,{left:e.x0,children:e.bars.map((function(t){return Object(D.jsx)("rect",{x:t.x,y:t.y,height:t.height,width:t.width+5,fill:t.color,onMouseLeave:function(){j.current=setTimeout((function(){q()}),300)},onMouseMove:function(a){j.current&&clearTimeout(j.current);var n=Object(k.a)(a),r=t.x+e.x0+t.width/2;E({tooltipData:t,tooltipTop:null===n||void 0===n?void 0:n.y,tooltipLeft:r})}},"".concat(e.index,"-").concat(t.x,"-").concat(t.index,"-").concat(t.key))}))},"".concat(e.index))}))}})}),Object(D.jsx)(M.a,{top:Y+P,scale:f,stroke:L,tickStroke:L,tickLabelProps:function(){return{fill:L,fontSize:11,textAnchor:"middle"}}}),Object(D.jsx)(A.a,{left:C+30,top:P,scale:b,stroke:L,tickStroke:L,hideZero:!0})]}),Object(D.jsx)("div",{style:{position:"absolute",top:P/2-10,width:"100%",display:"flex",justifyContent:"center",fontSize:"14px"},children:Object(D.jsx)(w.a,{labelFormat:function(e){return N[e]},scale:d,direction:"row",labelMargin:"0 15px 0 0"})}),R&&z&&Object(D.jsxs)(V,{top:B,left:J,style:I,children:[Object(D.jsx)("div",{style:{color:z.color},children:Object(D.jsx)("strong",{children:N[z.key]})}),Object(D.jsxs)("div",{children:[z.value.toFixed(2),"$"]})]})]})}var J=a(140),B=a.n(J);function q(e,t){var a=Object(l.a)(Object(l.a)({},t),{},{url:e}),n=function(e){var t=localStorage.getItem(JSON.stringify(e));return t?JSON.parse(t):null}(a);return n?Promise.resolve(n):B.a.get(e,{params:t,headers:{"x-rapidapi-key":"ddac0762b2mshf2a1e97a045686ep1ee811jsn9c89f803eddf","x-rapidapi-host":"apidojo-yahoo-finance-v1.p.rapidapi.com"}}).then((function(e){return function(e,t){var a=JSON.stringify(t,void 0,2),n=JSON.stringify(e);localStorage.setItem(n,a)}(a,e.data),e.data}))}var E=a(300),z=a(295),H=a(296),U=a(304),V=a(298),W=a(301),Y=a(155),Z=a(157),$=a(294),G=a(302),K=[{value:"AMD",label:"AMD"}];function Q(e,t){return e.toLowerCase().includes(t.toLowerCase())}function X(e){var t=Object(n.useState)(K),a=Object(i.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(!1),s=Object(i.a)(o,2),d=s[0],h=s[1],j=Object($.a)((function(e){var t;d||function(e,t){return e.find((function(e){var a=e.value,n=e.label;return Q(a,t)||Q(n,t)}))}(r,e)||(h(!0),(t=e,q("https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete",{q:t,region:"US"})).then((function(e){var t=function(e){return e.quotes.map((function(e){var t=e.longname,a=e.shortname,n=e.symbol;return{value:n,label:"".concat(a||t," (").concat(n,")")}}))}(e);c((function(e){return function(e,t){var a,n=new Map,r=Object(u.a)(e);try{for(r.s();!(a=r.n()).done;){var c=a.value;n.set(c.value,c)}}catch(s){r.e(s)}finally{r.f()}var o,i=Object(u.a)(t);try{for(i.s();!(o=i.n()).done;){var l=o.value;n.set(l.value,l)}}catch(s){i.e(s)}finally{i.f()}return Array.from(n.values())}(e,t)})),h(!1)})))}),1e3).callback;return Object(D.jsx)(G.a,Object(l.a)({showSearch:!0,placeholder:"Type a sock symbol or company name",onSearch:j,loading:d,options:r,filterOption:function(e,t){return!!Q(t.label,e)&&t}},e))}var _=V.a.RangePicker,ee=W.a.Item,te=W.a.useForm;function ae(e){var t=te(),a=Object(i.a)(t,1)[0];return Object(D.jsxs)(W.a,{className:"config-form",layout:"vertical",onFinish:function(t){e.onSubmit(t),a.resetFields()},initialValues:e.config,form:a,children:[Object(D.jsx)(ee,{className:"input-width",label:"Stock",name:"symbol",children:Object(D.jsx)(X,{})}),Object(D.jsx)(ee,{rules:[{validator:function(e,t){var a=Object(i.a)(t,2),n=a[0],r=a[1];return r.diff(n,"days")<3?Promise.reject("You should set a minimum interval of 3 days."):h()().isBefore(r)?Promise.reject("End date must be today or a day in the past."):Promise.resolve()}}],label:"Sample Interval",name:"range",children:Object(D.jsx)(_,{showNow:!1,showTime:!1})}),Object(D.jsx)(Y.a,{icon:Object(D.jsx)(Z.a,{}),type:"primary",htmlType:"submit",loading:e.loading,children:"Display Data"})]})}var ne=a(297),re=(a(270),a(271),E.a.Text),ce=h()("2021-03-07 16:08:00"),oe={range:[h()(ce).subtract(1,"week"),ce],symbol:"AMD"},ie=function(e){return!e};var le=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(oe),o=Object(i.a)(c,2),l=o[0],s=o[1],u=Object(n.useReducer)(ie,!1),d=Object(i.a)(u,2),h=d[0],j=d[1],f=Object(n.useState)(!0),p=Object(i.a)(f,2),m=p[0],v=p[1],O=Object(n.useRef)(null),g=function(){var e;v(!0),(e={period1:l.range[0].unix(),period2:l.range[1].unix(),symbol:l.symbol,region:"US"},q("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart",e)).then((function(e){v(!1),r(b(l.range[0],l.range[1],e))}))};return Object(n.useEffect)((function(){g()}),[l]),Object(D.jsxs)("div",{children:[Object(D.jsx)("div",{className:"header mr-auto ml-auto",children:Object(D.jsx)("h2",{className:"p-0 m-0",children:"Stock Statistics"})}),Object(D.jsx)("div",{className:"vertical-center full-page",children:Object(D.jsxs)(z.a,{align:"middle",children:[Object(D.jsx)(H.a,{span:24,lg:8,children:Object(D.jsx)(ae,{loading:m,config:l,onSubmit:s})}),Object(D.jsx)(H.a,{span:24,lg:16,children:Object(D.jsxs)(z.a,{children:[Object(D.jsx)(H.a,{span:24,ref:O,children:Object(D.jsx)(ne.a,{children:function(e){var t=e.width;return Object(D.jsx)(R,{width:t,height:.6*window.innerHeight,displayAverages:h,data:a})}})}),Object(D.jsx)(H.a,{className:"text-center",span:24,children:Object(D.jsxs)("label",{children:[Object(D.jsx)(re,{strong:!0,className:"mr-small cursor-pointer",children:"Display Averages"}),Object(D.jsx)(U.a,{value:h,onChange:j})]})})]})})]})})]})},se=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,309)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))};o.a.render(Object(D.jsx)(r.a.StrictMode,{children:Object(D.jsx)(le,{})}),document.getElementById("root")),se()}},[[278,1,2]]]);
//# sourceMappingURL=main.d4e27a93.chunk.js.map