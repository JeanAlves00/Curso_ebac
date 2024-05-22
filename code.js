$(document).ready(function(){
    $('.slider1').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider2'
    });
    $('.slider2').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.slider1',
      dots: false,
      centerMode: true,
      focusOnSelect: true
    });
  });

  $(document).ready(function() {
    $('.abrir-menu button').click(function() {
        $('.menu').slideToggle();
    })
})