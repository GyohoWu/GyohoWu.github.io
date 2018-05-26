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

});
