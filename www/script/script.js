function getElem(elem, cs){
    return elem.css(cs);
}

jQuery(function ($) {
    $.fn.hScroll = function (amount) {

        amount = amount || 120;

        // console.log("amount"+amount);

        $(this).bind("DOMMouseScroll mousewheel", function (event) {
            var oEvent = event.originalEvent, 
                direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta, 
                position = $(this).scrollLeft();

            // console.log( "position:"+position);

            position += direction > 0 ? -amount : amount;

            if(position>11700){
                $(".header-menu-nav").addClass("menu-footer");
            }else{
                $(".header-menu-nav").removeClass("menu-footer");
            }
            if(position>1300){

                $(".body-main-background").addClass("body-main-background-2");
            }else{
          
                $(".body-main-background").removeClass("body-main-background-2");

            }

            // direction 120
            // $(".img-quadcopter").css()
            let tes=$('.img-quadcopter').css('left')
            // console.log(tes);
            $('.img-quadcopter').css('left',(tes-(direction*.25))+'px');

            // var test=getElem('.img-quadcopter', 'width');
            // console.log(test);

            $(this).scrollLeft(position);
            event.preventDefault();
        })
    };
});


// класс создания svg для картинки 
$.fn.NewSvg = function(){
    var Img={
        h:this.find(".block-gk-img-main").height(),// получаем высоту картинки
        w:this.find(".block-gk-img-main").width(680)// получаем ширину картинк
    };
    // присваиваем к родительскому блоку картинки высоту и ширину 
    $(this).height(Img.h);
    $(this).width(Img.w);
    // $(this).width(700);

    // присваиваем к svg высоту и ширину
    this.find(".GenplanOneMain-image-svg").height(Img.h);
    this.find(".GenplanOneMain-image-svg").width(Img.w);  
    // this.find(".GenplanOneMain-image-svg").width(); 

    // var Img={
    //     h:this.find("img").height(),// получаем высоту картинки
    //     w:this.find("img").width()// получаем ширину картинк
    // };
    // // присваиваем к родительскому блоку картинки высоту и ширину 
    // $(this).height(Img.h);
    // $(this).width(800);
    // // присваиваем к svg высоту и ширину
    // this.find(".GenplanOneMain-image-svg").height(Img.h);
    // // this.find(".GenplanOneMain-image-svg").width(Img.w);  
    // this.find(".GenplanOneMain-image-svg").width(800); 
};

// получаем точки для создания svg
$.fn.CreateSvg=function(){
    var arrpoint=[];
    this.click(function(e) {
        var offset = $(this).offset();
        var X=(e.pageX - offset.left);
        var Y=(e.pageY - offset.top );
        // console.log(Y);
        console.log('X:'+X+' Y:'+Y);
        var Point=X+','+(Y);
        
        arrpoint.push(Point);
        console.log(arrpoint.join(" "));
    });
    
};


jQuery.fn.getCoord = function(){
  var elem = $(this);
  var x = elem.offset().left;
  var y = elem.offset().top;
  console.log('x: ' + x + ' y: ' + y);
  //output: x: 70 y: 40

  return {
      "x" : x,
      "y" : y
  };
};

$(document).ready(function(){

    
    
    // Инициализация Wow эфектов
    // new WOW().init();

    var width=$(window).width();

    if(width>=1366){
        $(".block-footer").width( width );
    }


    // main script


    $( ".block-see-change-apart .form-call-class-change-apart" ).on( "click", function() {
        $('.block-see-change-apart .block-pick-up-apartment').css({"display":"block"});
        $(this).css({"display":"none"});
        return false;
    });
    $( ".apart-btn-close-modal" ).on( "click", function() {
        $('.block-pick-up-apartment').css({"display":"none"});
        $('.block-see-change-apart .form-call-class-change-apart').css({"display":"block"});
        console.log('test');
        // $(this).css({"display":"none"});
        return false;
    });

    $('.board-gk-slider').slick({
        dots:true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.slider-board-1').slick({
        dots:true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.slider-board-2-mobile').slick({
        dots:true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $( "#slider-range-square" ).slider({
        range: true,
        min: 20,
        max: 500,
        values: [ 0, 300 ],
        slide: function( event, ui ) {
            $( "#amount-square-1" ).val( ui.values[ 0 ]);
            $( "#amount-square-2" ).val(ui.values[ 1 ]);
            // $(".start-num").text(ui.min);
            // console.log(ui.min);
        }
    });
    $( "#amount-square-1" ).val( $( "#slider-range-square" ).slider( "values", 0 ));
    $( "#amount-square-2" ).val( $( "#slider-range-square" ).slider( "values", 1 ));

    $( "#slider-range-floor" ).slider({
        range: true,
        min: 1,
        max: 40,
        values: [ 0, 16 ],
        slide: function( event, ui ) {
            $( "#amount-floor-1" ).val( ui.values[ 0 ]);
            $( "#amount-floor-2" ).val(ui.values[ 1 ]);
            // $(".start-num").text(ui.min);
            // console.log(ui.min);
        }
    });
    $( "#amount-floor-1" ).val( $( "#slider-range-floor" ).slider( "values", 0 ));
    $( "#amount-floor-2" ).val( $( "#slider-range-floor" ).slider( "values", 1 ));

    $( "#slider-range-cost" ).slider({
        range: true,
        min: 20,
        max: 500,
        values: [ 0, 300 ],
        slide: function( event, ui ) {
            $( "#amount-cost-1" ).val( ui.values[ 0 ]);
            $( "#amount-cost-2" ).val(ui.values[ 1 ]);
            // $(".start-num").text(ui.min);
            // console.log(ui.min);
        }
    });
    $( "#amount-cost-1" ).val( $( "#slider-range-cost" ).slider( "values", 0 ));
    $( "#amount-cost-2" ).val( $( "#slider-range-cost" ).slider( "values", 1 ));


    // for-mobile
    $( "#slider-range-square-mob" ).slider({
        range: true,
        min: 20,
        max: 500,
        values: [ 0, 300 ],
        slide: function( event, ui ) {
            $( "#amount-square-1-mob" ).val( ui.values[ 0 ]);
            $( "#amount-square-2-mob" ).val(ui.values[ 1 ]);
            // $(".start-num").text(ui.min);
            // console.log(ui.min);
        }
    });
    $( "#amount-square-1-mob" ).val( $( "#slider-range-square-mob" ).slider( "values", 0 ));
    $( "#amount-square-2-mob" ).val( $( "#slider-range-square-mob" ).slider( "values", 1 ));

    $( "#slider-range-floor-mob" ).slider({
        range: true,
        min: 1,
        max: 40,
        values: [ 0, 16 ],
        slide: function( event, ui ) {
            $( "#amount-floor-1-mob" ).val( ui.values[ 0 ]);
            $( "#amount-floor-2-mob" ).val(ui.values[ 1 ]);
            // $(".start-num").text(ui.min);
            // console.log(ui.min);
        }
    });
    $( "#amount-floor-1-mob" ).val( $( "#slider-range-floor-mob" ).slider( "values", 0 ));
    $( "#amount-floor-2-mob" ).val( $( "#slider-range-floor-mob" ).slider( "values", 1 ));

    $( "#slider-range-cost-mob" ).slider({
        range: true,
        min: 20,
        max: 500,
        values: [ 0, 300 ],
        slide: function( event, ui ) {
            $( "#amount-cost-1-mob" ).val( ui.values[ 0 ]);
            $( "#amount-cost-2-mob" ).val(ui.values[ 1 ]);
            // $(".start-num").text(ui.min);
            // console.log(ui.min);
        }
    });
    $( "#amount-cost-1-mob" ).val( $( "#slider-range-cost-mob" ).slider( "values", 0 ));
    $( "#amount-cost-2-mob" ).val( $( "#slider-range-cost-mob" ).slider( "values", 1 ));

    //скролл 
    
    $('#body-main').hScroll(120); // You can pass (optionally) scrolling amount

    $( ".form-menu-class" ).on( "click", function() {
        $('.block-modal-menu').show(500);
    });

    $( ".payment-methods-main .payment-methods-main-block a" ).on( "click", function() {
        if($(this).hasClass('act-pluse')){
            $(this).removeClass('act-pluse');
            $(this).addClass('act-mines');
            $(this).next().fadeIn();

        }else{
            $(this).removeClass('act-mines');
            $(this).addClass('act-pluse');
            $(this).next().fadeOut();
        }
        return false;
    });

    $( ".block-model-scheme .open-modal-schema" ).on( "click", function() {

        $('.block-model-scheme-modal').addClass('block-model-scheme-modal-act');
        $(".open-modal-schema").css({"display":"none"});
        $('.block-model-scheme-modal').next().show(500);

    });
    $( ".close-modal-schema" ).on( "click", function() {
        $('.block-model-scheme-modal').removeClass('block-model-scheme-modal-act');
        $(".open-modal-schema").css({"display":"block"});
        $('.block-model-scheme-modal').next().hide(500);
        // return false;
    });

    $(".block-model-scheme-list .open-modal-schema").on('click', function () {
        if($(".block-model-scheme-list .block-model-scheme-modal-3").hasClass("block-model-scheme-modal-3-none")){
            $(".block-model-scheme-list .open-modal-schema").css({"display":"none"});
            $(".block-model-scheme-list .block-model-scheme-modal-3").removeClass("block-model-scheme-modal-3-none");
            return false;
        }
        return false;
    });

    $(".block-model-scheme-list .close-modal-schema-3").on("click",function(){
        console.log("test-1");
        if($(".block-model-scheme-list .block-model-scheme-modal-3").hasClass("block-model-scheme-modal-3-none")){
            return false;
        }else{
            $(".block-model-scheme-list .block-model-scheme-modal-3").addClass("block-model-scheme-modal-3-none");
            $(".block-model-scheme-list .open-modal-schema").css({"display":"flex"});
            return false;
        }
        
    });

    // $( ".block-question-sometime a" ).on( "click", function() {
    //     // console.log("test");
    //     if($(this).hasClass('show-block-quest-act')){
    //         $(this).removeClass('show-block-quest-act');
    //         $(this).next().hide(500);
            

    //     }else{
    //         $(this).addClass('show-block-quest-act');
    //         $(this).next().show(500);
    //     }
    //     return false;
    // });
    
    $( "a.block-question-sometime" ).on( "click", function() {
        // console.log("test");
        if($(this).hasClass('show-block-quest-act')){
            $(this).removeClass('show-block-quest-act');
            $(this).find(".block-question-sometime-desc .close-block-question-sometime").removeClass("show-block-quest-act");
            $(this).find(".show-block-quest").fadeOut(500);
            

        }else{
            $(this).addClass('show-block-quest-act');
            $(this).find(".block-question-sometime-desc .close-block-question-sometime").addClass("show-block-quest-act");
            $(this).find(".show-block-quest").fadeIn(1000);
            // $(this).next().show(500);
        }
        return false;
    });

    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false;
    });


    // $('.img-gk-block').hover(function (e) {
    //     e.preventDefault();
    //     var d = $(this).data('num');  
    //     console.log(d);   
    //     $('.block-modal-gk-'+d).show();
    // }); 
    // $('.img-gk-block').mouseleave(function () {
    //     // $(this).closest(blockOut).fadeIn(500);
    // $('.block-modal-gk').hide();
    // });


    // Модальное окно для page-gk
    // $('.block-container-for-pluse').click(function() { 
    //     console.log("test");
    //     $('.block-container-for-pluse-overlay').fadeIn();
    //     // $('.block-container-for-pluse-overlay').addClass('disabled');
    //     return false;
    // });
    $('.block-container-for-pluse').on('click', function() {
        $('.modal-wrapper').toggleClass('open');
       $('.page-wrapper').toggleClass('blur-it');
       console.log("test");
        return false;
     });
     $(".btn-close-modal-form-page-gk").on('click', function() {
        $('.modal-wrapper').removeClass('open');
        $('.page-wrapper').removeClass('blur-it');
        return false;
     });
    // закрыть на крестик
    // $('.block-container-for-pluse').click(function() { 
    //     $('.block-container-for-pluse-overlay').fadeOut();
        
    // });
    // $(document).mouseup(function (e) { 
    //     var popup = $('.block-container-for-pluse');
    //     if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    //         $('.block-container-for-pluse-overlay').fadeOut();
            
    //     }
    // });

    // Модальное окно-------------------------//
    $('button.btn.form-call-class').click(function() {
        var d = $(this).data('title');     
        $(".modal-call-form-title h2").html(d);
    });

    // открыть по кнопке
    $('.js-button-campaign').click(function() { 
        // console.log("test");
        $('.js-overlay-campaign').fadeIn();
        $('.js-overlay-campaign').addClass('disabled');
    });
    $('.js-button-campaign.form-menu-class').click(function() { 
        // console.log("test");
        $('.js-overlay-campaign').fadeIn();
        $('.js-overlay-campaign').addClass('disabled');
    });

    // закрыть на крестик
    $('.js-close-campaign').click(function() { 
        $('.js-overlay-campaign').fadeOut();
        
    });

    // закрыть по клику вне окна
    $(document).mouseup(function (e) { 
        var popup = $('.js-popup-campaign');
        if (e.target!=popup[0]&&popup.has(e.target).length === 0){
            $('.js-overlay-campaign').fadeOut();
            
        }
    });


    // for taxi modal form
    $('.js-button-campaign-taxi').click(function() { 
        // console.log("test");
        $('.js-overlay-campaign-taxi').fadeIn();
        $('.js-overlay-campaign-taxi').addClass('disabled');
    });

    // закрыть на крестик
    $('.js-close-campaign').click(function() { 
        $('.js-overlay-campaign-taxi').fadeOut();
        
    });

    // закрыть по клику вне окна
    $(document).mouseup(function (e) { 
        var popup = $('.js-popup-campaign');
        if (e.target!=popup[0]&&popup.has(e.target).length === 0){
            $('.js-overlay-campaign-taxi').fadeOut();
            
        }
    });

    // открыть по таймеру 
    // $(window).on('load', function () { 
    //     setTimeout(function(){
    //         if($('.js-overlay-campaign').hasClass('disabled')) {
    //             return false;
    //         } else {
                
    //             $(".js-overlay-campaign").fadeIn();
    //         }
    //     }, 5000);
    // });

    // menu
    $( ".block-menu-for-modal .modal-menu-false" ).on( "click", function() {
        $('.block-modal-menu').show(500);
        return false;
    });
    $( ".block-modal-menu .block-menu-for-modal .modal-menu-false" ).on( "click", function() {
        $('.block-modal-menu').hide(500);
        return false;
    });
    // emd-menu
  // End-------------------------------------//

    // $('.block-gk-img-1').NewSvg(); 
    // $('.block-gk-img-2').NewSvg(); 
    // $('.block-gk-img-3').NewSvg(); 
    // $('.block-gk-img-4').NewSvg(); 
    // $('.block-gk-img-5').NewSvg(); 
    // $('.block-gk-img-6').NewSvg(); 


    // $('.main-block-page-gk').NewSvg(); 
    $('.main-block-page-gk').CreateSvg();


   
    // checkbox
    // выбор только одного чекбокса
    // var inputs=document.getElementsByClassName("checked-change").getElementsByTagName("input");
    // for(var i=0;i<inputs.length;i++)
    //     {
    //     if(inputs[i].type=="checkbox")
    //     {
    //     inputs[i].onchange=function()
    //         {
    //         inputs=document.getElementsByClassName("checked-change").getElementsByTagName("input");
    //         for(var i=0;i<inputs.length;i++)
    //         {
    //         if(inputs[i].type=="checkbox")
    //             {
    //             inputs[i].checked=false;
    //             }
    //             this.checked=true;
    //         }
    //         }
    //     }
    // }
    // checkbox end

    $("#next-change").click(function(){
        if($(".change-buy-apartament-block-2").css('display')=="none"){
            $(".change-buy-apartament-block-1").hide(500);
            $(".change-buy-apartament-block-2").show(500);
        }
        return false;
    });

    // Модальное окно для  main for gk
    $( ".GenplanOneMain-image" ).hover( function() {
        $(this).find(".block-open-gk-modal").addClass("block-open-gk-modal-active");
    });
    $(".GenplanOneMain-image" ).mouseleave(function () {
            // $(this).closest(blockOut).fadeIn(500);
        $(this).find('.block-open-gk-modal').removeClass("block-open-gk-modal-active");
    });


    // Модальное окно для  page
    // function inWindow(s){
    //     var scrollTop = $(window).scrollTop();
    //     var windowHeight = $(window).height();
    //     var currentEls = $(s);
    //     var result = [];
    //     currentEls.each(function(){
    //         var el = $(this);
    //         var offset = el.offset();
    //         if(scrollTop <= offset.top && (el.height() + offset.top) < (scrollTop + windowHeight))
    //         result.push(this);
    //     });
    //     return $(result);
    // }
    // var boxesInWindow = inWindow(".block-modal-gk");
    
    // // сделаем фон этих элементов красным
    // console.log(boxesInWindow);
    // var f = $('.block-modal-gk');
    // $(window).scroll(function() {
    //     var w = $(this);
    //     if (w.scrollTop() > f.offset().top ) {
    //         // footer в окне
    //         // console.log("false");

    //         $(".block-modal-gk").addClass("block-modal-gk-bottom");
    //         // $(".block-modal-gk").removeClass("block-modal-gk-top");
    //     }else{
    //         // $(".block-modal-gk").addClass("block-modal-gk-top");
    //         $(".block-modal-gk").removeClass("block-modal-gk-bottom");
    //     }
         
    //     // } else {

    //     //     $(".block-modal-gk").addClass("block-modal-gk-top");
    //     //     $(".block-modal-gk").removeClass("block-modal-gk-bottom");

    //     //     // console.log("true");
            
    //     // }
    // });
    if($(window).width()>1366){
        $( ".main-block-page-gk .href-figura-1" ).hover( function() {
            // $(this).find(".href-figura-1-rel svg").addClass("svg-active");
            $(this).find(".href-figura-1-rel svg  polygon").fadeIn(200);
            $(this).find(".block-modal-gk").fadeIn(200);
            return false;
        });
        $(".main-block-page-gk .href-figura-1" ).mouseleave(function () {
                // $(this).closest(blockOut).fadeIn(500);
                $(this).find(".href-figura-1-rel svg  polygon").fadeOut(200);
                $(this).find(".block-modal-gk").fadeOut(200);
                return false;
        });
    
        $( ".main-block-page-gk .href-figura-2" ).hover( function() {
            // $(this).find(".href-figura-1-rel svg").addClass("svg-active");
            $(this).find(".href-figura-2-rel svg  polygon").fadeIn(200);
            $(this).find(".block-modal-gk").fadeIn(200);
            return false;
        });
        $(".main-block-page-gk .href-figura-2" ).mouseleave(function () {
                // $(this).closest(blockOut).fadeIn(500);
                $(this).find(".href-figura-2-rel svg  polygon").fadeOut(200);
                $(this).find(".block-modal-gk").fadeOut(200);
                return false;
        });
    
        $( ".main-block-page-gk .href-figura-3" ).hover( function() {
            // $(this).find(".href-figura-1-rel svg").addClass("svg-active");
            $(this).find(".href-figura-3-rel svg  polygon").fadeIn(200);
            $(this).find(".block-modal-gk").fadeIn(200);
            return false;
        });
        $(".main-block-page-gk .href-figura-3" ).mouseleave(function () {
                // $(this).closest(blockOut).fadeIn(500);
                $(this).find(".href-figura-3-rel svg  polygon").fadeOut(200);
                $(this).find(".block-modal-gk").fadeOut(200);
                return false;
        });
    
        $( ".main-block-page-gk .href-figura-4" ).hover( function() {
            // $(this).find(".href-figura-1-rel svg").addClass("svg-active");
            $(this).find(".href-figura-4-rel svg  polygon").fadeIn(200);
            $(this).find(".block-modal-gk").fadeIn(200);
            return false;
        });
        $(".main-block-page-gk .href-figura-4" ).mouseleave(function () {
                // $(this).closest(blockOut).fadeIn(500);
                $(this).find(".href-figura-4-rel svg  polygon").fadeOut(200);
                $(this).find(".block-modal-gk").fadeOut(200);
                return false;
        });

    }else{
        $( ".main-block-page-gk .href-figura-1" ).click( function() {
            $(this).find(".block-modal-gk").fadeIn(200);
            return false;
        });
        $( ".btn-close-block-modal-gk" ).click( function() {
            $(this).parent().fadeOut(200);
            return false;
        });
        $( ".main-block-page-gk .href-figura-2" ).click( function() {
            $(this).find(".block-modal-gk").fadeIn(200);
            return false;
        });
        $( ".main-block-page-gk .href-figura-3" ).click( function() {
            $(this).find(".block-modal-gk").fadeIn(200);
            return false;
        });
        $( ".main-block-page-gk .href-figura-4" ).click( function() {
            $(this).find(".block-modal-gk").fadeIn(200);
            return false;
        });
    }

    
    $(".btn-block-for-mob-768-sort p").click(function(){
        if($(".block-for-mob-320-sort").hasClass("block-for-mob-320-sort-active")){
            console.log("TEst");
            $(".block-for-mob-320-sort").removeClass("block-for-mob-320-sort-active").fadeOut(500);
            return false;
        }else{
            $(".block-for-mob-320-sort").addClass("block-for-mob-320-sort-active").fadeIn(500);
            return false;
        }
    });

    
    $(".btn-block-for-mob-320-sort").click(function(){
        if($(".block-for-mob-320-sort").hasClass("block-for-mob-320-sort-active")){
            $(".block-for-mob-320-sort").removeClass("block-for-mob-320-sort-active").fadeOut(500);
            $(".btn-block-for-mob-320-sort").fadeIn(50);
            return false;
        }else{
            $(".block-for-mob-320-sort").addClass("block-for-mob-320-sort-active").fadeIn(500);
            $(".btn-block-for-mob-320-sort").fadeOut(50);
            return false;
        }
    });

    $(".block-for-mob-320-sort-btn-close").click(function(){
        $(".block-for-mob-320-sort").removeClass("block-for-mob-320-sort-active").fadeOut(500);
            $(".btn-block-for-mob-320-sort").fadeIn(50);
         
    });

    // Маска для телефона------------------------//
    $("#inputPhoneForm").mask("+7(999) 999-99-99");
    $("#inputPhoneFormModal").mask("+7(999) 999-99-99");
    $("#inputPhoneFormTaxi").mask("+7(999) 999-99-99");
    // End-------------------------------------//

    // Удалить текст из botton //
        $(".board-gk-slider .slick-dots li button").html("");
    // End-------------------------------------//



    $('.block-gk-img-1').NewSvg(); 
    $('.block-gk-img-2').NewSvg(); 
    $('.block-gk-img-3').NewSvg(); 
    $('.block-gk-img-4').NewSvg(); 
    $('.block-gk-img-5').NewSvg(); 
    $('.block-gk-img-6').NewSvg(); 


    // $(".block-map ymaps").width(300);
})