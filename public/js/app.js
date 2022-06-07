$(document).ready(function(){
    
      var div = $(".animation");
      div.animate({height: '300px', opacity: '0.4'}, "slow");
      div.animate({width: '300px', opacity: '0.8'}, "slow");
      div.animate({height: '100px', opacity: '0.4'}, "slow");
      div.animate({width: '100px', opacity: '0.8'}, "slow");
   
  });
// var $bg = $('.bg');
// var $win = $(window);

// $win.on('scroll', function(){
//     var top= $win.scrollTop()/3;
//     $bg.css('transform', 'roate('+ top + ' deg)')
// })
$( document ).ready(function() {
    $( "#book" ).animate({
      opacity: 0.25,
      left: "+=50",
      height: "toggle"
    }, 5000, function() {
      // Animation complete.
    });
  });

  $(document).ready(function(){
 
      var div = $(".div");  
      div.animate({left: '100px'}, "slow");
      div.animate({fontSize: '3em'}, "slow");
 
  });

  
// Main Visual
// -------------------------------

$(function () {
   
    $(document).ready(function(){
            $(".js-window-trigger").each(function () {
                    $(this).addClass('is-active');
            });
        });
  });
  


// jquery
// -------------------------------

$(function () {
  if ($('.js-scroll-trigger').length) {
      scrollAnimation();
  }

  function scrollAnimation() {
      $(window).scroll(function () {
          $(".js-scroll-trigger").each(function () {
              let position = $(this).offset().top,
                  scroll = $(window).scrollTop(),
                  windowHeight = $(window).height();

              if (scroll > position - windowHeight + 80) {
                  $(this).addClass('is-active');
              }
          });
      });
  }
  $(window).trigger('scroll');
});


