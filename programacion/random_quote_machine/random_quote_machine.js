var x = 1.5;
var quoteData = null;
var lengthie = 0;
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
function myQuote(){
  
  if(x===1.5){
$.getJSON("https://cors-everywhere.herokuapp.com/https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40", function(a) {
  
  quoteData = a;
lengthie = quoteData.length;
  nextthing();
});
}
else{
  nextthing();
}
  }
  function nextthing(){
    x = Math.floor(Math.random() * (lengthie));
  
  var yaQue = quoteData[x]["content"];
  yaQue = yaQue.split("");
   while(yaQue.length>75){
    yaQue.pop();
  }
  yaQue = yaQue.join("");
  yaQue = yaQue+ "... -"+quoteData[x]["title"]+"- ";

   $("#citado").html(quoteData[x]["content"]);
   $("#citado").addClass("flipInX").one(animationEnd, function() {
            $(this).removeClass('flipInX');
          });
  $("#autor").html(quoteData[x]["title"]);
  $("#tuitera").attr("href",'https://twitter.com/intent/tweet?text='+yaQue+'See more at https://jorgerangel.ga/random_quote_machine.html');
  }
  myQuote();
