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
        var delta = (e.deltaY || e.detail || e.wheelDelta)/5;
        
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


      // var wow = new WOW(
      //   {
      //     boxClass:     'wow',      // animated element css class (default is wow)
      //     animateClass: 'animated', // animation css class (default is animated)
      //     offset:       20,          // distance to the element when triggering the animation (default is 0)
      //     mobile:       true,       // trigger animations on mobile devices (default is true)
      //     live:         true,       // act on asynchronously loaded content (default is true)
      //     callback:     function(box) {
      //       // the callback is fired every time an animation is started
      //       // the argument that is passed in is the DOM node being animated
      //     },
      //     scrollContainer: null,    // optional scroll container selector, otherwise use window,
      //     resetAnimation: true,     // reset animation on end (default is true)
      //   }
      // );
      // wow.init();
      new WOW().init();

  $(document).ready(function() { /*важная функция, которая запускает выполнение js-кода после полной загрузки веб-страницы */
    $(".album").each(function () { /*указываю, что обрабатываться будет каждый слайд*/
      var param = $(this);
    /* append добавляет определенные параметры или контент к указанным областям. В данном случае с ее помощью создаются элементы управления*/
      $(param ).append("<div class='nav'></div>"); 
      $(param ).find("li").each(function () {
    /* каждый блок навигации привязываю к индексу соответствующего по порядку изображению. Нахождение индекса происходит через $(this).index())*/
      $(param ).find(".nav").append("<span rel='"+$(this).index()+"'></span>"); 
      $(this).addClass("album"+$(this).index());
      });
    /* определяю, что активным навигационным элементом является первый по счету*/
      $(param ).find("span").first().addClass("on"); 
    });
    });
    function sliderJS (param, slide) { 
    var b_ul = $( slide).find("ul"); 
    var b_li = $( slide).find("li.album"+param); 
    var step = $(b_li).width(); 
    //указываю, с какой скоростью (400) и в какую сторону перелистывать слайды
    $(b_ul).animate({marginLeft: "-"+step*param}, 400); 
    }
    // Создаю функцию для смены активного слайда
    $(document).on("click", ".album .nav span", function() { 
    /* closest получает список ближайших элементов к текущему и последовательно их «анализирует». Таким образом, нахожу блок в панели, на которых хочет переключиться пользователь */
    var s = $(this).closest(".album"); 
    // отменяю активность последнего выбранного элемента
    $(s).find("span").removeClass("on"); 
    // задаю текущему состояние активного
    $(this).addClass("on"); 
    //получаю его индекс
    var param = $(this).attr("rel"); 
    //использую вспомогательную функцию для перелистывания картинок
    sliderJS(param, s); 
    return false;
    });
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




})