(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2206"],{"2Awj":function(t,e,n){"use strict";n.d(e,"c",function(){return i}),n.d(e,"d",function(){return a}),n.d(e,"b",function(){return u}),n.d(e,"a",function(){return l});var r=n("t3Un");function i(){return Object(r.a)({url:"/admin/otherGame/listPage",method:"post"})}function a(t){return Object(r.a)({url:"/admin/otherGame/saveOrUpdate",method:"post",data:t})}function u(t){return Object(r.a)({url:"/admin/otherGame/game_log",method:"post",data:t})}function l(t){return Object(r.a)({url:"/admin/otherGame/deleteGame",method:"post",data:t})}},JUBj:function(t,e,n){"use strict";n.r(e);var r=n("2Awj"),i=n("uJMD"),a={filters:{date:function(t){return 0===parseInt(t)||1===parseInt(t)||null===t?null:Object(i.a)(t,!1)}},data:function(){return{list:[],listLoading:!0,total:0,listQuery:{page:1,limit:10,uid:void 0,type:void 0,game_id:void 0,startTime:void 0,endTime:void 0}}},created:function(){this.getList()},methods:{filterList:function(){this.listQuery.page=1,this.getList()},clearFilter:function(){this.listQuery={uid:void 0,type:void 0,game_id:void 0,startTime:void 0,endTime:void 0,page:1,limit:this.listQuery.limit},this.getList()},getList:function(){var t=this;if(this.listQuery.startTime>this.listQuery.endTime)return this.$message.error(this.$t("error.endtime_greater_starttime")),!1;this.listLoading=!0,Object(r.b)(this.listQuery).then(function(e){t.list=e.data.records,t.total=e.data.total,t.listLoading=!1})}}},u=n("KHd+"),l=Object(u.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("cus-wraper",[n("cus-filter-wraper",[n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:t.$t("table.userid"),clearable:""},model:{value:t.listQuery.uid,callback:function(e){t.$set(t.listQuery,"uid",e)},expression:"listQuery.uid"}}),t._v(" "),n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:t.$t("label.game_id"),clearable:""},model:{value:t.listQuery.game_id,callback:function(e){t.$set(t.listQuery,"game_id",e)},expression:"listQuery.game_id"}}),t._v(" "),n("el-select",{staticClass:"filter-item",staticStyle:{width:"280px"},attrs:{placeholder:t.$t("table.please_select")},model:{value:t.listQuery.type,callback:function(e){t.$set(t.listQuery,"type",e)},expression:"listQuery.type"}},[n("el-option",{attrs:{label:t.$t("table.all"),value:"0"}}),t._v(" "),n("el-option",{attrs:{label:t.$t("increase"),value:"1"}}),t._v(" "),n("el-option",{attrs:{label:t.$t("reduce"),value:"2"}})],1),t._v(" "),n("el-date-picker",{staticStyle:{"line-height":"50px"},attrs:{type:"datetime",placeholder:t.$t("label.starttime"),"picker-options":t.pickerOptions,"value-format":"yyyy-MM-dd HH:mm:ss"},on:{change:t.filterList},model:{value:t.listQuery.startTime,callback:function(e){t.$set(t.listQuery,"startTime",e)},expression:"listQuery.startTime"}}),t._v("\n\t\t\t-\n\t\t\t"),n("el-date-picker",{staticStyle:{"line-height":"50px"},attrs:{type:"datetime",placeholder:t.$t("label.endtime"),"picker-options":t.pickerOptions,"value-format":"yyyy-MM-dd HH:mm:ss"},on:{change:t.filterList},model:{value:t.listQuery.endTime,callback:function(e){t.$set(t.listQuery,"endTime",e)},expression:"listQuery.endTime"}}),t._v(" "),n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.filterList}},[t._v(t._s(t.$t("table.query")))]),t._v(" "),n("el-button",{attrs:{type:"danger"},on:{click:t.clearFilter}},[t._v(t._s(t.$t("table.empty_condition")))])],1),t._v(" "),n("div",{staticClass:"table-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,size:"mini","element-loading-text":"Loading",fit:"",border:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:t.$t("label.id"),prop:"id",align:"center",fixed:""}}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("table.nick_name"),prop:"uid",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(e.row.nick_name)+" ("+t._s(e.row.uid)+")\n\t\t\t\t\t")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("label.amount_money"),prop:"coin",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("label.game_id"),prop:"game_id",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(e.row.name)+" ("+t._s(e.row.game_id)+")\n\t\t\t\t\t")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("lable.add_time"),prop:"logTime",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(t._f("date")(e.row.create_time,"Y-m-d H:i:s"))+"\n\t\t\t\t\t")]}}])})],1),t._v(" "),n("cus-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){t.$set(t.listQuery,"page",e)},"update:limit":function(e){t.$set(t.listQuery,"limit",e)},pagination:t.getList}})],1)],1)],1)},[],!1,null,null,null);l.options.__file="other_game_log.vue";e.default=l.exports},uJMD:function(t,e,n){"use strict";n.d(e,"h",function(){return i}),n.d(e,"i",function(){return a}),n.d(e,"c",function(){return u}),n.d(e,"f",function(){return l}),n.d(e,"d",function(){return o}),n.d(e,"e",function(){return s}),n.d(e,"b",function(){return c}),n.d(e,"j",function(){return d}),n.d(e,"a",function(){return f}),n.d(e,"g",function(){return g});var r=!1;function i(t){var e=Math.floor(t/3600),n=Math.floor((t-3600*e)/60),r=t-3600*e-60*n,i="";return i+=e>=10?e+":":e>0?"0"+e+":":"00:",i+=n>=10?n+":":n>0?"0"+n+":":"00:",i+=r>=10?r:r>0?"0"+r:"00"}function a(t){var e=Math.round((new Date).getTime()/1e3)-t,n=Math.floor(e/3600),r=Math.floor((e-3600*n)/60),i=e-3600*n-60*r,a="";return n>0&&(a+=n+":"),r>0&&(a+=r+":"),i>0&&(a+=i+""),a}function u(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1;return n>=1&&n<=9&&(n="0"+n),e+""+n}function l(t,e){for(var n=t.split(","),r=e.split(","),i=n.length,a=[],u=0;u<i;u++)a[u]={},a[u].value=n[u],a[u].title=r[u];return a}function o(t){return 0===t||"0"===t||null===t||"null"===t||"NULL"===t||""===t||!1===t||"false"===t||void 0===t}function s(t){r&&console.log(t)}function c(t){var e=(Math.round(100*t)/100).toString(),n=e.indexOf(".");for(n<0&&(n=e.length,e+=".");e.length<=n+2;)e+="0";return e}function d(t,e){var n=(t||0).toString();n=e?function(t){var e=(Math.round(t)/100).toString(),n=e.indexOf(".");for(n<0&&(n=e.length,e+=".");e.length<=n+2;)e+="0";return e}(n):c(n);for(var r="",i=0;n.length>3;)r=0!==i?","+n.slice(-3)+r:n.slice(-3)+r,n=n.slice(0,n.length-3),i++;return n&&(r=n+r),r}function f(t,e){!1===e&&(e="Y-m-d H:i:s");var n=t?new Date(1e3*t):new Date,r=function(t,e){return(t+="").length<e?new Array(++e-t.length).join("0")+t:t},i=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a={1:"st",2:"nd",3:"rd",21:"st",22:"nd",23:"rd",31:"st"},u=["","January","February","March","April","May","June","July","August","September","October","November","December"],l={d:function(){return r(l.j(),2)},D:function(){return l.l().substr(0,3)},j:function(){return n.getDate()},l:function(){return i[l.w()]},N:function(){return l.w()+1},S:function(){return a[l.j()]?a[l.j()]:"th"},w:function(){return n.getDay()},z:function(){return(n-new Date(n.getFullYear()+"/1/1"))/864e5>>0},W:function(){var t=l.z(),e=364+l.L()-t,r=(new Date(n.getFullYear()+"/1/1").getDay()||7)-1,i=r;return e<=2&&(n.getDay()||7)-1<=2-e?1:t<=2&&r>=4&&t>=6-r?(i=new Date(n.getFullYear()-1+"/12/31"),f("W",Math.round(i.getTime()/1e3))):1+(r<=3?(t+r)/7:(t-(7-r))/7)>>0},F:function(){return u[l.n()]},m:function(){return r(l.n(),2)},M:function(){return l.F().substr(0,3)},n:function(){return n.getMonth()+1},t:function(){var t;return 2===(t=n.getMonth()+1)?28+l.L():1&t&&t<8||!(1&t)&&t>7?31:30},L:function(){var t=l.Y();return 3&t||!(t%100)&&t%400?0:1},Y:function(){return n.getFullYear()},y:function(){return(n.getFullYear()+"").slice(2)},a:function(){return n.getHours()>11?"pm":"am"},A:function(){return l.a().toUpperCase()},B:function(){var t=60*(n.getTimezoneOffset()+60),e=3600*n.getHours()+60*n.getMinutes()+n.getSeconds()+t,r=Math.floor(e/86.4);return r>1e3&&(r-=1e3),r<0&&(r+=1e3),1===String(r).length&&(r="00"+r),2===String(r).length&&(r="0"+r),r},g:function(){return n.getHours()%12||12},G:function(){return n.getHours()},h:function(){return r(l.g(),2)},H:function(){return r(n.getHours(),2)},i:function(){return r(n.getMinutes(),2)},s:function(){return r(n.getSeconds(),2)},O:function(){var t=r(Math.abs(n.getTimezoneOffset()/60*100),4);return t=n.getTimezoneOffset()>0?"-"+t:"+"+t},P:function(){var t=l.O();return t.substr(0,3)+":"+t.substr(3,2)},c:function(){return l.Y()+"-"+l.m()+"-"+l.d()+"T"+l.h()+":"+l.i()+":"+l.s()+l.P()},U:function(){return Math.round(n.getTime()/1e3)}};return e.replace(/[\\]?([a-zA-Z])/g,function(t,e){return t!==e?e:l[e]?l[e]():e})}function g(t){t=t||32;for(var e="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",n=e.length,r="",i=0;i<t;i++)r+=e.charAt(Math.floor(Math.random()*n));return r}}}]);