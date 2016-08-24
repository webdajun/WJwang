/**
 * Created by hxsd on 2016/8/24.
 */
$(function(){
//--------------------WJtimu-6.js--------------------------
    $(".maCen1 span").click(function(){
        $(this).append("<i class='dian'></i>").parents().siblings().find("span i").remove(".dian");
    });

    $(".maCen2 p span").click(function(){
        $(this).find("i").addClass("gou").parents().siblings().find("span i").removeClass("gou");
    });
//---------------------------------------------

});