/**
 * Created by hxsd on 2016/8/24.
 */
/*---------------------------------------------------------------*/
window.onload=function(){
    var aWJ2Inp2=document.getElementById('WJ2Inp2');
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
    srk(aWJ2Inp2,"问卷|");

};
