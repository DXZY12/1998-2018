$(document).ready(function () {
    var currentPage = 0;      //当前的页面数
    var lock = true;        //函数节流，给定的一个变量
    $("#container").mousewheel(function (e, delta) {
        if (lock) {
            currentPage = currentPage - delta;
            if (currentPage < 0) {
                currentPage = 0;
            }
            if (currentPage > 9) {
                currentPage = 9;
            }
            console.log(currentPage);
            console.log(delta);
//                让container进行动画
            $("#container").delay(200).animate(
                {
                    "left": currentPage * -100 + "%"
                    //通过负的100%的倍数来获取到其他的屏幕内容
                }
                , 800         //时间
                , "easieEaseOutCubic"          //添加easie.js类库后添加该运动方式名称

            );

            $("#nav div").eq(currentPage).addClass('current').siblings().removeClass('current');

            //函数节流
            lock = false;
            //设置一个定时器，当这个时间到了以后，Lock又恢复为true
            setTimeout(function(){
                lock=true;
            },800);




            if (delta==-1){
                console.log(delta);
                $("#p"+currentPage).animate(
                    {},
                    function(){
                        //
                        // $("#p"+currentPage).css({'color': '#ffffff'});
                        //
                        // $("#p"+(currentPage-1)).css({'color': '#ffffff'});
                        // $("#p"+(currentPage+1)).css({'color': '#000000'});

                        $("#page"+(currentPage+1)+"_title_top").addClass("page2_title_an");
                        $("#page"+(currentPage)+"_title_top").removeClass("page2_title_an");
                        $("#page"+(currentPage-1)+"_title_top").removeClass("page2_title_an");

                        $("#page"+(currentPage+1)+"_time").addClass("page_time_an");
                        $("#page"+(currentPage)+"_time").removeClass("page_time_an");
                        $("#page"+(currentPage-1)+"_time").removeClass("page_time_an");

                        $("#page"+(currentPage+1)+"_details").addClass("page_details_an");
                        $("#page"+(currentPage)+"_details").removeClass("page_details_an");
                        $("#page"+(currentPage-1)+"_details").removeClass("page_details_an");

                    });





                $("#page"+currentPage).animate(
                    {},
                    function(){

                        $("#page"+currentPage).css({'animation-play-state': 'running'});

                    });

                $("#page"+currentPage).on('webkitAnimationIteration', function() {
                    this.style.webkitAnimationPlayState = "paused";
                });







            }

            if (delta==1) {
                console.log(delta);
                $("#p"+currentPage).animate(
                    {},
                    function(){
                        // $("#p"+(currentPage+1)).css({'color': '#000000'});
                        // $("#p"+(currentPage+2)).css({'color': '#ffffff'});
                        $("#page"+(currentPage+1)+"_title_top").addClass("page2_title_an");
                        $("#page"+(currentPage+2)+"_title_top").removeClass("page2_title_an");

                        $("#page"+(currentPage+1)+"_time").addClass("page_time_an");
                        $("#page"+(currentPage+2)+"_time").removeClass("page_time_an");

                        $("#page"+(currentPage+2)+"_details").removeClass("page_details_an");
                        $("#page"+(currentPage+1)+"_details").addClass("page_details_an");

                    });





                $("#page"+currentPage).animate(
                    {},
                    function(){

                        $("#page"+(currentPage+2)).css({'animation-play-state': 'running'});

                    });

                $("#page"+(currentPage+2)).on('webkitAnimationIteration', function() {
                    this.style.webkitAnimationPlayState = "paused";
                });

            }

            //time_line

            if (currentPage>0){
                $("#nav").slideDown("slow");
            }else {
                $("#nav").slideUp("slow");
            }




        }



    });



    //时间线点击事件
    $("#nav div").click(function(event) {
        currentPage = $(this).index();
        $("#nav div").eq($(this).index()).addClass('current').siblings().removeClass('current');
        $("#container").animate(
            {
                "left": currentPage * -100 + "%"

            }
            , 1000         //时间
            , "easieEaseOutCubic"

        );

        if (currentPage>0){
            $("#nav").slideDown("slow");
        }else {
            $("#nav").slideUp("slow");
        }


        $("#page"+(currentPage+1)+"_title_top").addClass("page2_title_an");
        $("#page"+(currentPage)+"_title_top").removeClass("page2_title_an");
        $("#page"+(currentPage-1)+"_title_top").removeClass("page2_title_an");

        $("#page"+(currentPage+1)+"_time").addClass("page_time_an");
        $("#page"+(currentPage)+"_time").removeClass("page_time_an");
        $("#page"+(currentPage-1)+"_time").removeClass("page_time_an");

        $("#page"+(currentPage+1)+"_details").addClass("page_details_an");
        $("#page"+(currentPage)+"_details").removeClass("page_details_an");
        $("#page"+(currentPage-1)+"_details").removeClass("page_details_an");

        $("#page2,#page3,#page4,#page5,#page6,#page7,#page8,#page9,#page10").animate(
            {},
            function(){

                $("#page2,#page3,#page4,#page5,#page6,#page7,#page8,#page9,#page10").css({'animation-play-state': 'running'});

            }




        );

        $("#page2,#page3,#page4,#page5,#page6,#page7,#page8,#page9,#page10").on('webkitAnimationIteration', function() {
            this.style.webkitAnimationPlayState = "paused";
        });

        // $("#page"+(currentPage+2)).animate(
        //     {},
        //     function(){
        //
        //         $("#page"+(currentPage+2)).css({'animation-play-state': 'running'});
        //
        //     });
        //
        // $("#page"+(currentPage+2)).on('webkitAnimationIteration', function() {
        //     this.style.webkitAnimationPlayState = "paused";
        // });



    });




//首页MOUSE点击事件

    $("#mouse").click(function () {
        $("#container").animate(
            {
                "left": -100 + "%"

            }
            , 1000         //时间
            , "easieEaseOutCubic"

        );

        $("#page2_title_top").addClass("page2_title_an");


        $("#page2_time").addClass("page_time_an");

        $("#page2_details").addClass("page_details_an");

        var currentPage = 1;
        $("#nav div").eq(currentPage).addClass('current').siblings().removeClass('current');

        $("#nav").slideDown("slow");

    })






});