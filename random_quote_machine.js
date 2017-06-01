var x = 0;
var quoteData = null;
var lengthie = 0;
function myQuote(){
  
  if(x===0){
$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40&callback=", function(a) {
  
  quoteData = a;
lengthie = quoteData.length;

});
}
 x = Math.floor(Math.random() * (lengthie));
  
  var yaQue = quoteData[x]["content"];
  yaQue = yaQue.split("");
   while(yaQue.length>75){
    yaQue.pop();
  }
  yaQue = yaQue.join("");
  yaQue = yaQue+ "... -"+quoteData[x]["title"]+"- ";

   $("#citado").html(quoteData[x]["content"]);
  $("#autor").html(quoteData[x]["title"]);
  $("#tuitera").attr("href",'https://twitter.com/intent/tweet?text='+yaQue+'See more at https://jorgerangel.ga');

  }
  myQuote();
