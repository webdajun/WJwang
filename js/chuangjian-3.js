/**
 * Created by hxsd on 2016/8/24.
 */
$(function(){
//-----------------头部nav--------chuangjian-3.js--------------------------
    $(".CJnav li").click(function(){
        $(this).append("<span class='cheng'></span>").siblings().find("span").remove(".cheng");
        $(this).find("a").css("color","#fff").siblings().css("color","#d1d1d1");
    });
//-------------类别UL LI---------------
    $(".sortUl li:eq(0)").click(function(){
        $(this).addClass("liA").siblings().removeClass();
    });
    $(".sortUl li:eq(1)").click(function(){
        $(this).addClass("liB").siblings().removeClass();
    });
    $(".sortUl li:eq(2)").click(function(){
        $(this).addClass("liC").siblings().removeClass();
    });
    $(".sortUl li:eq(3)").click(function(){
        $(this).addClass("liD").siblings().removeClass();

    });
//-----------------------------------
    $(".but").click(function(){
        if($(".biaotInp").val()==""){
            $("section h3").show();
            setTimeout(function(){
                $("section h3").hide();
            },1000);
            return false;
        }
    });
//----------------------------------------------------------
});

