var body = $("body");

   $('.scroll-link').click(function(e) { 
         e.preventDefault(); 
         scrollStyle($( this ).attr("href"));
      });

  function scrollStyle(target){
    var destiny = $(target).position();
    body.animate({scrollTop: destiny.top - 50}, 500, 'swing');
  }
  
   $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });


   //Menu effect
   var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

   $(window).scroll(function(){

    var anchito = $("body").width();

    if(anchito>768){

     var checking = body.scrollTop();

     if(checking>55&&$(".navbar-default").hasClass("navbar-transparent")){
      $(".navbar-default").addClass("animated fadeOutUp").one(animationEnd, function(){
        $(".navbar-default").removeClass("navbar-transparent animated fadeOutUp");
        $(".navbar-default").addClass("animated fadeInDown");
      });
     }
     else if(checking<55&&!($(".navbar-default").hasClass("navbar-transparent"))){
        $(".navbar-default").addClass("animated fadeOutUp").one(animationEnd, function(){
          $(".navbar-default").removeClass("animated fadeOutUp");
          $(".navbar-default").addClass("navbar-transparent animated fadeInDown");
        });
      }
  }



   });
