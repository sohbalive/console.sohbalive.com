(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ae8f"],{cUZq:function(t,e,n){"use strict";n.d(e,"k",function(){return i}),n.d(e,"f",function(){return a}),n.d(e,"h",function(){return u}),n.d(e,"q",function(){return o}),n.d(e,"j",function(){return l}),n.d(e,"m",function(){return s}),n.d(e,"o",function(){return d}),n.d(e,"l",function(){return c}),n.d(e,"p",function(){return f}),n.d(e,"g",function(){return m}),n.d(e,"r",function(){return p}),n.d(e,"s",function(){return g}),n.d(e,"n",function(){return h}),n.d(e,"e",function(){return _}),n.d(e,"i",function(){return b}),n.d(e,"a",function(){return v}),n.d(e,"b",function(){return y}),n.d(e,"c",function(){return w}),n.d(e,"d",function(){return $});var r=n("t3Un");function i(t){return Object(r.a)({url:"/admin/user/listPage",method:"post",data:t})}function a(t){return Object(r.a)({url:"/admin/user/changeStatus",method:"post",data:t})}function u(t){return Object(r.a)({url:"/admin/user/createUser",method:"post",data:t})}function o(t){return Object(r.a)({url:"/admin/user/updateUser",method:"post",data:t})}function l(t){return Object(r.a)({url:"/admin/user/editUserInit",method:"post",data:t})}function s(t){return Object(r.a)({url:"/0api/system/user/updateAgentId",method:"post",data:t})}function d(t){return Object(r.a)({url:"/admin/user/updateInviteId",method:"post",data:t})}function c(t){return Object(r.a)({url:"/admin/user/updateAccount",method:"post",data:t})}function f(t){return Object(r.a)({url:"/admin/user/updateTicket",method:"post",data:t})}function m(t){return Object(r.a)({url:"/admin/user/contributionList",method:"post",data:t})}function p(t){return Object(r.a)({url:"/admin/user/userConsumptionLog",method:"post",data:t})}function g(t){return Object(r.a)({url:"/admin/user/userProfitLog",method:"post",data:t})}function h(t){return Object(r.a)({url:"/admin/user/updateDisable",method:"post",data:t})}function _(t){return Object(r.a)({url:"/admin/user/DisableLoginLog",method:"post",data:t})}function b(t){return Object(r.a)({url:"/admin/user/disableSave",method:"post",data:t})}function v(t){return Object(r.a)({url:"/admin/user/AnchorDaily",method:"post",data:t})}function y(t){return Object(r.a)({url:"/admin/user/AnchorDailyExport",method:"post",data:t})}function w(t){return Object(r.a)({url:"/admin/user/AnchorDailyMonth",method:"post",data:t})}function $(t){return Object(r.a)({url:"/admin/user/AnchorDailyMonthExport",method:"post",data:t})}},uJMD:function(t,e,n){"use strict";n.d(e,"h",function(){return i}),n.d(e,"i",function(){return a}),n.d(e,"c",function(){return u}),n.d(e,"f",function(){return o}),n.d(e,"d",function(){return l}),n.d(e,"e",function(){return s}),n.d(e,"b",function(){return d}),n.d(e,"j",function(){return c}),n.d(e,"a",function(){return f}),n.d(e,"g",function(){return m});var r=!1;function i(t){var e=Math.floor(t/3600),n=Math.floor((t-3600*e)/60),r=t-3600*e-60*n,i="";return i+=e>=10?e+":":e>0?"0"+e+":":"00:",i+=n>=10?n+":":n>0?"0"+n+":":"00:",i+=r>=10?r:r>0?"0"+r:"00"}function a(t){var e=Math.round((new Date).getTime()/1e3)-t,n=Math.floor(e/3600),r=Math.floor((e-3600*n)/60),i=e-3600*n-60*r,a="";return n>0&&(a+=n+":"),r>0&&(a+=r+":"),i>0&&(a+=i+""),a}function u(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1;return n>=1&&n<=9&&(n="0"+n),e+""+n}function o(t,e){for(var n=t.split(","),r=e.split(","),i=n.length,a=[],u=0;u<i;u++)a[u]={},a[u].value=n[u],a[u].title=r[u];return a}function l(t){return 0===t||"0"===t||null===t||"null"===t||"NULL"===t||""===t||!1===t||"false"===t||void 0===t}function s(t){r&&console.log(t)}function d(t){var e=(Math.round(100*t)/100).toString(),n=e.indexOf(".");for(n<0&&(n=e.length,e+=".");e.length<=n+2;)e+="0";return e}function c(t,e){var n=(t||0).toString();n=e?function(t){var e=(Math.round(t)/100).toString(),n=e.indexOf(".");for(n<0&&(n=e.length,e+=".");e.length<=n+2;)e+="0";return e}(n):d(n);for(var r="",i=0;n.length>3;)r=0!==i?","+n.slice(-3)+r:n.slice(-3)+r,n=n.slice(0,n.length-3),i++;return n&&(r=n+r),r}function f(t,e){!1===e&&(e="Y-m-d H:i:s");var n=t?new Date(1e3*t):new Date,r=function(t,e){return(t+="").length<e?new Array(++e-t.length).join("0")+t:t},i=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a={1:"st",2:"nd",3:"rd",21:"st",22:"nd",23:"rd",31:"st"},u=["","January","February","March","April","May","June","July","August","September","October","November","December"],o={d:function(){return r(o.j(),2)},D:function(){return o.l().substr(0,3)},j:function(){return n.getDate()},l:function(){return i[o.w()]},N:function(){return o.w()+1},S:function(){return a[o.j()]?a[o.j()]:"th"},w:function(){return n.getDay()},z:function(){return(n-new Date(n.getFullYear()+"/1/1"))/864e5>>0},W:function(){var t=o.z(),e=364+o.L()-t,r=(new Date(n.getFullYear()+"/1/1").getDay()||7)-1,i=r;return e<=2&&(n.getDay()||7)-1<=2-e?1:t<=2&&r>=4&&t>=6-r?(i=new Date(n.getFullYear()-1+"/12/31"),f("W",Math.round(i.getTime()/1e3))):1+(r<=3?(t+r)/7:(t-(7-r))/7)>>0},F:function(){return u[o.n()]},m:function(){return r(o.n(),2)},M:function(){return o.F().substr(0,3)},n:function(){return n.getMonth()+1},t:function(){var t;return 2===(t=n.getMonth()+1)?28+o.L():1&t&&t<8||!(1&t)&&t>7?31:30},L:function(){var t=o.Y();return 3&t||!(t%100)&&t%400?0:1},Y:function(){return n.getFullYear()},y:function(){return(n.getFullYear()+"").slice(2)},a:function(){return n.getHours()>11?"pm":"am"},A:function(){return o.a().toUpperCase()},B:function(){var t=60*(n.getTimezoneOffset()+60),e=3600*n.getHours()+60*n.getMinutes()+n.getSeconds()+t,r=Math.floor(e/86.4);return r>1e3&&(r-=1e3),r<0&&(r+=1e3),1===String(r).length&&(r="00"+r),2===String(r).length&&(r="0"+r),r},g:function(){return n.getHours()%12||12},G:function(){return n.getHours()},h:function(){return r(o.g(),2)},H:function(){return r(n.getHours(),2)},i:function(){return r(n.getMinutes(),2)},s:function(){return r(n.getSeconds(),2)},O:function(){var t=r(Math.abs(n.getTimezoneOffset()/60*100),4);return t=n.getTimezoneOffset()>0?"-"+t:"+"+t},P:function(){var t=o.O();return t.substr(0,3)+":"+t.substr(3,2)},c:function(){return o.Y()+"-"+o.m()+"-"+o.d()+"T"+o.h()+":"+o.i()+":"+o.s()+o.P()},U:function(){return Math.round(n.getTime()/1e3)}};return e.replace(/[\\]?([a-zA-Z])/g,function(t,e){return t!==e?e:o[e]?o[e]():e})}function m(t){t=t||32;for(var e="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",n=e.length,r="",i=0;i<t;i++)r+=e.charAt(Math.floor(Math.random()*n));return r}},zQ5A:function(t,e,n){"use strict";n.r(e);var r=n("cUZq"),i=n("uJMD"),a={filters:{date:function(t){return 0===parseInt(t)||1===parseInt(t)||null===t?null:Object(i.a)(t,!1)}},data:function(){return{total:0,listQuery:{userId:void 0,guildId:void 0,page:1,limit:10,createTimeStart:void 0,createTimeEnd:void 0},list:[],listLoading:!0,earnings:0,duration:0,day_effective:0,autoWidth:!0,bookType:"xlsx"}},created:function(){this.getList()},methods:{filterList:function(){this.listQuery.page=1,this.getList()},getList:function(){var t=this;this.listLoading=!0,Object(r.a)(this.listQuery).then(function(e){t.list=e.data.records,t.total=e.data.total,t.earnings=e.data.earnings,t.duration=e.data.duration,t.day_effective=e.data.day_effective,t.listLoading=!1})},clearFilter:function(){this.listQuery={userId:void 0,guildId:void 0,page:1,createTimeStart:void 0,createTimeEnd:void 0,limit:this.listQuery.limit},this.getList()},handleDownload:function(){var t=this;this.$confirm(this.$t("label.determine_whether_operate"),this.$t("confirm.tips"),{confirmButtonText:this.$t("table.confirm"),cancelButtonText:this.$t("table.cancel"),type:"warning"}).then(function(){t.listLoading=!0,Object(r.b)(t.listQuery).then(function(e){console.log(e),200==e.code?Promise.all([n.e("chunk-ef4a"),n.e("chunk-126f")]).then(n.bind(null,"S/jZ")).then(function(n){var r=[t.$t("table.date"),t.$t("table.nick_name"),t.$t("table.userid"),t.$t("guild_title"),t.$t("guild_title")+"UID",t.$t("Live_broadcast_duration"),t.$t("label.total_revenue"),t.$t("table.effective")],i=e.data,a=t.formatJson(["date","nick_name","uid","family_name","family_uid","duration","earnings","day_effective"],i);n.export_json_to_excel({header:r,data:a,filename:t.$t("anchor_daily_report"),autoWidth:t.autoWidth,bookType:t.bookType}),t.listLoading=!1}):t.listLoading=!1})})},formatJson:function(t,e){var n=this;return e.map(function(e){return t.map(function(t){return"create_time"===t?n.getLenTime(e[t]):"agency_id"===t?e.name+"("+e[t]+")":"alevel"===t?2===e.alevel?e.fname+"("+e.afirst_superior_id+")":3===e.alevel?e.fname+"("+e.afirst_superior_id+") -- "+e.tname+"("+e.atwo_superior_id+")":"":e[t]})})},getLenTime:function(t){return Object(i.d)(t)?"":Object(i.a)(t,!1)}}},u=n("KHd+"),o=Object(u.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("cus-wraper",[n("div",{staticClass:"filterBox"},[n("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:t.$t("table.please_userid"),clearable:""},on:{input:function(e){t.listQuery.userId=t.listQuery.userId.replace(/[^\d]/g,"")}},model:{value:t.listQuery.userId,callback:function(e){t.$set(t.listQuery,"userId",e)},expression:"listQuery.userId"}},[n("template",{slot:"prepend"},[t._v(t._s(t.$t("table.userid")))])],2),t._v(" "),n("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:t.$t("guild_title"),clearable:""},on:{input:function(e){t.listQuery.guildId=t.listQuery.guildId.replace(/[^\d]/g,"")}},model:{value:t.listQuery.guildId,callback:function(e){t.$set(t.listQuery,"guildId",e)},expression:"listQuery.guildId"}},[n("template",{slot:"prepend"},[t._v(t._s(t.$t("guild_title"))+" UID")])],2),t._v("\n      "+t._s(t.$t("date"))+"：\n      "),n("el-date-picker",{staticStyle:{"line-height":"50px",width:"200px"},attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:t.listQuery.createTimeStart,callback:function(e){t.$set(t.listQuery,"createTimeStart",e)},expression:"listQuery.createTimeStart"}}),t._v("\n      -\n      "),n("el-date-picker",{staticStyle:{"line-height":"50px",width:"200px"},attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:t.listQuery.createTimeEnd,callback:function(e){t.$set(t.listQuery,"createTimeEnd",e)},expression:"listQuery.createTimeEnd"}}),t._v(" "),n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.filterList}},[t._v(t._s(t.$t("table.query")))]),t._v(" "),n("el-button",{attrs:{type:"danger"},on:{click:t.clearFilter}},[t._v(t._s(t.$t("table.empty_condition")))]),t._v(" "),n("el-button",{attrs:{type:"info"},on:{click:t.handleDownload}},[t._v(" "+t._s(t.$t("export"))+" ")]),t._v(" "),n("div",{staticClass:"filterBox"},[t._v(t._s(t.$t("label.total_revenue"))+": "+t._s(t.earnings)+";   "+t._s(t.$t("Live_broadcast_duration"))+": "+t._s(t.duration)+";   "+t._s(t.$t("table.effective"))+" : "+t._s(t.day_effective)+";")])],1),t._v(" "),n("div",{staticClass:"table-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,size:"mini",fit:"","element-loading-text":"Loading",border:"","highlight-current-row":"",align:"center"}},[n("el-table-column",{attrs:{label:t.$t("table.date"),prop:"logTime",align:"center",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.row.date_y)+"-"+t._s(e.row.date_m)+"-"+t._s(e.row.date_d)+"\n          ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("label.id"),prop:"id",align:"center",width:"100",fixed:""}}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("table.nick_name"),prop:"nickName",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.row.nick_name)+"("+t._s(e.row.uid)+")\n          ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("guild_title"),prop:"family_name",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return e.row.family_uid?[t._v("\n            "+t._s(e.row.family_name)+"("+t._s(e.row.family_uid)+")\n          ")]:void 0}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("Live_broadcast_duration"),prop:"duration",align:"center",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("label.total_revenue"),prop:"earnings",align:"center",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("table.effective"),prop:"day_effective",align:"center",width:"150"}})],1),t._v(" "),n("cus-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>t.listQuery.limit,expression:"total > listQuery.limit"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){t.$set(t.listQuery,"page",e)},"update:limit":function(e){t.$set(t.listQuery,"limit",e)},pagination:t.getList}})],1)])],1)},[],!1,null,null,null);o.options.__file="AnchorDaily.vue";e.default=o.exports}}]);