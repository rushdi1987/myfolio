
jQuery(document).ready(function($) {

	 /* ===============================================
     Stick Nav Bar
     =============================================== */
     if ($(window).width() > 767) {

     	$(window).scroll(function(){

     		if ($(this).scrollTop() > 110) {
     			$('.navbar.navbar-default').addClass('navbar-fixed-top');
     			$('.navbar.navbar-inverse').addClass('navbar-fixed-top');     			
     		}else{
     			$('.navbar.navbar-default').removeClass('navbar-fixed-top');
     			$('.navbar.navbar-inverse').removeClass('navbar-fixed-top');
     		}
     	})
     };

     /* ===============================================
     Menu Active Class
     =============================================== */
     // $('ul.nav > li').click(function (e) {
     //        e.preventDefault();
     //        $('ul.nav > li').removeClass('active');
     //        $(this).addClass('active');                
     //    });   


     /* ===============================================
     Scroll To
     =============================================== */
     $(window).scroll(function(){

     		if ($(this).scrollTop() > 150) {

     			$('.scroll_up').fadeIn(500).removeClass('hide');
     		}else{
     			$('.scroll_up').addClass('hide');
     		}


     });

     $( '.scroll_up' ).click(function() {
		 $("html, body").animate({ scrollTop: 0 }, "slow");
	});
     /* ===============================================
     Animations
     =============================================== */

	$( ".down" ).click(function() {
		$( ".about" ).animate({
			height:500
		}, 3000);
		
	});

	$(".works").mouseenter(function(e) {
    $(this).find(".img_details").stop().animate({
      'bottom': '5%',
      'opacity': '1'
    }, 500);
    e.preventDefault();
  });
  $(".works").mouseleave(function(e) {
    $(this).find(".img_details").stop().animate({
      'bottom': '100%',
      'opacity': '0'
    }, 500);
    e.preventDefault();
  });



/* ===============================================
     Magnific PopUp
     =============================================== */
  

     $('.image-popup-fit-width').magnificPopup({
          type: 'image',
          closeOnContentClick: true,
          mainClass: 'mfp-img-mobile',
          image: {
            verticalFit: true
          }
          
        });
     

    /* ===============================================
     Initialize Wow Js
     =============================================== */
	var wow = new WOW(
		{
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			scrollContainer: null // optional scroll container selector, otherwise use window
		}
	);
	wow.init();

})(jQuery);