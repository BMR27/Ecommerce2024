import './polyfills.server.mjs';
import{a as h,b as f,e as b,k as _,n as x,o as S}from"./chunk-TXAARVOW.mjs";import{Ab as v,P as c,Q as a,Xa as w,Y as m,ja as e,ka as t,la as g,o as p,ra as d,ta as i,ya as u}from"./chunk-UVT4YTT5.mjs";import"./chunk-KRLCULJA.mjs";var k=(()=>{let o=class o{constructor(r,n,s){this.authService=r,this.toastr=n,this.router=s,this.new_password="",this.isLoadingCode=null}verifiedNewPassword(){this.new_password||this.toastr.error("Validacion","Necesitas ingresar el codigo de verificaci\xF3n");let r={new_password:this.new_password,code:this.code};this.authService.verifiedNewPassword(r).subscribe(n=>{console.log(n),this.toastr.success("exito","La contrase\xF1a se ha cambiado correctamente"),this.router.navigateByUrl("/login")})}};o.\u0275fac=function(n){return new(n||o)(a(x),a(S),a(v))},o.\u0275cmp=p({type:o,selectors:[["app-new-password"]],inputs:{code:"code"},standalone:!0,features:[u],decls:46,vars:1,consts:[[1,"breadcrumb__area","include-bg","text-center","pt-95","pb-50"],[1,"container"],[1,"row"],[1,"col-xxl-12"],[1,"breadcrumb__content","p-relative","z-index-1"],[1,"breadcrumb__title"],[1,"breadcrumb__list"],["href","#"],[1,"tp-login-area","pb-140","p-relative","z-index-1","fix"],[1,"tp-login-shape"],["src","assets/img/login/login-shape-1.png","alt","",1,"tp-login-shape-1"],["src","assets/img/login/login-shape-2.png","alt","",1,"tp-login-shape-2"],["src","assets/img/login/login-shape-3.png","alt","",1,"tp-login-shape-3"],["src","assets/img/login/login-shape-4.png","alt","",1,"tp-login-shape-4"],[1,"row","justify-content-center"],[1,"col-xl-6","col-lg-8"],[1,"tp-login-wrapper"],[1,"tp-login-top","text-center","mb-30"],[1,"tp-login-title"],[1,"tp-login-option"],[1,"tp-login-input-wrapper"],[1,"tp-login-input-box"],[1,"tp-login-input"],["id","code","type","password","placeholder","**********",3,"ngModel","ngModelChange"],[1,"tp-login-input-title"],["for","email"],[1,"tp-login-bottom","mb-15"],["type","button",1,"tp-login-btn","w-100",3,"click"],[1,"tp-login-suggetions","d-sm-flex","align-items-center","justify-content-center"],[1,"tp-login-forgot"],["href","login.html"]],template:function(n,s){n&1&&(e(0,"main")(1,"section",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"h3",5),i(7,"New Password"),t(),e(8,"div",6)(9,"span")(10,"a",7),i(11,"Home"),t()(),e(12,"span"),i(13,"Reset Passowrd"),t()()()()()()(),e(14,"section",8)(15,"div",9),g(16,"img",10)(17,"img",11)(18,"img",12)(19,"img",13),t(),e(20,"div",1)(21,"div",14)(22,"div",15)(23,"div",16)(24,"div",17)(25,"h3",18),i(26,"New Password"),t(),e(27,"p"),i(28,"Enter your email address to request password reset."),t()(),e(29,"div",19)(30,"div",20)(31,"div",21)(32,"div",22)(33,"input",23),d("ngModelChange",function(E){return s.new_password=E}),t()(),e(34,"div",24)(35,"label",25),i(36,"New Password : "),t()()()(),e(37,"div",26)(38,"button",27),d("click",function(){return s.verifiedNewPassword()}),i(39,"Change Password"),t()(),e(40,"div",28)(41,"div",29)(42,"span"),i(43,"Remeber Password? "),e(44,"a",30),i(45," Login"),t()()()()()()()()()()()),n&2&&(c(33),m("ngModel",s.new_password))},dependencies:[w,_,h,f,b]});let l=o;return l})();export{k as NewPasswordComponent};
