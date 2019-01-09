$(document).ready(function(){
    $( ".form-menu-class" ).on( "click", function() {
        if($('.href-menu').hasClass('href-menu-mobile-act')){
            $('.href-menu').removeClass('href-menu-mobile-act');
        }else{
            $('.href-menu').addClass('href-menu-mobile-act')
        }
    });

    $( ".payment-methods-main .payment-methods-main-block a" ).on( "click", function() {
        // var domTr=$('.payment-methods-main .payment-methods-main-block').closest('block-payment-methods-href');

        // var data = {
        // name:domTr.find('.nameForm').val(),
        // email:domTr.find('.emailForm').val(),
        // phone:domTr.find('.js-phone').val()
        // };
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
        if($(this).hasClass('show-block-quest-act')){
            $(this).removeClass('show-block-quest-act');
            $(this).next().hide(500);
            

        }else{
            $(this).addClass('show-block-quest-act');
            $(this).next().show(500);
        }
        return false;
    });

    // $("a[href*=#]").on("click", function(e){
	// 	var anchor = $(this);
	// 	$('html, body').stop().animate({
	// 		scrollTop: $(anchor.attr('href')).offset().top
	// 	}, 777);
	// 	e.preventDefault();
	// 	return false;
    // });
    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false;
     });
})