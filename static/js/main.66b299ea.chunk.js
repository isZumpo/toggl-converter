(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,a){t.exports=a(24)},16:function(t,e,a){},21:function(t,e,a){t.exports=a.p+"static/media/logo.5d5d9eef.svg"},22:function(t,e,a){},24:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(3),o=a.n(i),l=(a(16),a(4)),s=a(5),c=a(8),d=a(6),u=a(9),p=a(1),m=a(7),h=a.n(m),v=(a(21),a(22),function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(c.a)(this,Object(d.a)(e).call(this,t))).handleCsvFile=a.handleCsvFile.bind(Object(p.a)(Object(p.a)(a))),a.timeStampToStupidFormat=a.timeStampToStupidFormat.bind(Object(p.a)(Object(p.a)(a))),a.getFormatedEntries=a.getFormatedEntries.bind(Object(p.a)(Object(p.a)(a))),a.state={entries:[]},a}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h.a,{cssClass:"csv-reader-input",onFileLoaded:this.handleCsvFile,inputId:"ObiWan",inputStyle:{color:"red"}}),r.a.createElement("textarea",{value:this.getFormatedEntries(),style:{width:"50%",height:"400px"}}))}},{key:"getFormatedEntries",value:function(){var t="",e=!0,a=!1,n=void 0;try{for(var r,i=this.state.entries[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){var o=r.value;t+=o.description+"\t"+o.date+"\t"+o.start.toFixed(5).replace(".",",")+"\t"+o.end.toFixed(5).replace(".",",")+"\n"}}catch(l){a=!0,n=l}finally{try{e||null==i.return||i.return()}finally{if(a)throw n}}return t}},{key:"timeStampToStupidFormat",value:function(t){var e=t.split(":");return parseFloat(e[0])+(parseFloat(e[1])+parseFloat(e[2])/60)/60}},{key:"handleCsvFile",value:function(t){t.shift(),t.pop();var e=[],a=!0,n=!1,r=void 0;try{for(var i,o=t[Symbol.iterator]();!(a=(i=o.next()).done);a=!0){var l=i.value;e.push({description:l[5],date:l[7],start:this.timeStampToStupidFormat(l[8]),end:this.timeStampToStupidFormat(l[10])})}}catch(s){n=!0,r=s}finally{try{a||null==o.return||o.return()}finally{if(n)throw r}}this.setState({entries:e})}}]),e}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.66b299ea.chunk.js.map