(function($) {
  
  "use strict";  

  $(window).on('load', function() {


  /*Page Loader active
  ========================================================*/
  $('#preloader').fadeOut();


      /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });

    wow.init();


  });      

}(jQuery));