(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4535"],{BVrC:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a("t3Un");function r(){return Object(n.a)({url:"/admin/upload/getUpToken",method:"post"})}},ICfL:function(e,t,a){"use strict";a.r(t);var n=a("y56I"),r=a("a0WV"),i=(a("uJMD"),a("XJYT"),{components:{UploadImage:r.a},data:function(){return{dialogVisible:!1,list:[],sexList:[{key:"0",display_name:this.$t("male")},{key:"1",display_name:this.$t("female")}],flagList:[{key:"1",display_name:this.$t("label.open")},{key:"0",display_name:this.$t("tagsView.close")}],listLoading:!0,total:0,listQuery:{page:1,limit:10,username:void 0},input:"",form:{id:void 0,username:void 0,password:void 0,nickName:void 0,sex:void 0,phone:void 0,email:void 0,avatar:void 0,flag:"1",salt:""},dialogStatus:"",titleMap:{update:this.$t("table.edit"),create:this.$t("table.create")},ossType:"ALI_OSS",imageFlag:!1,imageUploadPercent:0,aliossConfig:{accessKeyId:"",accessKeySecret:"",stsToken:"",endpoint:"",region:"",bucket:""},rules:{username:[{required:!0,message:this.$t("login.usernamePlaceholder"),trigger:"blur"}],nickName:[{required:!0,message:this.$t("label.please_enter_user_nickname"),trigger:"blur"}],flag:[{required:!0,message:"请选择状态",trigger:"blur"}]}}},created:function(){this.getList()},methods:{successUploadImage:function(e){this.form.avatar=e},getList:function(){var e=this;this.listLoading=!0,Object(n.e)(this.listQuery).then(function(t){e.list=t.data.records,e.total=t.data.total,e.listLoading=!1})},handleCreate:function(){var e=this;this.resetForm(),this.dialogStatus="create",this.dialogVisible=!0,setTimeout(function(){e.$refs.uploadImage.forceUpdate()},1)},handleUpdate:function(e){var t=this;this.form=Object.assign({},e),this.dialogStatus="update",this.dialogVisible=!0,setTimeout(function(){t.$refs.uploadImage.forceUpdate()},1)},handleDelete:function(e){var t=this,a=e.id;Object(n.d)(a).then(function(e){200==e.code?(t.getList(),t.submitOk(e.message)):t.submitFail(e.message)})},submitForm:function(){var e=this;if(this.form.salt.length<6)return this.$message({message:"密码必须大于6位数",type:"error",duration:3e3}),!1;this.form.password=this.form.salt,this.$refs.dataForm.validate(function(t){t&&Object(n.f)(e.form).then(function(t){200==t.code?(e.getList(),e.submitOk(t.message),e.dialogVisible=!1):e.submitFail(t.message)}).catch(function(e){console.log(e)})})},resetForm:function(){this.form={id:void 0,username:void 0,password:void 0,nickName:void 0,sex:void 0,phone:void 0,email:void 0,avatar:void 0,flag:void 0,salt:""}},handleDialogClose:function(){this.$refs.dataForm&&this.$refs.dataForm.clearValidate()}}}),s=a("KHd+"),l=Object(s.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("cus-wraper",[a("cus-filter-wraper",[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:e.$t("login.usernamePlaceholder"),clearable:""},model:{value:e.listQuery.username,callback:function(t){e.$set(e.listQuery,"username",t)},expression:"listQuery.username"}}),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.getList}},[e._v(e._s(e.$t("table.query")))]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"sys:sysUser:add",expression:"'sys:sysUser:add'"}],attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.handleCreate}},[e._v(e._s(e.$t("table.add"))+"\n\t\t\t\t")])],1),e._v(" "),a("div",{staticClass:"table-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,size:"mini",fit:"","element-loading-text":"Loading",border:"","highlight-current-row":"",align:"center"}},[a("el-table-column",{attrs:{label:e.$t("login.username"),prop:"username",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("table.nick_name"),prop:"nickName",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("label.gender"),prop:"sex",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(0==t.row.sex?e.$t("male"):e.$t("female")))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("label.phone_number"),prop:"phone",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("mailbox"),prop:"email",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("label.user_avatar"),prop:"avatar",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("span",[a("img",{staticStyle:{width:"50px",height:"50px"},attrs:{src:e.row.avatar,alt:""}})])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("table.status"),prop:"flag",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:1==t.row.flag?"success":"danger",hit:""}},[e._v("\n\t\t\t\t\t\t\t\t"+e._s(1==t.row.flag?e.$t("label.open"):e.$t("tagsView.close"))+"\n\t\t\t\t\t\t\t")])]}}])}),e._v(" "),this.global_checkBtnPermission(["sys:sysUser:edit","sys:sysUser:delete"])?a("el-table-column",{attrs:{align:"center",label:e.$t("table.actions"),width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"has",rawName:"v-has",value:"sys:sysUser:edit",expression:"'sys:sysUser:edit'"}],attrs:{size:"mini",type:"primary",icon:"el-icon-edit",plain:""},on:{click:function(a){e.handleUpdate(t.row)}}},[e._v("\n\t\t\t\t\t\t\t\t"+e._s(e.$t("table.edit"))+"\n\t\t\t\t\t\t\t")]),e._v(" "),a("cus-del-btn",{directives:[{name:"has",rawName:"v-has",value:"sys:sysUser:delete",expression:"'sys:sysUser:delete'"}],on:{ok:function(a){e.handleDelete(t.row)}}})]}}])}):e._e()],1),e._v(" "),a("cus-pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){e.$set(e.listQuery,"page",t)},"update:limit":function(t){e.$set(e.listQuery,"limit",t)},pagination:e.getList}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.titleMap[e.dialogStatus],visible:e.dialogVisible,width:"40%"},on:{"update:visible":function(t){e.dialogVisible=t},close:e.handleDialogClose}},[a("el-form",{ref:"dataForm",staticClass:"demo-ruleForm",staticStyle:{width:"100%","max-width":"600px"},attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:e.$t("login.username"),prop:"username"}},[a("el-input",{model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("login.password"),prop:"salt"}},[a("el-input",{model:{value:e.form.salt,callback:function(t){e.$set(e.form,"salt",t)},expression:"form.salt"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.nick_name"),prop:"nickName"}},[a("el-input",{model:{value:e.form.nickName,callback:function(t){e.$set(e.form,"nickName",t)},expression:"form.nickName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("label.gender"),prop:"sex"}},[a("el-select",{staticClass:"filter-item",staticStyle:{width:"280px"},attrs:{placeholder:e.$t("table.please_select")},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},e._l(e.sexList,function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("label.phone_number"),prop:"phone"}},[a("el-input",{model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("mailbox"),prop:"email"}},[a("el-input",{model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("label.user_avatar"),prop:"avatar"}},[a("UploadImage",{ref:"uploadImage",attrs:{imageUrl:e.form.avatar},on:{successUploadImage:e.successUploadImage}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.status"),prop:"flag"}},[a("el-select",{staticClass:"filter-item",staticStyle:{width:"280px"},attrs:{placeholder:e.$t("table.please_select")},model:{value:e.form.flag,callback:function(t){e.$set(e.form,"flag",t)},expression:"form.flag"}},e._l(e.flagList,function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})}))],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v(" "+e._s(e.$t("table.cancel"))+" ")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v(" "+e._s(e.$t("table.confirm"))+" ")])],1)],1)],1)],1)},[],!1,null,null,null);l.options.__file="sysUser.vue";t.default=l.exports},iOdp:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a("mxV5"),r=a.n(n);function i(e){return new r.a({accessKeyId:e.accessKeyId,accessKeySecret:e.accessKeySecret,stsToken:e.stsToken,region:e.region,bucket:e.bucket})}},uJMD:function(e,t,a){"use strict";a.d(t,"h",function(){return r}),a.d(t,"i",function(){return i}),a.d(t,"c",function(){return s}),a.d(t,"f",function(){return l}),a.d(t,"d",function(){return o}),a.d(t,"e",function(){return u}),a.d(t,"b",function(){return c}),a.d(t,"j",function(){return d}),a.d(t,"a",function(){return f}),a.d(t,"g",function(){return m});var n=!1;function r(e){var t=Math.floor(e/3600),a=Math.floor((e-3600*t)/60),n=e-3600*t-60*a,r="";return r+=t>=10?t+":":t>0?"0"+t+":":"00:",r+=a>=10?a+":":a>0?"0"+a+":":"00:",r+=n>=10?n:n>0?"0"+n:"00"}function i(e){var t=Math.round((new Date).getTime()/1e3)-e,a=Math.floor(t/3600),n=Math.floor((t-3600*a)/60),r=t-3600*a-60*n,i="";return a>0&&(i+=a+":"),n>0&&(i+=n+":"),r>0&&(i+=r+""),i}function s(){var e=new Date,t=e.getFullYear(),a=e.getMonth()+1;return a>=1&&a<=9&&(a="0"+a),t+""+a}function l(e,t){for(var a=e.split(","),n=t.split(","),r=a.length,i=[],s=0;s<r;s++)i[s]={},i[s].value=a[s],i[s].title=n[s];return i}function o(e){return 0===e||"0"===e||null===e||"null"===e||"NULL"===e||""===e||!1===e||"false"===e||void 0===e}function u(e){n&&console.log(e)}function c(e){var t=(Math.round(100*e)/100).toString(),a=t.indexOf(".");for(a<0&&(a=t.length,t+=".");t.length<=a+2;)t+="0";return t}function d(e,t){var a=(e||0).toString();a=t?function(e){var t=(Math.round(e)/100).toString(),a=t.indexOf(".");for(a<0&&(a=t.length,t+=".");t.length<=a+2;)t+="0";return t}(a):c(a);for(var n="",r=0;a.length>3;)n=0!==r?","+a.slice(-3)+n:a.slice(-3)+n,a=a.slice(0,a.length-3),r++;return a&&(n=a+n),n}function f(e,t){!1===t&&(t="Y-m-d H:i:s");var a=e?new Date(1e3*e):new Date,n=function(e,t){return(e+="").length<t?new Array(++t-e.length).join("0")+e:e},r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],i={1:"st",2:"nd",3:"rd",21:"st",22:"nd",23:"rd",31:"st"},s=["","January","February","March","April","May","June","July","August","September","October","November","December"],l={d:function(){return n(l.j(),2)},D:function(){return l.l().substr(0,3)},j:function(){return a.getDate()},l:function(){return r[l.w()]},N:function(){return l.w()+1},S:function(){return i[l.j()]?i[l.j()]:"th"},w:function(){return a.getDay()},z:function(){return(a-new Date(a.getFullYear()+"/1/1"))/864e5>>0},W:function(){var e=l.z(),t=364+l.L()-e,n=(new Date(a.getFullYear()+"/1/1").getDay()||7)-1,r=n;return t<=2&&(a.getDay()||7)-1<=2-t?1:e<=2&&n>=4&&e>=6-n?(r=new Date(a.getFullYear()-1+"/12/31"),f("W",Math.round(r.getTime()/1e3))):1+(n<=3?(e+n)/7:(e-(7-n))/7)>>0},F:function(){return s[l.n()]},m:function(){return n(l.n(),2)},M:function(){return l.F().substr(0,3)},n:function(){return a.getMonth()+1},t:function(){var e;return 2===(e=a.getMonth()+1)?28+l.L():1&e&&e<8||!(1&e)&&e>7?31:30},L:function(){var e=l.Y();return 3&e||!(e%100)&&e%400?0:1},Y:function(){return a.getFullYear()},y:function(){return(a.getFullYear()+"").slice(2)},a:function(){return a.getHours()>11?"pm":"am"},A:function(){return l.a().toUpperCase()},B:function(){var e=60*(a.getTimezoneOffset()+60),t=3600*a.getHours()+60*a.getMinutes()+a.getSeconds()+e,n=Math.floor(t/86.4);return n>1e3&&(n-=1e3),n<0&&(n+=1e3),1===String(n).length&&(n="00"+n),2===String(n).length&&(n="0"+n),n},g:function(){return a.getHours()%12||12},G:function(){return a.getHours()},h:function(){return n(l.g(),2)},H:function(){return n(a.getHours(),2)},i:function(){return n(a.getMinutes(),2)},s:function(){return n(a.getSeconds(),2)},O:function(){var e=n(Math.abs(a.getTimezoneOffset()/60*100),4);return e=a.getTimezoneOffset()>0?"-"+e:"+"+e},P:function(){var e=l.O();return e.substr(0,3)+":"+e.substr(3,2)},c:function(){return l.Y()+"-"+l.m()+"-"+l.d()+"T"+l.h()+":"+l.i()+":"+l.s()+l.P()},U:function(){return Math.round(a.getTime()/1e3)}};return t.replace(/[\\]?([a-zA-Z])/g,function(e,t){return e!==t?t:l[t]?l[t]():t})}function m(e){e=e||32;for(var t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",a=t.length,n="",r=0;r<e;r++)n+=t.charAt(Math.floor(Math.random()*a));return n}}}]);