(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6ba1"],{"08H9":function(t,e,n){"use strict";n.d(e,"l",function(){return o}),n.d(e,"f",function(){return r}),n.d(e,"j",function(){return a}),n.d(e,"o",function(){return d}),n.d(e,"m",function(){return s}),n.d(e,"n",function(){return u}),n.d(e,"h",function(){return c}),n.d(e,"g",function(){return m}),n.d(e,"i",function(){return l}),n.d(e,"k",function(){return h}),n.d(e,"r",function(){return p}),n.d(e,"p",function(){return f}),n.d(e,"q",function(){return v}),n.d(e,"c",function(){return b}),n.d(e,"a",function(){return g}),n.d(e,"d",function(){return y}),n.d(e,"b",function(){return k}),n.d(e,"e",function(){return j});var i=n("t3Un");function o(t){return Object(i.a)({url:"/admin/video/onlineListPage",method:"post",data:t})}function r(t){return Object(i.a)({url:"/admin/video/changeStatus",method:"post",data:t})}function a(t){return Object(i.a)({url:"/admin/video/getPlay",method:"post",data:t})}function d(t){return Object(i.a)({url:"/admin/video/updateVideoSet",method:"post",data:t})}function s(t){return Object(i.a)({url:"/admin/video/pushAnchor",method:"post",data:t})}function u(t){return Object(i.a)({url:"/admin/video/updateStick",method:"post",data:t})}function c(t){return Object(i.a)({url:"/admin/video/demandStatus",method:"post",data:t})}function m(t){return Object(i.a)({url:"/admin/video/closeLive",method:"post",data:t})}function l(t){return Object(i.a)({url:"/admin/video/getEquipmentInfo",method:"post",data:t})}function h(t){return Object(i.a)({url:"/admin/video/videoWheat",method:"post",data:t})}function p(){return Object(i.a)({url:"/admin/video/videoWheatSum",method:"post"})}function f(t){return Object(i.a)({url:"/admin/video/updateVoice",method:"post",data:t})}function v(t){return Object(i.a)({url:"/admin/video/userAdminList",method:"post",data:t})}function b(t){return Object(i.a)({url:"/admin/video/DelUserAdmin",method:"post",data:t})}function g(t){return Object(i.a)({url:"/admin/video/AddUserAdmin",method:"post",data:t})}function y(t){return Object(i.a)({url:"/admin/video/DeleteWheat",method:"post",data:t})}function k(t){return Object(i.a)({url:"/admin/video/AudienceList",method:"post",data:t})}function j(t){return Object(i.a)({url:"/admin/video/UserExitRoom",method:"post",data:t})}},lRWN:function(t,e,n){"use strict";n.r(e);var i=n("08H9"),o=n("6n/F"),r=n.n(o),a={data:function(){return{userId:void 0,videoId:void 0,nickName:void 0,colors:["#7cb5ec","#434348","#90ed7d","#f7a35c","#8085e9","#f15c80","#e4d354","#8085e8","#8d4653","#91e8e1"],option1:{},option2:{}}},watch:{option1:function(){r.a.chart("container1",this.option1)},option2:function(){r.a.chart("container2",this.option2)}},created:function(){this.userId=this.$route.query.userId,this.videoId=this.$route.query.videoId,this.nickName=this.$route.query.nickName,this.getEquipmentInfo()},methods:{getEquipmentInfo:function(){var t=this,e={id:this.videoId};Object(i.i)(e).then(function(e){if(200===e.code){var n=e.data;t.setHighChartsData(n)}})},getTransformation:function(t){t=t.split(",");for(var e=[],n=0;n<t.length;n++)e.push(parseInt(t[n]));return e},setHighChartsData:function(t){console.log("ddddddddddd"),console.log(t),this.option1={chart:{},title:{text:this.$t("用户设备")+":"+t.device},xAxis:{categories:t.monitorTime.split(",")},yAxis:{title:{text:this.$t("Equipment_information")},allowDecimals:!1,min:0},tooltip:{formatter:function(){return this.x+"<br/>"+this.series.name+": "+this.y}},exporting:{enabled:!1},credits:{enabled:!1},series:[{type:"spline",name:this.$t("Number_of_viewers"),data:this.getTransformation(t.watchNumber),color:"#0040c0",marker:{lineWidth:2,lineColor:"#0040c0",fillColor:"#0040c0"}},{type:"spline",name:this.$t("label.cuckoo_ticket"),data:this.getTransformation(t.voteNumber),color:"#66FF00",marker:{lineWidth:2,lineColor:"#66FF00",fillColor:"#66FF00"}}]},this.option2={chart:{},title:{text:""},xAxis:{categories:t.monitorTime.split(",")},yAxis:{title:{text:this.$t("Equipment_information")},allowDecimals:!1,min:0},tooltip:{formatter:function(){return this.x+"<br/>"+this.series.name+": "+this.y}},exporting:{enabled:!1},credits:{enabled:!1},series:[{type:"spline",name:"APPCPU占用率(%)",data:this.getTransformation(t.appCPURate),marker:{lineWidth:2}},{type:"spline",name:"系统CPU占用率(%)",data:this.getTransformation(t.sysCPURate),marker:{lineWidth:2}},{type:"spline",name:"上行速率(KBps)",data:this.getTransformation(t.sendKBps),marker:{lineWidth:2}},{type:"spline",name:"下行速率(KBps)",data:this.getTransformation(t.recvKBps),marker:{lineWidth:2}},{type:"spline",name:"上行丢包率(%)",data:this.getTransformation(t.sendLossRate),marker:{lineWidth:2}},{type:"spline",name:"视频帧率fps(fps)",data:this.getTransformation(t.fps),marker:{lineWidth:2}}]}}}},d=n("KHd+"),s=Object(d.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",{staticClass:"app-container"},[n("cus-wraper",[n("cus-filter-wraper",[t._v("\n                    "+t._s(t.$t("table.nick_name")+t.nickName+"("+t.userId+")"+t.$t("Equipment_information"))+"\n                    "),n("el-link",{staticStyle:{"font-size":"17px"},attrs:{type:"primary"},on:{click:t.getEquipmentInfo}},[t._v(t._s(t.$t("tagsView.refresh")))])],1)],1)],1),t._v(" "),n("div",{staticStyle:{width:"100%",height:"400px",margin:"0 auto"},attrs:{id:"container1"}}),t._v(" "),n("div",{staticStyle:{width:"100%",height:"50px",margin:"0 auto"}}),t._v(" "),n("div",{staticStyle:{width:"100%",height:"400px",margin:"0 auto"},attrs:{id:"container2"}})])},[],!1,null,null,null);s.options.__file="equipment.vue";e.default=s.exports}}]);