(function($) {
  "use strict";
  
  /* is_exist() */
  jQuery.fn.is_exist = function(){
    return this.length;
  }
  
  
  $(function(){


var popup_youtube = $('.video-init');
  if (popup_youtube.is_exist()){
      popup_youtube.magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade'
  });

}



});/*End document ready*/
  
  







})(jQuery);
  
  
  
  
  
  
  