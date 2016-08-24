/**
 * Created by hxsd on 2016/8/24.
 */
$(function(){
    //--------------WJtanchuang-4.js---------------------------------
    $(".asideUl li:gt(0)").click(function(){
        $(this).css("background","#ff5224").siblings().css("background","#484848")
    });
//------------------header 橙色 ----------------------
    $(".header p a").click(function(){
        $(this).addClass("ab").siblings().removeClass();
    });
//------------------类型 侧边 ul li-----------------------------------------------
    $(".inLeftUl li:eq(0)").click(function(){
        $(this).addClass("neixLi1").siblings().removeClass();
    });
    $(".inLeftUl li:eq(1)").click(function(){
        $(this).addClass("neixLi2").siblings().removeClass();
    });
    $(".inLeftUl li:eq(2)").click(function(){
        $(this).addClass("neixLi3").siblings().removeClass();
    });
//------------------righht  p-选择项---------------------------------------------
    $(".maInRight p").click(function(){
        $(this).addClass("pac1").siblings().removeClass();
    });

//--------------------------添加项------------------------------------------
    var pDX='<p class="pac1"><input type="radio" name="danXuan"><font>选项1</font></p>';
    var ppDX='<p><input type="checkbox"><font>选项1</font></p>';
    var pTK='<p><textarea></textarea></p>';
//----------------------单选---多选---填空----------------------------
    var danXuan='<div class="maInner">'+
        '<div class="maInLeft">'+
        '<span>1</span>'+
        '<span><i>上移</i></span>'+
        '<span><i>下移</i></span>'+
        '<span><i>添加</i></span>'+
        '<span><i>复制</i></span>'+
        '<span><i>删除</i></span>'+
        '</div>'+
        '<div class="maInRight">'+
        '<div class="shuXian"></div>'+
        '<h3>单选题</h3>'+
        '<p><input type="radio" name="danXuan"><font>选项1</font></p>'+
        '<p><input type="radio" name="danXuan"><font>选项2</font></p>'+
        '</div>'+
        '</div>';

    var duoXuan='<div class="maInner">'+
        '<div class="maInLeft">'+
        '<span>1</span>'+
        '<span><i>上移</i></span>'+
        '<span><i>下移</i></span>'+
        '<span><i>添加</i></span>'+
        '<span><i>复制</i></span>'+
        '<span><i>删除</i></span>'+
        '</div>'+
        '<div class="maInRight">'+
        '<div class="shuXian"></div>'+
        '<h3>多选题</h3>'+
        '<p><input type="checkbox"><font>选项1</font></p>'+
        '<p><input type="checkbox"><font>选项2</font></p>'+
        '</div>'+
        '</div>';

    var tianKong='<div class="maInner">'+
        '<div class="maInLeft">'+
        '<span>1</span>'+
        '<span><i>上移</i></span>'+
        '<span><i>下移</i></span>'+
        '<span><i>添加</i></span>'+
        '<span><i>复制</i></span>'+
        '<span><i>删除</i></span>'+
        '</div>'+
        '<div class="maInRight">'+
        '<div class="shuXian"></div>'+
        '<h3>填空题</h3>'+
        '<p><textarea></textarea></p>'+
        '</div>'+
        '</div>';
//-------------------------------------------------------
    function Anumber(){
        for(var i=0;i<$(".maInner").length;i++){
            var oMaInL=$(".maInLeft");
            oMaInL[i].find("span:eq(0)").html(i+1);
        };
    };

    function Bnumber(){
        var oP=$(".maInRight p");
        for(var j=0;j<oP.length;j++){
            oP.$("font")[i].html(i+1);
        };
    };

//----------------创建新的 单选 多选  填空----------------------------------------
    $(".inLeftUl li:eq(0)").click(function(){
        $(".main").append(danXuan);
        Anumber();
    });
    $(".inLeftUl li:eq(1)").click(function(){
        $(".main").append(duoXuan);
        Anumber();
    });
    $(".inLeftUl li:eq(2)").click(function(){
        $(".main").append(tianKong);
        Anumber();
    });
//-------删除-----------------------------------------------------------------

    $(".maInLeft").find("span:eq(5)").click(function(){
        //alert(1);
        $(this).parent().parent().remove();
    });
//-----------添加-----------------------------------------------------------
    $(".maInLeft").find("span:eq(4)").click(function(){
        //alert(1);
        $(this).parent().parent().remove();
    });
//--------------------------------------------------------
});

