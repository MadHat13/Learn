$(document).ready(function () {
    $("div.test").click(function () {
        $("div.test").css("background", "red");
    })

    $(".tab-head").click(function () {
        for (var j = 0; j < $(".tab-head").toArray().length; j++) {
            $(".tab-head").eq(j).removeClass("tab-head-click");
            $(".tab-main").eq(j).hide();
        }
        $(".tab-head").eq($(this).index()).addClass("tab-head-click");
        
        $(".tab-main").eq($(this).index()).show();
    })

    $(".choice").click(function(){
        for(var i=0;i<$(".img-img").toArray().length;i++){
            $(".img-img").eq(i).hide();
            $(".choice").eq(i).removeClass("choice-c");
        }
        $(".img-img").eq($(this).index()).show();
        $(this).addClass("choice-c")
    })

    $(".to").click(function(){
        for(var i=0;i<$(".img-img").toArray().length;i++){
            if($(".img-img").eq(i).css("display")==="inline"){
                $(".img-img").eq(i).css("display","none");
                $(".choice").eq(i).removeClass("choice-c");
                if($(this).index()==0){
                   i-=1;
                }
                else if($(this).index()==1){
                    i+=1;
                }
                if(i<0){
                    i+=5;
                }
                else if(i>4){
                    i-=5;
                }
                $(".img-img").eq(i).css("display","inline");
                $(".choice").eq(i).addClass("choice-c");
                break;
            }
        }
    })
})