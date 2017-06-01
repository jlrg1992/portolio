function myQuote(){
  
  
$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=https://jorgerangel.ga/random_quote_machine.html", function(a) {
  
  var quoteData = a;
  
  var yaQue = quoteData[0]["content"];
  yaQue = yaQue.split("");
   while(yaQue.length>75){
    yaQue.pop();
  }
  yaQue = yaQue.join("");
  yaQue = yaQue+ "... -"+quoteData[0]["title"]+"- ";

   $("#citado").html(quoteData[0]["content"]);
  $("#autor").html(quoteData[0]["title"]);
  $("#tuitera").attr("href",'https://twitter.com/intent/tweet?text='+yaQue+'See more at https://jorgerangel.ga');
});

  }
  myQuote();
