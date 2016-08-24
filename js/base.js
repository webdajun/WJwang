/**
 * Created by hxsd on 2016/8/24.
 */

/*---------------------------------------------------------------*/
window.onload=function(){
    var aInput=document.getElementsByTagName('input');//首页
    function srk(elm,text){//elm:input标签 text：提示内容
        elm.value=text;
        elm.style.color='#ccc';
        elm.onfocus=function(){//获得焦点
            if(this.value==text){  //如果这个value是 这个提示内容
                this.value="";//
                elm.style.color='#000';
            };
        };
        elm.onblur=function(){//失去焦点
            if(this.value==""){
                this.value=text;
                elm.style.color='#ccc';
            };
        };
    };
    srk(aInput[0],"请输入您的手机号或学号");
    srk(aInput[1],"请输入您的密码");
    srk(aInput[3],"请输入您的手机号");
    srk(aInput[4],"请设置您的密码");
    srk(aInput[5],"请再次输入您的密码");
    srk(aInput[6],"请设置验证码");

};









