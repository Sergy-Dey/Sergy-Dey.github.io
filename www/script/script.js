function getElem(elem, cs){
    return elem.css(cs);
}
// function getStyles( elem ) {
// 	return window.getComputedStyle( elem, null );
// }
// класс для скрола по горизонтали
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

            // direction 120
            // $(".img-quadcopter").css()
            let tes=$('.img-quadcopter').css('left')
            console.log(tes);
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
        h:this.find("img").height(),// получаем высоту картинки
        w:this.find("img").width()// получаем ширину картинк
    };
    // присваиваем к родительскому блоку картинки высоту и ширину 
    $(this).height(Img.h);
    $(this).width(Img.w);
    // присваиваем к svg высоту и ширину
    this.find(".GenplanOneMain-image-svg").height(Img.h);
    this.find(".GenplanOneMain-image-svg").width(Img.w);  
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
// $(window).bind('scroll',function(e){
//     parallaxScroll();
//     console.log("test");
// });
// function parallaxScroll(){
// var scrolled = $(window).scrollTop();
// console.log("test");
// $('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
// $('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
// $('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');
// }

$(document).ready(function(){

    

    // Инициализация Wow эфектов
    new WOW().init();

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
    
    $('#body-main').hScroll(60); // You can pass (optionally) scrolling amount

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

    $( ".block-model-scheme a" ).on( "click", function() {

        $('.block-model-scheme-modal').addClass('block-model-scheme-modal-act');
        $('.block-model-scheme-modal').next().show(500);
        return false;
    });
    $( ".close-modal-schema" ).on( "click", function() {
        $('.block-model-scheme-modal').removeClass('block-model-scheme-modal-act');
        $('.block-model-scheme-modal').next().hide(500);
        return false;
    });

    $( ".block-question-sometime a" ).on( "click", function() {
        // console.log("test");
        if($(this).hasClass('show-block-quest-act')){
            $(this).removeClass('show-block-quest-act');
            $(this).next().hide(500);
            

        }else{
            $(this).addClass('show-block-quest-act');
            $(this).next().show(500);
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
        console.log("test");
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

    $('.block-gk-img-1').NewSvg(); 
    $('.block-gk-img-2').NewSvg(); 
    $('.block-gk-img-3').NewSvg(); 
    $('.block-gk-img-4').NewSvg(); 
    $('.block-gk-img-5').NewSvg(); 
    $('.block-gk-img-6').NewSvg(); 

    $('.block-gk-img-6').CreateSvg();


   
    // checkbox
    // выбор только одного чекбокса
    var inputs=document.getElementsByTagName("input");
    for(var i=0;i<inputs.length;i++)
        {
        if(inputs[i].type=="checkbox")
        {
        inputs[i].onchange=function()
            {
            inputs=document.getElementsByTagName("input");
            for(var i=0;i<inputs.length;i++)
            {
            if(inputs[i].type=="checkbox")
                {
                inputs[i].checked=false;
                }
                this.checked=true;
            }
            }
        }
    }
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

    // Маска для телефона------------------------//
    $("#inputPhoneForm").mask("+7(999) 999-99-99");
    // End-------------------------------------//

    // Удалить текст из botton //
        $(".board-gk-slider .slick-dots li button").html("");
    // End-------------------------------------//
})