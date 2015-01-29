/*
* Theme Name: Love is - One Page Responsive Wedding Template
* Author: lmtheme (Linar Miftakhov)
* Author URL: http://themeforest.net/user/lmtheme
* Version: 1.0
*/


jQuery(document).ready(function($){

	/* prepend menu icon */
	$('#nav-wrap').prepend('<div id="menu-icon">Menu</div>');
	
	/* toggle nav */
	$("#menu-icon").on("click", function(){
		$("#nav").slideToggle();
		$(this).toggleClass("active");
	});

});

	// --------------------------------------------------------------------------	
	// Subpage Slider -----------------------------------------------------------
	// --------------------------------------------------------------------------
    jQuery(document).ready(function ($) {

      //Stellar.js
      $(window).stellar();

      var links = $('.navigation').find('li');
      slide = $('.slide');
      button = $('.button');
      mywindow = $(window);
      htmlbody = $('html,body');

      function goToByScroll(dataslide) {
          htmlbody.animate({
              scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top-60
          }, 1000, 'easeInOutQuint');
      }

      links.click(function (e) {
          e.preventDefault();
          dataslide = $(this).attr('data-slide');
          goToByScroll(dataslide);
      });

      button.click(function (e) {
          e.preventDefault();
          dataslide = $(this).attr('data-slide');
          goToByScroll(dataslide);

    });
	
	// --------------------------------------------------------------------------
	// bxSlider for Photos Sabpage ----------------------------------------------
	// --------------------------------------------------------------------------
    $(document).ready(function(){
       $('.bxslider').bxSlider({
        adaptiveHeight: true,
        speed: 900,
		touchEnabled: false
       });
    });

	// --------------------------------------------------------------------------
	// prettyPhoto --------------------------------------------------------------
	// --------------------------------------------------------------------------	
	$("a.prettyPhoto").prettyPhoto({
		social_tools:'',
		deeplinking:false,
		theme: 'light_square'
	});
	
	jQuery("a[data-rel^='prettyPhoto']").prettyPhoto(); 

	// --------------------------------------------------------------------------	
	// tooltips -----------------------------------------------------------------
	// --------------------------------------------------------------------------
	$('.tip[title]').qtip({
		position:{
			my: 'bottom center',
			at: 'top center',
			adjust: {
				x: -1,
				y: -32
			}
		},
		style: {
			classes: 'ui-tooltip-tipsy ui-tooltip-shadow'
		}		
	});	

	// --------------------------------------------------------------------------	
	// Image hover effect -------------------------------------------------------
	// --------------------------------------------------------------------------	
    $(function() {
      // ON MOUSE OVER
      $(".photos img").hover(function () {
      // SET OPACITY TO 70%
      $(this).stop().animate({
      opacity: .7
      }, "slow");
    }, 
    // ON MOUSE OUT
    function () {
      // SET OPACITY BACK TO 50%
      $(this).stop().animate({
      opacity: 1
      }, "slow");
    });

});
	

	
});