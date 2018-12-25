$('*').ready(function(){
  // $('.preloader').remove('fadeOut');
  // setTimeout(function(){
  //   $('.preloader').addClass('fadeOut');
  //   setTimeout(function(){
  //     //Задать размер footer и header
      
  //     // $('.preloader').remove();
      
  //   },10000)
   
  // },10000);
  $('.preloader').remove();
  
// TODO: scroll----------------------------//

var elem = document.getElementById('scrollBody');
if (elem.addEventListener) {
    if ('onwheel' in document) {
      // IE9+, FF17+, Ch31+
      elem.addEventListener("wheel", onWheel);
    } else if ('onmousewheel' in document) {
      // устаревший вариант события
      elem.addEventListener("mousewheel", onWheel);
    } else {
      // Firefox < 17
      elem.addEventListener("MozMousePixelScroll", onWheel);
    }
} else { // IE8-
  elem.attachEvent("onmousewheel", onWheel);
}


// Получаем нужный элемент
var element = document.querySelector('.footer-block');

var Visible = function (target) {
  // Позиция элемента
  var targetPosition = window.pageXOffset + target.getBoundingClientRect().left;
  // Получаем позицию окна
  var windowPosition = window.pageXOffset;
  
  if((targetPosition)>=windowPosition){
    return true;
  }else{
    return false;
  }
};

function onWheel(e) {
  e = e || window.event;
  var visible=Visible (element);

  // wheelDelta не дает возможность узнать количество пикселей
  // var delta = (e.deltaY || e.detail || e.wheelDelta)/5;
  var delta = (-1)*(e.deltaY || e.detail || e.wheelDelta);
  
  var padding = parseInt($("#scrollBody").css("margin-left"));
  if(padding >= 0){
    $("#scrollBody").css({"margin-left": 0 +'px'});
  }
  if(delta>0){
    if(padding >= 0 && delta < 0){
        if(delta>0){
          $("#scrollBody").css({"margin-left": 0 +'px'});
        }else{
          $("#scrollBody").css({"margin-left": (delta+padding)+'px'});
          
        } 
    }else if(padding < 0 && padding != 0){
        $("#scrollBody").css({"margin-left": (delta+padding)+'px'});
    }
  }else{
    if(visible){
      $("#scrollBody").css({"margin-left": (delta+padding)+'px'});
    }else{
      if(delta>0){
        $("#scrollBody").css({"margin-left": (delta+padding)+'px'});
      }
    }
  }


// Изменения Header при попадании на footer
  if(padding <= -11500){
    $(".menu-navbar .nav-coll-firft li ").addClass("li-activ"); 
    $('.form-call-class').addClass('form-call-class-act');
    $('.phone-class').addClass('phone-class-act');
    $(".navbar-header a img").attr("src","./img/logo-red.png");
    // $(".menu-navbar .nav-coll-firft li a:hover").css("li-activ"); 
  }else{
    $(".menu-navbar .nav-coll-firft li ").removeClass("li-activ"); 
    $('.form-call-class').removeClass('form-call-class-act');
    $('.phone-class').removeClass('phone-class-act');
    $(".navbar-header a img").attr("src","./img/logo_baza_white.png");
  }


// Анимация элементов
  var delAnim=delta;
  console.log(delAnim);
  if(delta>0 || delta<0){
    // $('.block-btn-click .quadcopter').css({"transform": 'translateY('+delAnim / 10+'px)'});
    // $('.block-btn-click .quadcopter').css({"right": (180+delAnim)+"px","bottom": (600+delAnim)+"px"});
    $('.block-btn-click .quadcopter').css({"right": (180-delAnim)+"px"});
    $('.img-cloud1').css({"left": (550-delAnim)+"px"});
    // $('.block-btn-click .quadcopter').css({"right": (180+delAnim)+"px","bottom": (600+delAnim)+"px"});
    // $('.block-btn-click .quadcopter').css({"right": (180+delAnim)+"px","bottom": (600+delAnim)+"px"});
    // $('.block-btn-click .quadcopter').css({"right": (180+delAnim)+"px","bottom": (600+delAnim)+"px"});
  }
  
}

// End-------------------------------------//


// Маска и валидация для формы----------------------//
$("#inputPhoneForm").mask("+7(999) 999-99-99");
$('#inputEmailForm').blur(function() {
  // Здесь будем писать код обработки события
  if($(this).val() != '') {
    var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    if(pattern.test($(this).val())){
      // $(this).css({'border' : '1px solid #569b44'});
      // $('#valid').text('Верно');
    } else {
      $(this).css({'border-bottom' : '1px solid #ff0000'});
      // $('#valid').text('Не верно');
    }
  } else {
    // $(this).css({'border' : '1px solid #ff0000'});
    // $('#valid').text('Поле email не должно быть пустым');
  }
});
// End-------------------------------------//

// //Задать размер footer и header
var w=$(window).width();
$('.footer-block-content').css({'width' : w+'px'});
$('header').css({'width' : w+'px'});


// Инициализация Wow эфектов
new WOW().init();
// var wow = new WOW(
//   {
//     boxClass:     'wow',      // animated element css class (default is wow)
//     animateClass: 'animated', // animation css class (default is animated)
//     offset:       100,          // distance to the element when triggering the animation (default is 0)
//     mobile:       true,       // trigger animations on mobile devices (default is true)
//     live:         true,       // act on asynchronously loaded content (default is true)
//     callback:     function(box) {
//       // the callback is fired every time an animation is started
//       // the argument that is passed in is the DOM node being animated
//     },
//     scrollContainer: null // optional scroll container selector, otherwise use window
//   }
// );
// wow.init();
// End-------------------------------------//

// Модальное окно-------------------------//
$('.btn').click(function() {
  var d = $(this).data('title');     
  $(".modal-call-form h2").html(d);
});
// End-------------------------------------//

$('.block-open-gk').hover(function (e) {
  e.preventDefault();
  var d = $(this).data('num');  
  console.log(d);   
  $('.block-modal-gk-'+d).fadeIn(500);
}); 
$('.block-modal-gk').mouseleave(function () {
      // $(this).closest(blockOut).fadeIn(500);
  $('.block-modal-gk').fadeOut(500);
});


// function FadeBlock (blockIn, blockOut){
//   $(blockIn).hover(function (e) {
//     e.preventDefault();
//     var parent= $(blockIn).parent();
//     console.log(parent);
//     // $(blockIn).parent().closest(blockOut).fadeIn(500);
//     var test=$(parent).closest(blockOut);
//     console.log(test);  
//     $(blockOut).fadeIn(500);
//   }); 
//   $(blockOut).mouseleave(function () {
//     // $(this).closest(blockOut).fadeIn(500);
//     $(blockOut).fadeOut(500);
//   }); 
// }
// FadeBlock(".block-open-gk", ".block-modal-gk");
// FadeBlock(".block-open-gk-2", ".block-modal-gk-2");



  // Слайдер----------------------------------------//
  $('.slider').bxSlider({
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
    pager: true,
    slideWidth: 840,
    adaptiveHeight:true,
    responsive:true,
    touchEnabled:true,
    hideControlOnEnd:false
  });
  // $('.slider').tilesSlider({
  //   x              : 1, // # of tiles in x axis, 20 max
  //   y              : 1, // # of tiles in y axis, 20 max
  //   effect         : 'updown',
  //   fade           : false, // fade images in addition to the tiles effect
  //   random         : false, // animate tiles in random order
  //   reverse        : false, // start animation from opposite direction
  //   backReverse    : false, // reverse the animation when going back in the slideshow (useful for some effects)
  //   rewind         : false, // reverse animation at a certain percentage in time
  //   auto           : false, // Start the slideshow on load
  //   loop           : false, // Start slideshow again when it finishes
  //   slideSpeed     : 3500, // time between slides
  //   tileSpeed      : 800, // time to clear all tiles
  //   cssSpeed       : 300, // css3 transition speed [100,200,300,400,500,600,700,800,900,1000],
  //   nav            : true, // Add navigation
  //   navWrap        : null, // Add the navigation to an existing element
  //   bullets        : true, // Show bullets, if false the show pagination with numbers
  //   thumbs         : false, // Show thumbnails when hovering nav
  //   thumbSize      : 100, // Thumbnail size (percentage of the original image)
  //   timer          : true // show or hide the timer bar
  // });
  // End-------------------------------------//

});