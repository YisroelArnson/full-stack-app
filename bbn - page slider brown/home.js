$(document).ready(function(){
  $(".main").onepage_scroll();

  $(".main").onepage_scroll({
    beforeMove: function(index) {
      $(".line").css("background-color", "#D8C3A9");
      $(".line-" + index).css("background-color", "#302013");
    }
  });

  $(".line-1").click(function() {
    $(".main").moveTo(1);
  });


    $(".line-2").click(function() {
      $(".main").moveTo(2);
    });

    $(".line-3").click(function() {
      $(".main").moveTo(3);
    });

    $(".line-4").click(function() {
      $(".main").moveTo(4);
    });

    $(".line-5").click(function() {
      $(".main").moveTo(5);
    });

  $('.image-container').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  });

  $('.main-slider-container').slick({
    autoplay: false,
  });

  $('.main-slider-container-renovation').slick({
    autoplay: false,
  });
  //
  // $('.project-item-container').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3500,
  //   speed: 500,
  // });
  //
  // $('.project-image-container').slick({
  //   autoplay: true,
  //   vertical: true,
  //   verticalSwiping: true,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3500,
  //   speed: 500,
  // });

  // $('.project-slider-container').slick({
  //   autoplay: false,
  // });
  //
  // $(".slider-6 .left-arrow").click(function() {
  //   $('.project-item-container').slick('slickPrev');
  // });
  //
  //
  // $(".slider-6 .right-arrow").click(function() {
  //   $('.project-item-container').slick('slickNext');
  // });
  //

  $('.slick-project-container').slick({
    autoplay: false,
    autoplaySpeed: 5000,
  });

  $('.slick-project-item-container').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
  });

  $(".project-home-sli-arrows .left-arrow").click(function() {
    $('.slick-project-item-container').slick('slickPrev');
  });

  $(".project-home-sli-arrows .right-arrow").click(function() {
    $('.slick-project-item-container').slick('slickNext');
  });
``

  $(".back-projects-button").click(function() {
    $('.slick-project-container').slick('slickGoTo', 0, false);
  });

  $(".project-item-1").click(function() {
    $('.slick-project-container').slick('slickGoTo', 1, false);
  });


  $(".project-item-2").click(function() {
    $('.slick-project-container').slick('slickGoTo', 2, false);
  });


  $(".project-item-3").click(function() {
    $('.slick-project-container').slick('slickGoTo', 3, false);
  });


  $(".project-item-4").click(function() {
    $('.slick-project-container').slick('slickGoTo', 4, false);
  });






  $('.vertical-image-car').slick({
    autoplay: true,
    autoplaySpeed: 1500,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  });







  $('.testimonials-container').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  });

  $('.main-content-container').slick({
    animationTime: 100,
  });

  $(".back-home-button").click(function() {
    $('.main-slider-container-renovation').slick('slickPrev');
  });

  $(".read-more-arrow").click(function() {
    $('.main-slider-container-renovation').slick('slickNext');
  });



  $(".chooser-box-1").click(function() {
    $('.main-content-container').slick('slickPrev');
  });


  $(".chooser-box-2").click(function() {
    $('.main-content-container').slick('slickNext');
  });




    $(".learn-more-button").click(function() {
      $('.main-slider-container').slick('slickNext');
    });

    $(".back-home-button").click(function() {
      $('.main-slider-container').slick('slickPrev');
    });



  $(".left-arrow").click(function() {
    $('.image-container').slick('slickPrev');
  });


  $(".right-arrow").click(function() {
    $('.image-container').slick('slickNext');
  });


  //
  // $(".test-right-arrow").click(function() {
  //   $('.testimonials-container').slick('slickNext');
  // });
  //
  // $(".test-left-arrow").click(function() {
  //   $('.testimonials-container').slick('slickPrev');
  // });



});
