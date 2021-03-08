(this["webpackJsonpfinance-diagram"]=this["webpackJsonpfinance-diagram"]||[]).push([[0],{176:function(e,t,a){},177:function(e,t,a){},276:function(e,t,a){},283:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),i=(a(176),a(24)),s=a(39),l=a(52),u=a(43),d=a(28),h=a.n(d);function j(e){return e.reduce((function(e,t){return e+t}),0)}function f(e,t){for(var a,n=(a=e,h()(a).set("s",59).set("m",59).set("h",23)),r=[];n.isBefore(t);)n=h()(n).add(1,"day"),r.push(n);return r}function b(e,t,a){return function(e,t,a){var n,r=f(e,t),c=a.chart.result[0],o=c.timestamp,s=Object(i.a)(c.indicators.quote,1)[0],l=s.high,d=s.low,h=s.open,j=(s.close,s.volume),b=[],p=0,m=Object(u.a)(r);try{for(m.s();!(n=m.n()).done;){for(var v=n.value,O={lows:[],sells:[],highs:[],volume:[],time:v.format("DD MMM")};p<o.length&&v.unix()>o[p];)O.lows.push(d[p]),O.sells.push(h[p]),O.highs.push(l[p]),O.volume.push(j[p]),p++;if(Object.values(O).some((function(e){return Array.isArray(e)&&e.length}))){if(O.volume.every((function(e){return 0==e})))for(var g in O.volume)O.volume[g]=1;b.push(O)}}}catch(x){m.e(x)}finally{m.f()}return b}(e,t,a).map((function(e){var t=e.highs,a=e.lows,n=e.sells,r=e.volume,c=e.time;return Object(s.a)(Object(s.a)({},function(e,t,a,n){var r=e.map((function(e,a){return t[a]*e})),c=j(e),o=j(r)/c;return{low:Math.min.apply(Math,Object(l.a)(a)),high:Math.max.apply(Math,Object(l.a)(n)),avg:o}}(r,n,a,t)),{},{time:c})}))}var p=a(293),m=a(312),v=a(304),O=a(294),g=a(310),x=a(295),y=a(313),w=a(308),S=a(72),k=a(311),M=a(297),D=a(298),A=(a(177),a(9)),N={avg:"Average",high:"High",low:"Low"},T="#fa541c",P="#1890ff",F="#8c8c8c",L=40,C=0,I=Object(s.a)(Object(s.a)({},S.b),{},{minWidth:60,backgroundColor:"rgba(0,0,0,0.9)",color:"white"});function R(e){var t=e.data,a=e.width,r=void 0===a?800:a,c=e.height,o=void 0===c?600:c,i=e.displayAverages,s=function(e){return Object(n.useMemo)((function(){var t=e?["low","avg","high"]:["low","high"];return{keys:t,colorScale:Object(p.a)({domain:t,range:e?[T,"#fadb14",P]:[T,P]}),aggregateDataScale:Object(m.a)({domain:t,padding:.1})}}),[e])}(void 0!==i&&i),u=s.keys,d=s.colorScale,h=s.aggregateDataScale,j=Object(n.useRef)(null),f=Object(m.a)({domain:t.map((function(e){return e.time})),padding:.2}),b=Object(v.a)({domain:[0,Math.max.apply(Math,Object(l.a)(t.map((function(e){return e.high}))))],nice:!0}),S=Object(O.a)(),R=S.tooltipOpen,J=S.tooltipLeft,q=S.tooltipTop,B=S.hideTooltip,E=S.showTooltip,U=S.tooltipData,z=Object(g.a)({scroll:!0}),H=z.containerRef,V=z.TooltipInPortal,W=r,Y=o-L-50;return f.rangeRound([0,W]),b.range([Y,0]),h.rangeRound([0,f.bandwidth()]),Object(A.jsxs)("div",{className:"stock-chart",children:[Object(A.jsxs)("svg",{ref:H,width:r,height:o,fill:"white",children:[Object(A.jsx)("rect",{x:0,y:0,width:r,height:o}),Object(A.jsx)(x.a,{top:L,children:Object(A.jsx)(y.a,{data:t,keys:u,x0:function(e){return e.time},yScale:b,x0Scale:f,x1Scale:h,color:d,height:Y,children:function(e){return e.map((function(e){return Object(A.jsx)(x.a,{left:e.x0,children:e.bars.map((function(t){return Object(A.jsx)("rect",{x:t.x,y:t.y,height:t.height,width:t.width+5,fill:t.color,onMouseLeave:function(){j.current=setTimeout((function(){B()}),300)},onMouseMove:function(a){j.current&&clearTimeout(j.current);var n=Object(k.a)(a),r=t.x+e.x0+t.width/2;E({tooltipData:t,tooltipTop:null===n||void 0===n?void 0:n.y,tooltipLeft:r})}},"".concat(e.index,"-").concat(t.x,"-").concat(t.index,"-").concat(t.key))}))},"".concat(e.index))}))}})}),Object(A.jsx)(M.a,{top:Y+L,scale:f,stroke:F,tickStroke:F,tickLabelProps:function(){return{fill:"black",fontSize:11,textAnchor:"middle"}}}),Object(A.jsx)(D.a,{left:C+30,top:L,scale:b,stroke:F,tickStroke:F,hideZero:!0})]}),Object(A.jsx)("div",{style:{position:"absolute",top:L/2-10,width:"100%",display:"flex",justifyContent:"center",fontSize:"14px"},children:Object(A.jsx)(w.a,{labelFormat:function(e){return N[e]},scale:d,direction:"row",labelMargin:"0 15px 0 0"})}),R&&U&&Object(A.jsxs)(V,{top:q,left:J,style:I,children:[Object(A.jsx)("div",{style:{color:U.color},children:Object(A.jsx)("strong",{children:N[U.key]})}),Object(A.jsxs)("div",{children:[U.value.toFixed(2),"$"]})]})]})}var J=a(66),q=a.n(J),B=a(143),E=a(144),U=a.n(E);var z=a(158);function H(){z.a.success({message:"Success",description:"Stock Market data retreived."})}function V(e,t){var a=Object(s.a)(Object(s.a)({},t),{},{url:e}),n=function(e){var t=localStorage.getItem(JSON.stringify(e));return t?JSON.parse(t):null}(a);return n?Promise.resolve(n):U.a.get(e,{params:t,headers:{"x-rapidapi-key":"ddac0762b2mshf2a1e97a045686ep1ee811jsn9c89f803eddf","x-rapidapi-host":"apidojo-yahoo-finance-v1.p.rapidapi.com"}}).then((function(e){return function(e,t){var a=JSON.stringify(t,void 0,2),n=JSON.stringify(e);localStorage.setItem(n,a)}(a,e.data),e.data})).catch((function(){return z.a.error({message:"Fail",description:"Something went wrong. Probably the API key expired."}),{chart:{result:[{timestamp:[],meta:{currency:"USD",symbol:"AMD"},indicators:{quote:[{high:[],low:[],open:[],close:[],volume:[]}]}}]}}}))}function W(){return(W=Object(B.a)(q.a.mark((function e(t){var a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=V("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart",t),H(),e.abrupt("return",a);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Y=a(305),Z=a(300),$=a(301),G=a(309),K=a(303),Q=a(306),X=a(160),_=a(162),ee=a(299),te=a(307),ae=[{value:"AMD",label:"AMD"}];function ne(e,t){return e.toLowerCase().includes(t.toLowerCase())}function re(e){var t=Object(n.useState)(ae),a=Object(i.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(!1),l=Object(i.a)(o,2),d=l[0],h=l[1],j=Object(ee.a)((function(e){var t;d||function(e,t){return e.find((function(e){var a=e.value,n=e.label;return ne(a,t)||ne(n,t)}))}(r,e)||(h(!0),(t=e,V("https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete",{q:t,region:"US"})).then((function(e){var t=function(e){return e.quotes.map((function(e){var t=e.longname,a=e.shortname,n=e.symbol;return{value:n,label:"".concat(a||t," (").concat(n,")")}}))}(e);c((function(e){return function(e,t){var a,n=new Map,r=Object(u.a)(e);try{for(r.s();!(a=r.n()).done;){var c=a.value;n.set(c.value,c)}}catch(l){r.e(l)}finally{r.f()}var o,i=Object(u.a)(t);try{for(i.s();!(o=i.n()).done;){var s=o.value;n.set(s.value,s)}}catch(l){i.e(l)}finally{i.f()}return Array.from(n.values())}(e,t)})),h(!1)})))}),1e3).callback;return Object(A.jsx)(te.a,Object(s.a)({showSearch:!0,placeholder:"Type a sock symbol or company name",onSearch:j,loading:d,options:r,filterOption:function(e,t){return!!ne(t.label,e)&&t}},e))}var ce=K.a.RangePicker,oe=Q.a.Item,ie=Q.a.useForm;function se(e){var t=ie(),a=Object(i.a)(t,1)[0];return Object(A.jsxs)(Q.a,{className:"config-form",layout:"vertical",onFinish:function(t){e.onSubmit(t),a.resetFields()},initialValues:e.config,form:a,children:[Object(A.jsx)(oe,{className:"input-width",label:"Stock",name:"symbol",children:Object(A.jsx)(re,{})}),Object(A.jsx)(oe,{rules:[{validator:function(e,t){var a=Object(i.a)(t,2),n=a[0],r=a[1];return r.diff(n,"days")<3?Promise.reject("You should set a minimum interval of 3 days."):h()().isBefore(r)?Promise.reject("End date must be today or a day in the past."):Promise.resolve()}}],label:"Sample Interval",name:"range",children:Object(A.jsx)(ce,{showNow:!1,showTime:!1})}),Object(A.jsx)(X.a,{icon:Object(A.jsx)(_.a,{}),type:"primary",htmlType:"submit",loading:e.loading,children:"Display Data"})]})}var le=a(302),ue=(a(275),a(276),Y.a.Text),de=h()("2021-03-07 16:08:00"),he={range:[h()(de).subtract(1,"week"),de],symbol:"AMD"},je=function(e){return!e};var fe=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(he),o=Object(i.a)(c,2),s=o[0],l=o[1],u=Object(n.useReducer)(je,!1),d=Object(i.a)(u,2),h=d[0],j=d[1],f=Object(n.useState)(!0),p=Object(i.a)(f,2),m=p[0],v=p[1],O=Object(n.useRef)(null),g=function(){v(!0),function(e){return W.apply(this,arguments)}({period1:s.range[0].unix(),period2:s.range[1].unix(),symbol:s.symbol,region:"US"}).then((function(e){v(!1),r(b(s.range[0],s.range[1],e))}))};return Object(n.useEffect)((function(){g()}),[s]),Object(A.jsxs)("div",{children:[Object(A.jsx)("div",{className:"header mr-auto ml-auto",children:Object(A.jsx)("h2",{className:"p-0 m-0",children:"Stock Statistics"})}),Object(A.jsx)("div",{className:"vertical-center full-page",children:Object(A.jsxs)(Z.a,{align:"middle",children:[Object(A.jsx)($.a,{span:24,lg:8,xl:4,children:Object(A.jsx)(se,{loading:m,config:s,onSubmit:l})}),Object(A.jsx)($.a,{span:24,lg:16,xl:20,children:Object(A.jsxs)(Z.a,{children:[Object(A.jsx)($.a,{span:24,ref:O,children:Object(A.jsx)(le.a,{children:function(e){var t=e.width;return Object(A.jsx)(R,{width:t,height:.6*window.innerHeight,displayAverages:h,data:a})}})}),Object(A.jsx)($.a,{className:"text-center",span:24,children:Object(A.jsxs)("label",{children:[Object(A.jsx)(ue,{strong:!0,className:"mr-small cursor-pointer",children:"Display Averages"}),Object(A.jsx)(G.a,{value:h,onChange:j})]})})]})})]})})]})},be=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,314)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))};o.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(fe,{})}),document.getElementById("root")),be()}},[[283,1,2]]]);
//# sourceMappingURL=main.4fba868d.chunk.js.map