(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-73f4"],{bUv7:function(t,n,e){"use strict";e.r(n);var r=e("cUZq"),u=e("fSFp"),i=e("uJMD"),a={data:function(){return{total:0,headImage:"",nickName:void 0,userId:void 0,listQuery:{userId:void 0,page:1,limit:10},list:[],listLoading:!0}},created:function(){this.getHeadImageUrl(),this.listQuery.userId=this.$route.query.userId,this.userId=this.$route.query.userId,this.nickName=this.$route.query.nickName,this.getList()},methods:{filterList:function(){this.listQuery.page=1,this.getList()},getHeadImageUrl:function(){var t=this;Object(u.b)({code:"app_logo"}).then(function(n){200===n.code&&(t.headImage=n.data)})},getHeadImage:function(t){return Object(i.d)(t)?this.headImage:t},getList:function(){var t=this;this.listLoading=!0,Object(r.g)(this.listQuery).then(function(n){t.list=n.data.records,t.total=n.data.total,t.listLoading=!1}).catch(function(n){t.listLoading=!1,console.log(n)})}}},o=e("KHd+"),c=Object(o.a)(a,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app-container"},[e("cus-wraper",[e("cus-filter-wraper",[t._v("\n\t\t\t"+t._s(t.$t("table.nick_name")+t.nickName+"("+t.userId+") "+t.$t("Cuckoo_ticket_contribution_list"))+"\n\t\t")]),t._v(" "),e("div",{staticClass:"table-container"},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,size:"mini",fit:"","element-loading-text":"Loading",border:"","highlight-current-row":"",align:"center"}},[e("el-table-column",{attrs:{label:t.$t("table.userid"),prop:"userId",align:"center",width:"100",fixed:""}}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("table.nick_name"),prop:"nickName",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("label.user_avatar"),prop:"headImage",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",[e("img",{staticStyle:{width:"50px",height:"50px"},attrs:{src:t.getHeadImage(n.row.headImage),alt:""}})])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("Number_contributions"),prop:"totalTicket",align:"center",width:"150"}})],1),t._v(" "),e("cus-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>t.listQuery.limit,expression:"total > listQuery.limit"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(n){t.$set(t.listQuery,"page",n)},"update:limit":function(n){t.$set(t.listQuery,"limit",n)},pagination:t.getList}})],1)],1)],1)},[],!1,null,null,null);c.options.__file="contribution.vue";n.default=c.exports},cUZq:function(t,n,e){"use strict";e.d(n,"k",function(){return u}),e.d(n,"f",function(){return i}),e.d(n,"h",function(){return a}),e.d(n,"q",function(){return o}),e.d(n,"j",function(){return c}),e.d(n,"m",function(){return d}),e.d(n,"o",function(){return s}),e.d(n,"l",function(){return l}),e.d(n,"p",function(){return f}),e.d(n,"g",function(){return g}),e.d(n,"r",function(){return m}),e.d(n,"s",function(){return h}),e.d(n,"n",function(){return p}),e.d(n,"e",function(){return b}),e.d(n,"i",function(){return v}),e.d(n,"a",function(){return O}),e.d(n,"b",function(){return j}),e.d(n,"c",function(){return y}),e.d(n,"d",function(){return M});var r=e("t3Un");function u(t){return Object(r.a)({url:"/admin/user/listPage",method:"post",data:t})}function i(t){return Object(r.a)({url:"/admin/user/changeStatus",method:"post",data:t})}function a(t){return Object(r.a)({url:"/admin/user/createUser",method:"post",data:t})}function o(t){return Object(r.a)({url:"/admin/user/updateUser",method:"post",data:t})}function c(t){return Object(r.a)({url:"/admin/user/editUserInit",method:"post",data:t})}function d(t){return Object(r.a)({url:"/0api/system/user/updateAgentId",method:"post",data:t})}function s(t){return Object(r.a)({url:"/admin/user/updateInviteId",method:"post",data:t})}function l(t){return Object(r.a)({url:"/admin/user/updateAccount",method:"post",data:t})}function f(t){return Object(r.a)({url:"/admin/user/updateTicket",method:"post",data:t})}function g(t){return Object(r.a)({url:"/admin/user/contributionList",method:"post",data:t})}function m(t){return Object(r.a)({url:"/admin/user/userConsumptionLog",method:"post",data:t})}function h(t){return Object(r.a)({url:"/admin/user/userProfitLog",method:"post",data:t})}function p(t){return Object(r.a)({url:"/admin/user/updateDisable",method:"post",data:t})}function b(t){return Object(r.a)({url:"/admin/user/DisableLoginLog",method:"post",data:t})}function v(t){return Object(r.a)({url:"/admin/user/disableSave",method:"post",data:t})}function O(t){return Object(r.a)({url:"/admin/user/AnchorDaily",method:"post",data:t})}function j(t){return Object(r.a)({url:"/admin/user/AnchorDailyExport",method:"post",data:t})}function y(t){return Object(r.a)({url:"/admin/user/AnchorDailyMonth",method:"post",data:t})}function M(t){return Object(r.a)({url:"/admin/user/AnchorDailyMonthExport",method:"post",data:t})}},fSFp:function(t,n,e){"use strict";e.d(n,"a",function(){return u}),e.d(n,"e",function(){return i}),e.d(n,"c",function(){return a}),e.d(n,"b",function(){return o}),e.d(n,"d",function(){return c}),e.d(n,"f",function(){return d});var r=e("t3Un");function u(){return Object(r.a)({url:"/admin/mConfig/getMConfig",method:"post"})}function i(t){return Object(r.a)({url:"/admin/mConfig/updateMConfig",method:"post",data:t})}function a(t){return Object(r.a)({url:"/admin/mConfig/insertMConfig",method:"post",data:t})}function o(t){return Object(r.a)({url:"/admin/mConfig/getOneConfig",method:"post",data:t})}function c(t){return Object(r.a)({url:"/admin/mConfig/updateGroupMConfig",method:"post",data:t})}function d(t){return Object(r.a)({url:"/admin/mConfig/updateSortMConfig",method:"post",data:t})}},uJMD:function(t,n,e){"use strict";e.d(n,"h",function(){return u}),e.d(n,"i",function(){return i}),e.d(n,"c",function(){return a}),e.d(n,"f",function(){return o}),e.d(n,"d",function(){return c}),e.d(n,"e",function(){return d}),e.d(n,"b",function(){return s}),e.d(n,"j",function(){return l}),e.d(n,"a",function(){return f}),e.d(n,"g",function(){return g});var r=!1;function u(t){var n=Math.floor(t/3600),e=Math.floor((t-3600*n)/60),r=t-3600*n-60*e,u="";return u+=n>=10?n+":":n>0?"0"+n+":":"00:",u+=e>=10?e+":":e>0?"0"+e+":":"00:",u+=r>=10?r:r>0?"0"+r:"00"}function i(t){var n=Math.round((new Date).getTime()/1e3)-t,e=Math.floor(n/3600),r=Math.floor((n-3600*e)/60),u=n-3600*e-60*r,i="";return e>0&&(i+=e+":"),r>0&&(i+=r+":"),u>0&&(i+=u+""),i}function a(){var t=new Date,n=t.getFullYear(),e=t.getMonth()+1;return e>=1&&e<=9&&(e="0"+e),n+""+e}function o(t,n){for(var e=t.split(","),r=n.split(","),u=e.length,i=[],a=0;a<u;a++)i[a]={},i[a].value=e[a],i[a].title=r[a];return i}function c(t){return 0===t||"0"===t||null===t||"null"===t||"NULL"===t||""===t||!1===t||"false"===t||void 0===t}function d(t){r&&console.log(t)}function s(t){var n=(Math.round(100*t)/100).toString(),e=n.indexOf(".");for(e<0&&(e=n.length,n+=".");n.length<=e+2;)n+="0";return n}function l(t,n){var e=(t||0).toString();e=n?function(t){var n=(Math.round(t)/100).toString(),e=n.indexOf(".");for(e<0&&(e=n.length,n+=".");n.length<=e+2;)n+="0";return n}(e):s(e);for(var r="",u=0;e.length>3;)r=0!==u?","+e.slice(-3)+r:e.slice(-3)+r,e=e.slice(0,e.length-3),u++;return e&&(r=e+r),r}function f(t,n){!1===n&&(n="Y-m-d H:i:s");var e=t?new Date(1e3*t):new Date,r=function(t,n){return(t+="").length<n?new Array(++n-t.length).join("0")+t:t},u=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],i={1:"st",2:"nd",3:"rd",21:"st",22:"nd",23:"rd",31:"st"},a=["","January","February","March","April","May","June","July","August","September","October","November","December"],o={d:function(){return r(o.j(),2)},D:function(){return o.l().substr(0,3)},j:function(){return e.getDate()},l:function(){return u[o.w()]},N:function(){return o.w()+1},S:function(){return i[o.j()]?i[o.j()]:"th"},w:function(){return e.getDay()},z:function(){return(e-new Date(e.getFullYear()+"/1/1"))/864e5>>0},W:function(){var t=o.z(),n=364+o.L()-t,r=(new Date(e.getFullYear()+"/1/1").getDay()||7)-1,u=r;return n<=2&&(e.getDay()||7)-1<=2-n?1:t<=2&&r>=4&&t>=6-r?(u=new Date(e.getFullYear()-1+"/12/31"),f("W",Math.round(u.getTime()/1e3))):1+(r<=3?(t+r)/7:(t-(7-r))/7)>>0},F:function(){return a[o.n()]},m:function(){return r(o.n(),2)},M:function(){return o.F().substr(0,3)},n:function(){return e.getMonth()+1},t:function(){var t;return 2===(t=e.getMonth()+1)?28+o.L():1&t&&t<8||!(1&t)&&t>7?31:30},L:function(){var t=o.Y();return 3&t||!(t%100)&&t%400?0:1},Y:function(){return e.getFullYear()},y:function(){return(e.getFullYear()+"").slice(2)},a:function(){return e.getHours()>11?"pm":"am"},A:function(){return o.a().toUpperCase()},B:function(){var t=60*(e.getTimezoneOffset()+60),n=3600*e.getHours()+60*e.getMinutes()+e.getSeconds()+t,r=Math.floor(n/86.4);return r>1e3&&(r-=1e3),r<0&&(r+=1e3),1===String(r).length&&(r="00"+r),2===String(r).length&&(r="0"+r),r},g:function(){return e.getHours()%12||12},G:function(){return e.getHours()},h:function(){return r(o.g(),2)},H:function(){return r(e.getHours(),2)},i:function(){return r(e.getMinutes(),2)},s:function(){return r(e.getSeconds(),2)},O:function(){var t=r(Math.abs(e.getTimezoneOffset()/60*100),4);return t=e.getTimezoneOffset()>0?"-"+t:"+"+t},P:function(){var t=o.O();return t.substr(0,3)+":"+t.substr(3,2)},c:function(){return o.Y()+"-"+o.m()+"-"+o.d()+"T"+o.h()+":"+o.i()+":"+o.s()+o.P()},U:function(){return Math.round(e.getTime()/1e3)}};return n.replace(/[\\]?([a-zA-Z])/g,function(t,n){return t!==n?n:o[n]?o[n]():n})}function g(t){t=t||32;for(var n="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",e=n.length,r="",u=0;u<t;u++)r+=n.charAt(Math.floor(Math.random()*e));return r}}}]);