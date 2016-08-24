/**
 * Created by hxsd on 2016/7/26.
 */
$(function(){
//注册----------index-------------------------------------------
    $(".zhuce").click(function(){
        $(".modal").show();
        $(".popRegister").show();
        $(".popup").hide();
    });
    //登录-------
    $(".denglu").click(function(){
        $(".modal").show();
        $(".popup").show();
        $(".popRegister").hide();
    });
    //删除-------
    $(".shanchu").click(function(){
        $(".modal").hide();
        $(".popRegister").hide();
        $(".popup").hide();
    });
//---注册 li--------
    $(".topUl li").click(function(){
        $(this).addClass("pop2Color").siblings().removeClass();
        $(this).find("span").css("display","block").parent().siblings().find("span").css("display","none");

    });

});