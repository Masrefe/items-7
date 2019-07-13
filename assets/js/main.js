
$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();

	
// ---- Active
    $(".project-carousel").owlCarousel({
            items:3,
            nav:true,
            margin:30,
            center:true,
            loop:true,
            autoplay:false,
            dots:true,
            smartSpeed:2000,
            navText: [
                "<i class='fa fa-long-arrow-left'></i>",
                "<i class='fa fa-long-arrow-right'></i>"
            ],
            responsive:{
                    0:{
                        items:1,
                        nav:true,
                         loop:true
                    },
                    450:{
                        items:1,
                        nav:true,
                         loop:true
                    },
                    600:{
                        items:2,
                        nav:true,
                         loop:true
                    },
                    1000:{
                        items:3,
                        nav:true,
                        loop:true
                    }
                }

           
          
        });

        // ---- Active
    $(".fideback-carousel").owlCarousel({
            items:1,
            nav:false,
            margin:0,
            loop:true,
            autoplay:false,
            dots:true,
            smartSpeed:2000
          
        });        

        // ---- Active
    $(".clints-carosel").owlCarousel({
            items:4,
            nav:false,
            margin:30,
            loop:true,
            autoplay:false,
            dots:true,
            smartSpeed:2000,

             responsive:{
                    0:{
                        items:1,
                        nav:false,
                         loop:true
                    },
                    450:{
                        items:1,
                        nav:false,
                         loop:true
                    },
                    600:{
                        items:2,
                        nav:false,
                         loop:true
                    },
                    1000:{
                        items:3,
                        nav:false,
                        loop:true
                    }
                }
          
        });

      //All slider active
        if ($.fn.owlCarousel) {
            //==welcome_Slider==\\
            var welcomeSlider =  $('.hero-carosel');
            welcomeSlider.owlCarousel({
                items: 1,
                loop: true,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                smartSpeed: 500,
                autoplay: true,
                dots: false,
                nav: true,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
            });
            //==welcome_area animation==\\
            welcomeSlider.on('translate.owl.carousel', function () {
                $('.single-item h1').removeClass('fadeInDown animated').hide();
                $('.single-item p').removeClass('fadeInUp animated').hide();
                $('.single-item a').removeClass('fadeInUp animated').hide();
            });
            welcomeSlider.on('translated.owl.carousel', function () {
                $('.owl-item.active .single-item h1').addClass('fadeInDown animated').show();
                $('.owl-item.active .single-item p').addClass('fadeInUp animated').show();
                $('.owl-item.active .single-item a').addClass('fadeInUp animated').show();
            });
          

        };

      
        
    // Closes the Responsive Menu on Menu Item Click
     $('.navbar-collapse ul li a:not(.dropdown-toggle)').on('click', function() {
            $('.navbar-toggle:visible').click();
        });


     // Active Back to top 
  if ($('#back-to-top').length) {
    var scrollTrigger = window.innerHeight, // px
    backToTop = function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $('#back-to-top').addClass('show');
      } else {
        $('#back-to-top').removeClass('show');
      }
    };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    $('#back-to-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
  }



}(jQuery));


   
