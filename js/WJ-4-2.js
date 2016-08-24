/**
 * Created by hxsd on 2016/8/24.
 */
$(function(){
    //-------------WJ-4-2.js-------------------------------------
    $(".asideUl li:gt(0)").click(function(){
        $(this).css("background","#ff5224").siblings().css("background","#484848")
    });
//----------------------复制--------------------
    $("#copy_btn").click(function(event){
        $("#oInput").select();
        if(document.execCommand('copy')){
            alert("已经成功复制到粘贴板");
        }else{
            alert("请按ctrl+c进行复制")
        }
    });

//-------------------------二维码--------------------------------------
    $("#Acode").qrcode({
        render: "table", //table方式
        width: 135, //宽度
        height:135, //高度
        text: "http://www.hxsd.com/" //任意内容
    });

//---------------------------
});

