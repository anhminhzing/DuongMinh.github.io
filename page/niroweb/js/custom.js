$(document).ready(function () {
  "use strict";
  //   ---------------- animation number percent animation ------------

  $(".main_content").css("display", `none`);
  var percent = 0;
  var time = setInterval(function () {
    percent += 1;
    $(".percent").html(`${percent}%`);
    $(".white_line").css("width", `${percent}%`);
    if (percent == 100) {
      clearInterval(time);
      $(".loading_screen").css("top", `-100px`);
      $(".loading_screen").css("height", `0`);
      $(".main_content").css("display", `block`);
    }
  }, 15);

 

  //   ---------------- owl carousel ------------
  $(".owl-carousel").owlCarousel({
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
      },
      600: {
        items: 3,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
      },
      1000: {
        items: 5,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
      },
    },
  });
  // sticky navbar

  // var scroll_up = 0;
  // $(window).scroll(function () {
  //   var scroll_down = $(window).scrollTop();
  //   if (scroll_up < scroll_down) {
  //     $(".navbar").addClass("down");
  //     $(".navbar").removeClass("up");
  //   } else {
  //     $(".navbar").removeClass("down");
  //     $(".navbar").addClass("up");
  //   }

  //   if (scroll_down == 0) {
  //     $(".navbar").removeClass("up");
  //     $(".navbar").removeClass("down");
  //   }

  //   scroll_up = scroll_down;
  // });

  $(window).scroll(function(){
    if ($(window).scrollTop() > 50){
      $(".navbar").addClass("sticky");
    }else{
      $(".navbar").removeClass("sticky");
    }
  })

  // animation shape panel

  function getDataParalax(index){
    switch (index) {
      case 0 :
        return '{"x": 100, "y": 100, "rotateZ":0}';
      case 1: 
        return '{"x": 40, "y": 100, "rotateZ":0}';
      case 2: 
        return '{"x": 100, "y": -150, "rotateZ":90}';
      case 3: 
        return '{"x": 100, "y": 50, "rotateZ":0}';
      case 4: 
        return '{"x": 100, "y": 50, "rotateZ":0}';
      case 5: 
        return '{"x": 100, "y": 50, "rotateZ":0}';
      default : 
        return '{"x": 200, "y": 0}';
    }
  }

  var length_img = 7;
  for (let index = 0; index < length_img; index++) {
    var dataParalax = getDataParalax(index);
    $("#animation_shape_panel").append(`
      <img 
      src="img/animation_image/animation_shape_${index + 1}.png" 
      alt="#" 
      data-parallax='${dataParalax}'>
    `);
  }

 
});
