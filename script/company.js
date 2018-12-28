$(document).ready(function(){
    
    $(".block-menu-page.animate-menu").fadeIn().animate({"padding-top":"60px"}, 1500,()=>{
        $(".header-block .cloud2-2").animate({left: "-30%"}, 1500);
        $(".header-block .quadcopter2").animate({left: "25%"}, 1300);
        $(".header-block .air-snake-posit-2").animate({width: "100px"}, 1300);
        $(".header-block .img-gk-briz-sun-2").fadeIn().animate({right: "300px",top:"150px"}, 1300);
        $(".header-block .cloud2-3").animate({right: "0%"}, 1300);
        $(".header-block .header-desc-title").animate({left: "14%"}, 1500,function(){
            $(".header-block .header-desc-title").css({'left': 'none'});
        });
    });


    var target = $('.header-title');
    var targetPos = target.offset().top;
    var winHeight = $(window).height();
    var scrollToElem = targetPos - winHeight;
    $(window).scroll(function(){
    var winScrollTop = $(this).scrollTop();
    if(winScrollTop > scrollToElem){
        // console.log('test');
        $(".header-title").fadeIn(1000).animate({transform: "rotate(-5deg)"}, 1300);
        $(".header-title-2").fadeIn(1000).animate({transform: "rotate(-5deg)"}, 1300);
    }
    });

    // $(".center").slick({
    //     dots: true,
    //     infinite: true,
    //     centerMode: true,
    //     slidesToShow: 5,
    //     slidesToScroll: 3
    //   });
    $('.slider-nav').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });

    $('.slider-ourlife.slider.slider-nav.slick-initialized.slick-slider').css({"width":"100%"});
    
    $('.slick-slide.slick-current.slick-active').css({"width":"425px"});
    $('.slider-nav .slick-prev.slick-arrow').remove();
    $('.slider-nav .slick-next.slick-arrow').remove();
    

    $('.slider-partners').slick({
        // dots:true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });

    $('.single-item').slick();

});