$(document).ready(function(){
  // setTimeout(function(){
  //   $('.preloader').addClass('fadeOut');
  //   setTimeout(function(){
  //     $('.preloader').remove();
  //   },1000)
  // },1000);
  
$("#inputPhoneForm").mask("+7(999) 999-99-99");

$('.btn').click(function() {
  var d = $(this).data('title');   
  console.log(d);   
  $(".modal-call-form h2").html(d);
});



$('#block-open-gk').on('click',function(e){
  e.preventDefault();
  // console.log('test');
  if($('.block-modal-gk').hasClass('active')){
    $('.block-modal-gk').fadeOut(500);
    $('.block-modal-gk').removeClass('active');
  }else{
    $('.block-modal-gk').fadeIn(500);
    $('.block-modal-gk').addClass('active');
  }
})

$('#block-open-gk-briz').on('click',function(e){
  e.preventDefault();
  // console.log('test');
  if($('.block-modal-gk').hasClass('active')){
    $('.block-modal-gk').fadeOut(500);
    $('.block-modal-gk').removeClass('active');
  }else{
    $('.block-modal-gk').fadeIn(500);
    $('.block-modal-gk').addClass('active');
  }
})
$('#block-open-gk-sunber').on('click',function(e){
  e.preventDefault();
  // console.log('test');
  if($('.block-modal-gk').hasClass('active')){
    $('.block-modal-gk').fadeOut(500);
    $('.block-modal-gk').removeClass('active');
  }else{
    $('.block-modal-gk').fadeIn(500);
    $('.block-modal-gk').addClass('active');
  }
})
$('#block-open-gk-stone').on('click',function(e){
  e.preventDefault();
  // console.log('test');
  if($('.block-modal-gk').hasClass('active')){
    $('.block-modal-gk').fadeOut(500);
    $('.block-modal-gk').removeClass('active');
  }else{
    $('.block-modal-gk').fadeIn(500);
    $('.block-modal-gk').addClass('active');
  }
})
$('#block-open-gk-triumf').on('click',function(e){
  e.preventDefault();
  // console.log('test');
  if($('.block-modal-gk').hasClass('active')){
    $('.block-modal-gk').fadeOut(500);
    $('.block-modal-gk').removeClass('active');
  }else{
    $('.block-modal-gk').fadeIn(500);
    $('.block-modal-gk').addClass('active');
  }
})
// $( ".block-modal-gk table tbody tr" ).hover(function() {
//   let domTr=$(this).closest('.block-modal-gk table tbody tr');

//   let a=domTr.find('.block-modal-gk table tbody tr td a').val(),

//   $( a ).css( "color","red" );
//   // $( this ).fadeIn( 500 );
// });


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
      
      function onWheel(e) {
        e = e || window.event;
   
        // wheelDelta не дает возможность узнать количество пикселей
        // var delta = (e.deltaY || e.detail || e.wheelDelta)/5;
        var delta = (e.deltaY || e.detail || e.wheelDelta);
          delta=(-1)*delta
        
        var padding = parseInt($("#scrollBody").css("margin-left"));
        // if(padding=)

        if(padding== 0 && delta < 0){
            $("#scrollBody").css({"margin-left": (delta+padding)+'px'});
        }else if(padding < 0 && padding != 0){
            $("#scrollBody").css({"margin-left": (delta+padding)+'px'});
        }

        // info.innerHTML = +info.innerHTML + delta;
      
        // e.preventDefault ? e.preventDefault() : (e.returnValue = false);
      }

      new WOW().init();

    $('.slider').tilesSlider({
        x              : 1, // # of tiles in x axis, 20 max
        y              : 1, // # of tiles in y axis, 20 max
        effect         : 'updown',
        fade           : false, // fade images in addition to the tiles effect
        random         : false, // animate tiles in random order
        reverse        : false, // start animation from opposite direction
        backReverse    : false, // reverse the animation when going back in the slideshow (useful for some effects)
        rewind         : false, // reverse animation at a certain percentage in time
        auto           : false, // Start the slideshow on load
        loop           : false, // Start slideshow again when it finishes
        slideSpeed     : 3500, // time between slides
        tileSpeed      : 800, // time to clear all tiles
        cssSpeed       : 300, // css3 transition speed [100,200,300,400,500,600,700,800,900,1000],
        nav            : true, // Add navigation
        navWrap        : null, // Add the navigation to an existing element
        bullets        : true, // Show bullets, if false the show pagination with numbers
        thumbs         : false, // Show thumbnails when hovering nav
        thumbSize      : 100, // Thumbnail size (percentage of the original image)
        timer          : true // show or hide the timer bar

  });


  $('.slider-briz').tilesSlider({
        x              : 1, // # of tiles in x axis, 20 max
        y              : 1, // # of tiles in y axis, 20 max
        effect         : 'updown',
        fade           : false, // fade images in addition to the tiles effect
        random         : false, // animate tiles in random order
        reverse        : false, // start animation from opposite direction
        backReverse    : false, // reverse the animation when going back in the slideshow (useful for some effects)
        rewind         : false, // reverse animation at a certain percentage in time
        auto           : false, // Start the slideshow on load
        loop           : false, // Start slideshow again when it finishes
        slideSpeed     : 3500, // time between slides
        tileSpeed      : 800, // time to clear all tiles
        cssSpeed       : 300, // css3 transition speed [100,200,300,400,500,600,700,800,900,1000],
        nav            : true, // Add navigation
        navWrap        : null, // Add the navigation to an existing element
        bullets        : true, // Show bullets, if false the show pagination with numbers
        thumbs         : false, // Show thumbnails when hovering nav
        thumbSize      : 100, // Thumbnail size (percentage of the original image)
        timer          : true // show or hide the timer bar

  });




})