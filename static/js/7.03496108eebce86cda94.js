webpackJsonp([7],{"2SUi":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s=t("DwAC"),o=t("dLB1"),n={name:"MjRegister",components:{Register:s.a,RegisterHeader:o.a},data:function(){return{MjRegisterForm:{telephone:"",password:"",repassword:"",protocol:!1},url:"/mj/mj_register"}}},a={render:function(){var e=this.$createElement,r=this._self._c||e;return r("div",{attrs:{id:"Mj-register"}},[r("register-header",{attrs:{role:"买家"}}),this._v(" "),r("register",{attrs:{form:this.MjRegisterForm,url:this.url}})],1)},staticRenderFns:[]};var i=t("VU/8")(n,a,!1,function(e){t("pWR/")},"data-v-2ff44dc8",null);r.default=i.exports},DwAC:function(e,r,t){"use strict";var s={name:"Register",props:["form","url"],data:function(){var e=this;return{rules:{telephone:[{required:!0,message:"请输入手机号码",trigger:"blur"},{min:11,max:11,message:"请输入11位手机号码",trigger:"blur"},{pattern:/^1[34578]\d{9}$/,message:"目前只支持中国大陆的手机号码",trigger:"blur"}],password:[{required:!0,message:"请输入登录密码",trigger:"blur"},{min:6,max:20,message:"请输入6-20位密码",trigger:"blur"}],repassword:[{required:!0,message:"请输入登录密码",trigger:"blur"},{validator:function(r,t,s){""===t?s(new Error("请再次输入密码")):t!==e.form.password?s(new Error("两次输入密码不一致!")):s()},trigger:"blur"}]}}},methods:{submitForm:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return r.$message("密码错误"),!1;!0===r.form.protocol?r.onSubmit():r.$message("请阅读协议并同意")})},onSubmit:function(){var e=this;this.url.includes("nh")?(this.loading=!0,this.$store.dispatch("NhRegister",this.form).then(function(){e.loading=!1,e.$message({type:"success",message:"注册成功，请前往登录"}),e.$router.push({path:"/nhlogin"})}).catch(function(){e.loading=!1})):this.url.includes("mj")&&(this.loading=!0,this.$store.dispatch("MjRegister",this.form).then(function(){e.loading=!1,e.$message({type:"success",message:"注册成功，请前往登录"}),e.$router.push({path:"/mjlogin"})}).catch(function(){e.loading=!1}))},goLogin:function(){this.url.includes("nh")?this.$router.push({name:"FarmerLogin"}):this.url.includes("mj")&&this.$router.push({name:"MjLogin"})},resetForm:function(e){this.$refs[e].resetFields()}}},o={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"register"},[t("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"手机号码",prop:"telephone"}},[t("el-input",{attrs:{placeholder:"您的手机号码",clearable:""},model:{value:e.form.telephone,callback:function(r){e.$set(e.form,"telephone",r)},expression:"form.telephone"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"设置密码",prop:"password"}},[t("el-input",{attrs:{type:"password",placeholder:"建议至少使用两种字符组合",clearable:""},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"确认密码",prop:"repassword"}},[t("el-input",{attrs:{type:"password",placeholder:"请再次输入密码",clearable:""},model:{value:e.form.repassword,callback:function(r){e.$set(e.form,"repassword",r)},expression:"form.repassword"}})],1),e._v(" "),t("el-form-item",{staticClass:"picker",attrs:{label:"",prop:"protocol"}},[t("el-checkbox",{attrs:{label:"阅读并同意"},model:{value:e.form.protocol,callback:function(r){e.$set(e.form,"protocol",r)},expression:"form.protocol"}},[t("a",{attrs:{href:"#"}},[e._v("《用户注册协议》")]),e._v(" "),t("a",{attrs:{href:"#"}},[e._v("《隐私政策》")])])],1),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("form")}}},[e._v("立即注册")]),e._v(" "),t("el-button",{on:{click:function(r){e.resetForm("form")}}},[e._v("取消")]),e._v(" "),t("br"),e._v(" "),t("br"),e._v(" "),t("el-button",{attrs:{type:"success"},on:{click:e.goLogin}},[e._v("已有账号，去登录")])],1)],1)},staticRenderFns:[]};var n=t("VU/8")(s,o,!1,function(e){t("eZTs")},"data-v-7ce25438",null);r.a=n.exports},"E1Q+":function(e,r,t){(e.exports=t("FZ+f")(!1)).push([e.i,"\n.el-form-item[data-v-7ce25438] {\n  -webkit-transform: translateX(-40px);\n          transform: translateX(-40px);\n}\n\n",""])},FBva:function(e,r,t){(e.exports=t("FZ+f")(!1)).push([e.i,"\n.register-header[data-v-01bb9100] {\n  position: absolute;\n  padding: 50px;\n  text-align: center;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n",""])},dLB1:function(e,r,t){"use strict";var s={render:function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"register-header"},[r("h1",[this._v(this._s(this.role)+"注册")])])},staticRenderFns:[]};var o=t("VU/8")({props:["role"]},s,!1,function(e){t("hUzQ")},"data-v-01bb9100",null);r.a=o.exports},eZTs:function(e,r,t){var s=t("E1Q+");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,t("rjj0").default)("201a7b5f",s,!0,{})},hUzQ:function(e,r,t){var s=t("FBva");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,t("rjj0").default)("1894d2e3",s,!0,{})},j6hM:function(e,r,t){(e.exports=t("FZ+f")(!1)).push([e.i,"\n*[data-v-2ff44dc8] {\n  text-align: center;\n}\n.register[data-v-2ff44dc8] {\n  width: 40%;\n  margin-top: 13%;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n\n",""])},"pWR/":function(e,r,t){var s=t("j6hM");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,t("rjj0").default)("1b0575b7",s,!0,{})}});