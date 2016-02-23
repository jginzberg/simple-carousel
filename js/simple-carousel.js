$(function(){

  var slideWidth = $('.slide').width(),
      position = 0,
      numSlides = $('.slide').size(),
      trayWidth = slideWidth * numSlides;

  $('.tray').width(trayWidth);

  $('.next').click(function() {
    if(position === numSlides -1) {
      position = 0;
    } else {
      position++;
    }
    
    var distance = slideWidth * position;
    $('.tray').animate({right: distance}, 600);
  });

  $('.prev').click(function() {
    if(position === 0) {
      position = numSlides - 1;
    } else {
      position--;
    }

    var distance = slideWidth * position;
    $('.tray').animate({right: distance}, 600);
  });

  $('.prev, .next').hide();

  $('.frame').hover(function() {
    $('.prev, .next').show();
  }, function() {
    $('.prev, .next').hide();
  });

});