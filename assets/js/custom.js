(function ($) {
    "use strict";
    $(".close-btn").on("click", function () {
        $(".search-overlay").fadeOut();
        $(".search-btn").show();
        $(".close-btn").removeClass("active");
    });
    $(".search-btn").on("click", function () {
        $(this).hide();
        $(".search-overlay").fadeIn();
        $(".close-btn").addClass("active");
    });
    $(window).on("scroll", function() {
        if ($(document).scrollTop() > 20) {
            $(".custom-nav").addClass("fixed-top");
        }
        else {
            $(".custom-nav").removeClass("fixed-top");
        }
    });
      // active nav
      $('.navbar-nav .nav-item').on('click', function() {
          $('.navbar-nav .nav-item.active').removeClass('active');
          $(this).addClass('active');
      });
       // back to top
    $(".back2").click(function() {
        $('html, body').animate({
        scrollTop: 0,
        }, 1000);
    });
    $(window).on('scroll', function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 500){
          $('.back2').addClass('aaa');
          $('.aaa').fadeIn(500);
        }
        else if(scrolling > 200){
          $('.aaa').fadeOut(500);
        }
        });
           /* ---------------------------------------------------------
            32. Price Slider
        --------------------------------------------------------- */
        $( ".slider-range" ).slider({
            range: true,
            min: 50,
            max: 5000,
            values: [ 50, 1500 ],
            slide: function( event, ui ) {
                $( ".amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
        $( ".amount" ).val( "$" + $( ".slider-range" ).slider( "values", 0 ) +
        " - $" + $( ".slider-range" ).slider( "values", 1 ) ); 
        //slider
        $(".owl-carousel").on("initialized.owl.carousel", () => {
            setTimeout(() => {
              $(".owl-item.active .owl-slide-animated").addClass("is-transitioned");
              $("section").show();
            }, 200);
          });
          
          $(".slider").owlCarousel({
            animateOut: 'fadeOut',
            autoplay: true,
            autoplayTimeout: 2800,
            items: 1,
            loop: true,
            nav: true,
            navText: false,
            dots:false,
          });
})(jQuery);
