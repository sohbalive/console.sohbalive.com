(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-e8ec"],{cFZU:function(e,t,a){"use strict";a.r(t);var s=a("hKRS"),i=a("X4fA"),l={data:function(){return{tableKey:0,list:null,total:0,listLoading:!0,listQuery:{page:1,limit:10,name:void 0},flagList:[{key:1,display_name:this.$t("label.open")},{key:0,display_name:this.$t("tagsView.close")}],showReviewer:!1,form:{id:void 0,code:void 0,name:void 0,remarks:void 0,isRelatedSysUser:void 0,isRelatedSysMenu:void 0,isRelatedWxAccount:void 0,is_effect:1},dialogVisible:!1,dialogStatus:"",titleMap:{update:this.$t("table.edit"),create:this.$t("table.create")},rules:{name:[{required:!0,message:"请输入角色名",trigger:"blur"},{min:1,max:20,message:"长度在 1 到 20 个字符",trigger:"blur"}],remarks:[{max:200,message:"长度最多200个字符",trigger:"blur"}]}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0,this.listQuery.token=Object(i.c)(),Object(s.d)(this.listQuery).then(function(t){e.list=t.data.records,e.total=t.data.total,e.listLoading=!1})},handleCreate:function(){this.resetForm(),this.dialogStatus="create",this.dialogVisible=!0},handleUpdate:function(e){this.form=Object.assign({},e),this.form.isRelatedSysMenu=void 0,this.form.isRelatedSysUser=void 0,this.form.isRelatedWxAccount=void 0,this.dialogStatus="update",this.dialogVisible=!0,console.log(this.dialogStatus)},handleDelete:function(e){var t=this;if("1"==e.isRelatedSysUser||"1"==e.isRelatedSysMenu||"1"==e.isRelatedWxAccount)return this.$message({message:"请先解除关联",type:"warning"}),!1;Object(s.a)(e.id).then(function(e){200===e.code?(t.getList(),t.submitOk(e.message)):t.submitFail(e.message)})},submitForm:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&Object(s.f)(e.form).then(function(t){200==t.code?(e.getList(),e.submitOk(t.message),e.dialogVisible=!1):e.submitFail(t.message)}).catch(function(e){console.log(e)})})},resetForm:function(){this.form={id:void 0,code:void 0,name:void 0,remarks:void 0,is_effect:1}},handleDialogClose:function(){this.$refs.dataForm&&this.$refs.dataForm.clearValidate()}}},r=a("KHd+"),n=Object(r.a)(l,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("cus-wraper",[a("cus-filter-wraper",[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:e.$t("role_name"),clearable:""},model:{value:e.listQuery.name,callback:function(t){e.$set(e.listQuery,"name",t)},expression:"listQuery.name"}}),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.getList}},[e._v(e._s(e.$t("table.search"))+"\n\t\t\t")]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"sys:role:add",expression:"'sys:role:add'"},{name:"waves",rawName:"v-waves"}],attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.handleCreate}},[e._v(e._s(e.$t("table.add"))+"\n\t\t\t")])],1),e._v(" "),a("div",{staticClass:"table-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,size:"mini","element-loading-text":"Loading",fit:"",border:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"ID",prop:"id",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("role_code"),prop:"code",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("role_name"),prop:"name",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("label.remarks"),prop:"remarks",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("is_associated_users"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:1==t.row.isRelatedSysUser?"success":"danger",hit:""}},[e._v("\n\t\t\t\t\t\t\t"+e._s(1==t.row.isRelatedSysUser?e.$t("table.yes"):e.$t("table.no"))+"\n\t\t\t\t\t\t")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("is_associated_system_resources"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:1==t.row.isRelatedSysMenu?"success":"danger",hit:""}},[e._v("\n\t\t\t\t\t\t\t"+e._s(1==t.row.isRelatedSysMenu?e.$t("table.yes"):e.$t("table.no"))+"\n\t\t\t\t\t\t")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("table.status"),prop:"is_effect",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:1==t.row.is_effect?"success":"danger",hit:""}},[e._v("\n\t\t\t\t\t\t\t"+e._s(1==t.row.is_effect?e.$t("label.open"):e.$t("tagsView.close"))+"\n\t\t\t\t\t\t")])]}}])}),e._v(" "),this.global_checkBtnPermission(["sys:role:edit","roleSetting","sys:role:delete"])?a("el-table-column",{attrs:{label:e.$t("table.actions"),align:"center",width:"320"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"has",rawName:"v-has",value:"sys:role:edit",expression:"'sys:role:edit'"},{name:"waves",rawName:"v-waves"}],attrs:{size:"mini",type:"primary",icon:"el-icon-edit",plain:""},on:{click:function(a){e.handleUpdate(t.row)}}},[e._v(" "+e._s(e.$t("table.edit"))+"\n\t\t\t\t\t\t")]),e._v(" "),a("router-link",{attrs:{to:"/systemManage/roleSetting/"+t.row.id}},[a("el-button",{directives:[{name:"has",rawName:"v-has",value:"roleSetting",expression:"'roleSetting'"}],staticStyle:{width:"100px","margin-left":"10px","margin-right":"10px"},attrs:{type:"primary",size:"mini",icon:"el-icon-setting",plain:""}},[e._v("\n\t\t\t\t\t\t\t\t"+e._s(e.$t("Permission_setting"))+"\n\t\t\t\t\t\t\t")])],1),e._v(" "),a("cus-del-btn",{directives:[{name:"has",rawName:"v-has",value:"sys:role:delete",expression:"'sys:role:delete'"}],on:{ok:function(a){e.handleDelete(t.row)}}})]}}])}):e._e()],1),e._v(" "),a("cus-pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){e.$set(e.listQuery,"page",t)},"update:limit":function(t){e.$set(e.listQuery,"limit",t)},pagination:e.getList}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.titleMap[e.dialogStatus],visible:e.dialogVisible,width:"40%"},on:{"update:visible":function(t){e.dialogVisible=t},close:e.handleDialogClose}},[a("el-form",{ref:"dataForm",staticClass:"demo-ruleForm",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:e.$t("role_code"),prop:"code"}},[a("el-input",{model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("role_name"),prop:"name"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("role_description"),prop:"remarks"}},[a("el-input",{attrs:{type:"textarea",rows:7},model:{value:e.form.remarks,callback:function(t){e.$set(e.form,"remarks",t)},expression:"form.remarks"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.status"),prop:"is_effect"}},[a("el-select",{staticClass:"filter-item",staticStyle:{width:"280px"},attrs:{placeholder:e.$t("table.please_select")},model:{value:e.form.is_effect,callback:function(t){e.$set(e.form,"is_effect",t)},expression:"form.is_effect"}},e._l(e.flagList,function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})}))],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],on:{click:function(t){e.dialogVisible=!1}}},[e._v(" "+e._s(e.$t("table.cancel")))]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary"},on:{click:e.submitForm}},[e._v(e._s(e.$t("table.confirm")))])],1)],1)],1)],1)},[],!1,null,null,null);n.options.__file="role.vue";t.default=n.exports},hKRS:function(e,t,a){"use strict";a.d(t,"d",function(){return i}),a.d(t,"f",function(){return l}),a.d(t,"a",function(){return r}),a.d(t,"b",function(){return n}),a.d(t,"i",function(){return o}),a.d(t,"e",function(){return c}),a.d(t,"c",function(){return d}),a.d(t,"h",function(){return u}),a.d(t,"g",function(){return m});var s=a("t3Un");function i(e){return Object(s.a)({url:"/admin/role/listPage",method:"post",data:e})}function l(e){return Object(s.a)({url:"/admin/role/saveOrUpdate",method:"post",data:e})}function r(e){return Object(s.a)({url:"/admin/role/delete",method:"post",data:{id:e}})}function n(e){return Object(s.a)({url:"/admin/role/detail",method:"post",data:{id:e}})}function o(){return Object(s.a)({url:"/admin/sysUser/treeUser",method:"post"})}function c(e){return Object(s.a)({url:"/admin/sysUserRole/list",method:"post",data:e})}function d(e){return Object(s.a)({url:"/admin/roleMenu/list",method:"post",data:e})}function u(e){return Object(s.a)({url:"/admin/sysUserRole/saveUserRole",method:"post",data:e})}function m(e){return Object(s.a)({url:"/admin/roleMenu/saveRoleMenu",method:"post",data:e})}}}]);