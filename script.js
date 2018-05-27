
$(function(){
  $('.top-detail').click(function(){

    var $this = $(this).find('a');

    if($this.text() === "Learn more"){
      $this.text("close");
      $('#more-text').css('display','active');
      $('#more-text').slideDown();
    }else{
      $this.text("Learn more");
      $('#more-text').slideUp();
    }
  });

  $('.container a').click(function(){
    var href = $(this).attr('href');

    $('html, body').animate({
      'scrollTop': $(href).offset().top

    }, 1200);
  });


  $('.i-1').hover(
    function(){
      $(this).next().fadeIn();
    },
    function(){
      $(this).next().fadeOut();
  });

  $('.i-2').hover(
    function(){
      $(this).next().css("display","block");
  });

});
