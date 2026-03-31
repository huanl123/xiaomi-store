$(function(){
    //初始化，设置第一个出现的图片和触碰点
    $(".t1 li").first().show();
    $(".t2 li").first().addClass("active");
//鼠标悬停事件，排斥其他按钮
    $(".t2 li").mouseover(function(){
        //悬停时
        $(this).addClass("active").siblings("li").removeClass("active");
        var index=$(this).index();//获取索引

        i=index;

        $(".t1 li").eq(index).fadeIn().siblings("li").fadeOut();//筛选淡入其余淡出
    })
//定时自动 setInterval(所执行方法函数，毫秒)
//所设定时间为2000毫秒,即2秒一次
    var i=0;
    var t = setInterval(move,2000)

    function move(){//一次定义函数多次使用
        i++;
        if(i==5){
            i=0;//判断循环到四张图的时候回到第一图重新播放
        }
        $(".t2 li").eq(i).addClass("active").siblings("li").removeClass("active");
        $(".t1 li").eq(i).fadeIn().siblings().fadeOut();//筛选淡入
    }

    function moveleft(){//一次定义函数多次使用(向左的滑板)
        i--;
        if(i==-1){
            i=3;//判断循环到四张图的时候回到第一图重新播放
        }
        $(".t2 li").eq(i).addClass("active").siblings("li").removeClass("active");
        $(".t1 li").eq(i).fadeIn().siblings().fadeOut();//筛选淡入
    }


