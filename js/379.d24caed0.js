"use strict";(self["webpackChunkjan_admin"]=self["webpackChunkjan_admin"]||[]).push([[379],{1033:function(e,i,s){s.d(i,{L:function(){return l}});const l=()=>[{id:"1",permissionName:"员工管理",permissionMark:"userManage",permissionDesc:"员工管理菜单",children:[{id:"1-1",permissionName:"分配角色",permissionMark:"distributeRole",permissionDesc:"为员工分配角色"},{id:"1-2",permissionName:"导入员工",permissionMark:"importUser",permissionDesc:"通过 excel 导入员工"},{id:"1-3",permissionName:"删除员工",permissionMark:"removeUser",permissionDesc:"删除员工"}]},{id:"2",permissionName:"角色列表",permissionMark:"roleList",permissionDesc:"角色列表菜单",children:[{id:"2-1",permissionName:"分配权限",permissionMark:"distributePermission",permissionDesc:"为角色分配权限"}]},{id:"3",permissionName:"权限列表",permissionMark:"permissionList",permissionDesc:"权限列表菜单",children:[]},{id:"4",permissionName:"文章排名",permissionMark:"articleRanking",permissionDesc:"文章排名菜单",children:[]},{id:"5",permissionName:"创建文章",permissionMark:"articleCreate",permissionDesc:"创建文章页面",children:[]}]},730:function(e,i,s){s.d(i,{Uy:function(){return l},b6:function(){return r}});const l=()=>[{id:"1",title:"超级管理员",describe:"唯一账号，可以操作系统所有功能"},{id:"2",title:"管理员",describe:"由超管指定，可以为多个，协助超管管理系统"},{id:"3",title:"人事经理",describe:"主管人事相关业务"},{id:"4",title:"销售经理",describe:"主管销售相关业务"},{id:"5",title:"保安队长",describe:"主管安保相关业务"},{id:"6",title:"员工",describe:"普通员工"}],r=e=>["1","1-1","1-2","1-3","2","2-1","3","4","5"]},1379:function(e,i,s){s.r(i),s.d(i,{default:function(){return v}});var l=s(6252),r=s(3577),n=s(730),t=s(2262),a=s(3188),o=s(1033),d=s(9150),m=s(1348);const u={class:"dialog-footer"};var c={__name:"DistributePermission",props:{modelValue:{type:Boolean,required:!0},roleId:{type:String,required:!0}},emits:["update:modelValue"],setup(e,{emit:i}){const s=e,c={children:"children",label:"permissionName"},p=(0,t.iH)([]),b=async()=>{p.value=(0,o.L)()};b(),(0,a.K)(b);const k=(0,t.iH)(null),f=async()=>{const e=await(0,n.b6)(s.roleId);k.value.setCheckedKeys(e)};(0,l.YP)((()=>s.roleId),(e=>{e&&f()}));const w=(0,d.QT)(),v=async()=>{m.z8.success(w.t("msg.role.updateRoleSuccess")),g()},g=()=>{i("update:modelValue",!1)};return(i,s)=>{const n=(0,l.up)("el-tree"),t=(0,l.up)("el-button"),a=(0,l.up)("el-dialog");return(0,l.wg)(),(0,l.j4)(a,{title:i.$t("msg.excel.roleDialogTitle"),"model-value":e.modelValue,onClose:g},{footer:(0,l.w5)((()=>[(0,l._)("span",u,[(0,l.Wm)(t,{onClick:g},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(i.$t("msg.universal.cancel")),1)])),_:1}),(0,l.Wm)(t,{type:"primary",onClick:v},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(i.$t("msg.universal.confirm")),1)])),_:1})])])),default:(0,l.w5)((()=>[(0,l.Wm)(n,{ref_key:"treeRef",ref:k,data:p.value,"show-checkbox":"","check-strictly":"","node-key":"id","default-expand-all":"",props:c},null,8,["data"])])),_:1},8,["title","model-value"])}}};const p=c;var b=p,k=s(5108),f={__name:"index",setup(e){const i=(0,t.iH)([]),s=()=>{i.value=(0,n.Uy)(),k.log("allRoles.value=======>",i.value)};s(),(0,a.K)(s);const o=(0,t.iH)(""),d=(0,t.iH)(!1),m=e=>{o.value=e.id,d.value=!0};return(e,s)=>{const n=(0,l.up)("el-table-column"),t=(0,l.up)("el-button"),a=(0,l.up)("el-table"),u=(0,l.up)("el-card"),c=(0,l.Q2)("permission");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(a,{data:i.value,border:"",style:{width:"100%"}},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{label:e.$t("msg.role.index"),type:"index",width:"120"},null,8,["label"]),(0,l.Wm)(n,{label:e.$t("msg.role.name"),prop:"title"},null,8,["label"]),(0,l.Wm)(n,{label:e.$t("msg.role.desc"),prop:"describe"},null,8,["label"]),(0,l.Wm)(n,{label:e.$t("msg.role.action"),prop:"action",width:"260"},{default:(0,l.w5)((({row:i})=>[(0,l.wy)(((0,l.wg)(),(0,l.j4)(t,{type:"primary",size:"mini",onClick:e=>m(i)},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.$t("msg.role.assignPermissions")),1)])),_:2},1032,["onClick"])),[[c,["distributePermission"]]])])),_:1},8,["label"])])),_:1},8,["data"])])),_:1}),(0,l.Wm)(b,{modelValue:d.value,"onUpdate:modelValue":s[0]||(s[0]=e=>d.value=e),roleId:o.value},null,8,["modelValue","roleId"])])}}};const w=f;var v=w}}]);
//# sourceMappingURL=379.d24caed0.js.map