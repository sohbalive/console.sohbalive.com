(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0a9f"],{QbIC:function(t,e,n){"use strict";n.r(e);var r=n("VSgx"),a=n("uJMD"),i=n("wd/R"),o=n.n(i),u={filters:{date:function(t){return 0===parseInt(t)||1===parseInt(t)||null===t?null:Object(a.a)(t,!1)}},data:function(){return{total:0,listQuery:{uid:void 0,game_type:void 0,game_order_id:void 0,createTimeStart:void 0,createTimeEnd:void 0,page:1,limit:10},list:[],game_type:[],listLoading:!0,consumption_coin:void 0,total_income:void 0}},created:function(){this.listQuery.game_order_id=this.$route.query.game_order_id?this.$route.query.game_order_id:void 0,this.getList()},methods:{search_date_day:function(t){"day"===t?(this.listQuery.createTimeStart=o()().startOf("day").format("YYYY-MM-DD HH:mm:ss"),this.listQuery.createTimeEnd=o()().endOf("day").format("YYYY-MM-DD HH:mm:ss")):"yesterday"===t?(this.listQuery.createTimeStart=o()().subtract(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),this.listQuery.createTimeEnd=o()().subtract(1,"day").endOf("day").format("YYYY-MM-DD HH:mm:ss")):"week"===t?(this.listQuery.createTimeStart=o()().startOf("week").format("YYYY-MM-DD HH:mm:ss"),this.listQuery.createTimeEnd=o()().endOf("week").format("YYYY-MM-DD HH:mm:ss")):"last week"===t?(this.listQuery.createTimeStart=o()().subtract(1,"week").startOf("week").format("YYYY-MM-DD HH:mm:ss"),this.listQuery.createTimeEnd=o()().subtract(1,"week").endOf("week").format("YYYY-MM-DD HH:mm:ss")):"month"===t?(this.listQuery.createTimeStart=o()().startOf("month").format("YYYY-MM-DD HH:mm:ss"),this.listQuery.createTimeEnd=o()().endOf("month").format("YYYY-MM-DD HH:mm:ss")):"last month"===t&&(this.listQuery.createTimeStart=o()().subtract(1,"month").startOf("month").format("YYYY-MM-DD HH:mm:ss"),this.listQuery.createTimeEnd=o()().subtract(1,"month").endOf("month").format("YYYY-MM-DD HH:mm:ss")),this.listQuery.page=1,this.getList()},filterList:function(){this.listQuery.page=1,this.getList()},getList:function(){var t=this;if(this.listQuery.createTimeStart>this.listQuery.createTimeEnd)return this.$message.error(this.$t("error.endtime_greater_starttime")),!1;this.listLoading=!0,Object(r.e)(this.listQuery).then(function(e){t.list=e.data.records,t.total=e.data.total,t.consumption_coin=e.data.consumption_coin,t.total_income=e.data.total_income,t.game_type=e.data.game_type,t.listLoading=!1})},clearFilter:function(){this.listQuery={uid:void 0,game_type:void 0,game_order_id:void 0,createTimeStart:void 0,createTimeEnd:void 0,page:1,limit:this.listQuery.limit},this.getList()}}},s=n("KHd+"),l=Object(s.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("cus-wraper",[n("cus-filter-wraper",[n("div",{staticClass:"filterBox"},[t._v("\n\t\t\t\t\t"+t._s(t.$t("table.type"))+"：\n\t\t\t\t\t"),n("el-select",{model:{value:t.listQuery.game_type,callback:function(e){t.$set(t.listQuery,"game_type",e)},expression:"listQuery.game_type"}},[n("el-option",{attrs:{label:t.$t("table.all"),value:void 0}}),t._v(" "),t._l(t.game_type,function(t){return n("el-option",{key:t.title,attrs:{label:t.title,value:t.value}})})],2),t._v(" "),n("el-input",{staticStyle:{width:"220px"},attrs:{clearable:""},model:{value:t.listQuery.uid,callback:function(e){t.$set(t.listQuery,"uid",e)},expression:"listQuery.uid"}},[n("template",{slot:"prepend"},[t._v(t._s(t.$t("table.userid")))])],2),t._v(" "),n("el-input",{staticStyle:{width:"220px"},attrs:{clearable:""},model:{value:t.listQuery.game_order_id,callback:function(e){t.$set(t.listQuery,"game_order_id",e)},expression:"listQuery.game_order_id"}},[n("template",{slot:"prepend"},[t._v(t._s(t.$t("wheel_count_mark")))])],2),t._v(" "),n("label",{staticStyle:{"font-weight":"normal"}},[t._v(t._s(t.$t("table.date"))+"：")]),t._v(" "),n("el-date-picker",{staticStyle:{"line-height":"50px"},attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:t.listQuery.createTimeStart,callback:function(e){t.$set(t.listQuery,"createTimeStart",e)},expression:"listQuery.createTimeStart"}}),t._v("\n\t\t\t\t\t-\n\t\t\t\t\t"),n("el-date-picker",{staticStyle:{"line-height":"50px"},attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:t.listQuery.createTimeEnd,callback:function(e){t.$set(t.listQuery,"createTimeEnd",e)},expression:"listQuery.createTimeEnd"}})],1),t._v(" "),n("div",{staticClass:"filterBox"},[n("el-button-group",[n("el-button",{attrs:{type:"warning"},nativeOn:{click:function(e){t.search_date_day("day")}}},[t._v(t._s(t.$t("today")))]),t._v(" "),n("el-button",{attrs:{type:"danger"},nativeOn:{click:function(e){t.search_date_day("yesterday")}}},[t._v(t._s(t.$t("yesterday")))]),t._v(" "),n("el-button",{attrs:{type:"info"},nativeOn:{click:function(e){t.search_date_day("week")}}},[t._v(t._s(t.$t("week")))]),t._v(" "),n("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.search_date_day("last week")}}},[t._v(t._s(t.$t("last_week")))]),t._v(" "),n("el-button",{attrs:{type:"warning"},nativeOn:{click:function(e){t.search_date_day("month")}}},[t._v(t._s(t.$t("month")))]),t._v(" "),n("el-button",{attrs:{type:"success"},nativeOn:{click:function(e){t.search_date_day("last month")}}},[t._v(t._s(t.$t("last_month")))])],1),t._v(" "),n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.filterList}},[t._v(t._s(t.$t("table.query")))]),t._v(" "),n("el-button",{attrs:{type:"danger"},on:{click:t.clearFilter}},[t._v(t._s(t.$t("table.empty_condition")))])],1),t._v(" "),n("div",{staticStyle:{margin:"5px 15px",color:"#ff9696"}},[t._v("\n          "+t._s(t.$t("label.consumption_amount"))+": "+t._s(t.consumption_coin)+" ; \t"+t._s(t.$t("Reward_number"))+": "+t._s(t.total_income)+"\n        ")])]),t._v(" "),n("div",{staticClass:"table-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,size:"mini",fit:"","element-loading-text":"Loading",align:"center"}},[n("el-table-column",{attrs:{label:t.$t("label.id"),prop:"id",align:"center",fixed:""}}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("table.nick_name"),prop:"uid",align:"center",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t"+t._s(e.row.nick_name)+"("+t._s(e.row.uid)+")\n\t\t\t\t\t\t")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("label.game_name"),prop:"title",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("wheel_count_mark"),prop:"game_order_id",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("label.consumption_amount"),prop:"consumption_coin",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("Reward_number"),prop:"total_income",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("game_winner_result"),prop:"game_result_text",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("table.date"),prop:"createTime",align:"center",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t"+t._s(t._f("date")(e.row.create_time,"Y-m-d H:i:s"))+"\n\t\t\t\t\t\t")]}}])})],1),t._v(" "),n("cus-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>t.listQuery.limit,expression:"total > listQuery.limit"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){t.$set(t.listQuery,"page",e)},"update:limit":function(e){t.$set(t.listQuery,"limit",e)},pagination:t.getList}})],1)],1)],1)},[],!1,null,null,null);l.options.__file="user_log.vue";e.default=l.exports},VSgx:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i}),n.d(e,"d",function(){return o}),n.d(e,"e",function(){return u}),n.d(e,"c",function(){return s});var r=n("t3Un");function a(t){return Object(r.a)({url:"/admin/games/tripartitGame",method:"post",data:t})}function i(t){return Object(r.a)({url:"/admin/games/saveOrUpdateTripartitGame",method:"post",data:t})}function o(t){return Object(r.a)({url:"/admin/games/tripartitGameLog",method:"post",data:t})}function u(t){return Object(r.a)({url:"/admin/games/tripartitGameUserLog",method:"post",data:t})}function s(t){return Object(r.a)({url:"/admin/games/tripartitGameDel",method:"post",data:t})}},uJMD:function(t,e,n){"use strict";n.d(e,"h",function(){return a}),n.d(e,"i",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"f",function(){return u}),n.d(e,"d",function(){return s}),n.d(e,"e",function(){return l}),n.d(e,"b",function(){return c}),n.d(e,"j",function(){return d}),n.d(e,"a",function(){return m}),n.d(e,"g",function(){return f});var r=!1;function a(t){var e=Math.floor(t/3600),n=Math.floor((t-3600*e)/60),r=t-3600*e-60*n,a="";return a+=e>=10?e+":":e>0?"0"+e+":":"00:",a+=n>=10?n+":":n>0?"0"+n+":":"00:",a+=r>=10?r:r>0?"0"+r:"00"}function i(t){var e=Math.round((new Date).getTime()/1e3)-t,n=Math.floor(e/3600),r=Math.floor((e-3600*n)/60),a=e-3600*n-60*r,i="";return n>0&&(i+=n+":"),r>0&&(i+=r+":"),a>0&&(i+=a+""),i}function o(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1;return n>=1&&n<=9&&(n="0"+n),e+""+n}function u(t,e){for(var n=t.split(","),r=e.split(","),a=n.length,i=[],o=0;o<a;o++)i[o]={},i[o].value=n[o],i[o].title=r[o];return i}function s(t){return 0===t||"0"===t||null===t||"null"===t||"NULL"===t||""===t||!1===t||"false"===t||void 0===t}function l(t){r&&console.log(t)}function c(t){var e=(Math.round(100*t)/100).toString(),n=e.indexOf(".");for(n<0&&(n=e.length,e+=".");e.length<=n+2;)e+="0";return e}function d(t,e){var n=(t||0).toString();n=e?function(t){var e=(Math.round(t)/100).toString(),n=e.indexOf(".");for(n<0&&(n=e.length,e+=".");e.length<=n+2;)e+="0";return e}(n):c(n);for(var r="",a=0;n.length>3;)r=0!==a?","+n.slice(-3)+r:n.slice(-3)+r,n=n.slice(0,n.length-3),a++;return n&&(r=n+r),r}function m(t,e){!1===e&&(e="Y-m-d H:i:s");var n=t?new Date(1e3*t):new Date,r=function(t,e){return(t+="").length<e?new Array(++e-t.length).join("0")+t:t},a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],i={1:"st",2:"nd",3:"rd",21:"st",22:"nd",23:"rd",31:"st"},o=["","January","February","March","April","May","June","July","August","September","October","November","December"],u={d:function(){return r(u.j(),2)},D:function(){return u.l().substr(0,3)},j:function(){return n.getDate()},l:function(){return a[u.w()]},N:function(){return u.w()+1},S:function(){return i[u.j()]?i[u.j()]:"th"},w:function(){return n.getDay()},z:function(){return(n-new Date(n.getFullYear()+"/1/1"))/864e5>>0},W:function(){var t=u.z(),e=364+u.L()-t,r=(new Date(n.getFullYear()+"/1/1").getDay()||7)-1,a=r;return e<=2&&(n.getDay()||7)-1<=2-e?1:t<=2&&r>=4&&t>=6-r?(a=new Date(n.getFullYear()-1+"/12/31"),m("W",Math.round(a.getTime()/1e3))):1+(r<=3?(t+r)/7:(t-(7-r))/7)>>0},F:function(){return o[u.n()]},m:function(){return r(u.n(),2)},M:function(){return u.F().substr(0,3)},n:function(){return n.getMonth()+1},t:function(){var t;return 2===(t=n.getMonth()+1)?28+u.L():1&t&&t<8||!(1&t)&&t>7?31:30},L:function(){var t=u.Y();return 3&t||!(t%100)&&t%400?0:1},Y:function(){return n.getFullYear()},y:function(){return(n.getFullYear()+"").slice(2)},a:function(){return n.getHours()>11?"pm":"am"},A:function(){return u.a().toUpperCase()},B:function(){var t=60*(n.getTimezoneOffset()+60),e=3600*n.getHours()+60*n.getMinutes()+n.getSeconds()+t,r=Math.floor(e/86.4);return r>1e3&&(r-=1e3),r<0&&(r+=1e3),1===String(r).length&&(r="00"+r),2===String(r).length&&(r="0"+r),r},g:function(){return n.getHours()%12||12},G:function(){return n.getHours()},h:function(){return r(u.g(),2)},H:function(){return r(n.getHours(),2)},i:function(){return r(n.getMinutes(),2)},s:function(){return r(n.getSeconds(),2)},O:function(){var t=r(Math.abs(n.getTimezoneOffset()/60*100),4);return t=n.getTimezoneOffset()>0?"-"+t:"+"+t},P:function(){var t=u.O();return t.substr(0,3)+":"+t.substr(3,2)},c:function(){return u.Y()+"-"+u.m()+"-"+u.d()+"T"+u.h()+":"+u.i()+":"+u.s()+u.P()},U:function(){return Math.round(n.getTime()/1e3)}};return e.replace(/[\\]?([a-zA-Z])/g,function(t,e){return t!==e?e:u[e]?u[e]():e})}function f(t){t=t||32;for(var e="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",n=e.length,r="",a=0;a<t;a++)r+=e.charAt(Math.floor(Math.random()*n));return r}}}]);