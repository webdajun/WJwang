/**
 * Created by hxsd on 2016/8/24.
 */
$(function(){
    //--------wenjuan-2.js---------头部nav----------
    $(".navUl li").click(function(){
        $(this).append("<span class='cheng'></span>").siblings().find("span").remove(".cheng");
        $(this).find("a").css("color","#fff").siblings().css("color","#d1d1d1");
    });
    //------时间---------
    function fix(n){
        return n<10? "0"+n : n ;
    };
    var time=new Date();// 取时间
    var year=time.getFullYear();
    var month=time.getMonth()+1;
    var date=time.getDate();
    var Atime=year+"."+fix(month)+"."+fix(date);
//--------------------------------------------------------------------------------------------------------------
});

