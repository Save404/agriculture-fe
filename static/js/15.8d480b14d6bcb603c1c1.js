webpackJsonp([15],{"/pIL":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,'\n.createPost-container[data-v-028e9162] {\n  position: relative;\n}\n.createPost-container .createPost-main-container[data-v-028e9162] {\n    padding: 10px 45px 20px 50px;\n}\n.createPost-container .createPost-main-container .postInfo-container[data-v-028e9162] {\n      position: relative;\n      margin-bottom: 10px;\n}\n.createPost-container .createPost-main-container .postInfo-container[data-v-028e9162]:after {\n        content: "";\n        display: table;\n        clear: both;\n}\n.createPost-container .createPost-main-container .postInfo-container .postInfo-container-item[data-v-028e9162] {\n        float: left;\n}\n.createPost-container .createPost-main-container .editor-container[data-v-028e9162] {\n      min-height: 300px;\n      margin: 0 0 30px;\n}\n.createPost-container .createPost-main-container .editor-container .editor-upload-btn-container[data-v-028e9162] {\n        text-align: right;\n        margin-right: 10px;\n}\n.createPost-container .createPost-main-container .editor-container .editor-upload-btn-container .editor-upload-btn[data-v-028e9162] {\n          display: inline-block;\n}\n.createPost-container .word-counter[data-v-028e9162] {\n    width: 40px;\n    position: absolute;\n    right: -10px;\n    top: 0px;\n}\n',""])},XvgJ:function(t,e,n){var o=n("/pIL");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n("rjj0").default)("ece24f0c",o,!0,{})},e7lN:function(t,e,n){"use strict";var o=n("Dd8w"),a=n.n(o),i=n("NYxO"),s=n("+mJe"),r=n("5aCZ"),c=n("auNG"),l={components:{MDinput:s.a,Tinymce:r.a},props:{type:String,isEdit:{type:Boolean,default:!1}},data:function(){return{msg:"发布",postForm:{createTime:"",noticeId:"",noticeTitle:"",departmentName:"",noticeLevel:0,noticeContent:""},rules:{}}},created:function(){var t=this;if(this.isEdit){this.msg="保存";var e=this.$route.params.id;Object(c.c)(e).then(function(e){for(var n in t.postForm)t.postForm[n]=e[n]})}},computed:a()({},Object(i.b)(["basicId","roles","phone"])),methods:{releasePurchase:function(){var t=this;this.postForm.basicId=this.postForm.basicId||this.basicId,this.isEdit?(console.log(this.postForm),console.log(this.$route.params.id),Object(c.e)(this.$route.params.id,this.postForm.noticeTitle,this.postForm.noticeContent,this.postForm.noticeLevel).then(function(e){t.$message({message:"公告更新成功",type:"success"}),t.$router.push({name:"noticeList"})})):Object(c.a)(this.postForm.title,this.postForm.content,this.postForm.level).then(function(e){t.$message({message:"公告发布成功",type:"success"}),t.$router.push({name:"dashboard"})}).catch(function(){})}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"createPost-container"},[n("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:t.postForm,rules:t.rules}},[n("div",{staticClass:"createPost-main-container"},[n("el-row",[n("el-col",{attrs:{span:24}},[n("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{prop:"title"}},[n("MDinput",{attrs:{name:"name",required:"",maxlength:100},model:{value:t.postForm.noticeTitle,callback:function(e){t.$set(t.postForm,"noticeTitle",e)},expression:"postForm.noticeTitle"}},[t._v("\n              标题\n            ")])],1),t._v(" "),n("div",{staticClass:"postInfo-container"},[n("el-row",[n("el-col",{attrs:{span:11}},[n("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"80px",label:"部门:"}},[n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"部门"},model:{value:t.postForm.departmentName,callback:function(e){t.$set(t.postForm,"departmentName",e)},expression:"postForm.departmentName"}})],1)],1),t._v(" "),n("el-col",{attrs:{span:11}},[n("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"60px",label:"重要性:"}},[n("el-rate",{staticStyle:{"margin-top":"8px"},attrs:{max:3,colors:["#99A9BF","#F7BA2A","#FF9900"],"low-threshold":1,"high-threshold":3},model:{value:t.postForm.noticeLevel,callback:function(e){t.$set(t.postForm,"noticeLevel",e)},expression:"postForm.noticeLevel"}})],1)],1),t._v(" "),n("el-col",{attrs:{span:2}},[n("el-button",{attrs:{type:"primary",size:"large"},on:{click:t.releasePurchase}},[t._v(t._s(t.msg))])],1)],1)],1)],1)],1),t._v(" "),n("el-form-item",{staticStyle:{"margin-bottom":"40px"}},[n("div",{staticClass:"editor-container"},[n("tinymce",{attrs:{height:300},model:{value:t.postForm.noticeContent,callback:function(e){t.$set(t.postForm,"noticeContent",e)},expression:"postForm.noticeContent"}})],1)])],1)])],1)},staticRenderFns:[]};var m=n("VU/8")(l,p,!1,function(t){n("XvgJ")},"data-v-028e9162",null);e.a=m.exports},g89u:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("Dd8w"),a=n.n(o),i=n("NYxO"),s={components:{NoticeForm:n("e7lN").a},computed:a()({},Object(i.b)(["roles"])),data:function(){return{}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notice-create"},[e("notice-form",{attrs:{type:this.roles[0]}})],1)},staticRenderFns:[]},c=n("VU/8")(s,r,!1,null,null,null);e.default=c.exports}});