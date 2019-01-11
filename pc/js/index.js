$(function(){

    //获取屏幕大小,并设置元素高度
    getWinH();

    /*$(window).scroll(function(){
        getWinH();
    });*/

    $(window).resize(function(){
        getWinH();
    });

    function getWinH(){
        var winH = $(window).height();
        $(".conDiv").height(winH);
    }

    //放大图标处内容切换
    $(".imgList li").hover(function(){
       var index = $(this).index();
        $(".con3 .titleList li").eq(index).show().siblings().hide();
    });




    /*$tab.find("li").click(function(){
        var index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $nav.find(".navList li:eq("+ index +")").addClass("active").siblings().removeClass("active");
    });*/

    var $nav = $(".nav");
    var $tab = $(".tabList");
    $nav.find(".navList li").click(function(){
        var index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $tab.find("li:eq("+ index +")").addClass("active").siblings().removeClass("active");
    });

    var hName = $(".header").attr("name");
    if(hName == "index"){
        var path = location.href;
        var n = path.charAt(path.length - 1)-1;

        $nav.find(".navList li").eq(n).addClass("active").siblings().removeClass("active");
    }







    /*$(window).scroll(function(){
        var winH = $(window).height();
        var h2 = winH*2;
        var h3 = winH*3;
        var h4 = winH*4;
        var t = $(window).scrollTop();

        if(t < winH){
            $tab.removeClass("tabListB");
        }

        if(t > winH || t < h2){
            $tab.addClass("tabListB");
        }


        if(t > h2 || t < h3){
            $tab.removeClass("tabListB");
        }

        if(t > h3){
            $tab.addClass("tabListB");
        }
    });*/




});