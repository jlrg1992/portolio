var quoteData = {
  0:["A physician is not angry at the intemperance of a mad patient, nor does he take it ill to be railed at by a man in fever. Just so should a wise man treat all mankind, as a physician does his patient, and look upon them only as sick and extravagant.","Lucius Annaeus Seneca"],
  1:["The physician's highest calling, his only calling, is to make sick people healthy - to heal, as it is termed.","Samuel Hahnemann"],
  2:["Never go to a doctor whose office plants have died.","Erma Bombeck"],
  3:["Medicine is my lawful wife and literature my mistress, when I get tired of one, I spend the night with the other.","Anton Chekhov"],
  4:["The doctor sees all the weakness of mankind, the lawyer all the wickedness, the theologian all the stupidity.","Arthur Schopenhauer"],
  5:["Nos ganamos la vida con lo que recibimos, pero hacemos la vida con lo que damos.", "John Maxwell"],
  6:["Never offend people with style when you can offend them with substance.","Sam Brown"],
  7:["The work you do while you procrastinate is probably the work you should be doing for the rest of your life.", "Jessica Hische"]
};
var keys;

function myQuote(){
  
  keys = Object.keys(quoteData);

  var j = Math.floor(Math.random() * (keys.length + 1));
  if (j >keys.length){
    while (j>keys.length){
      j = Math.floor(Math.random() * (keys.length + 1));
    }
  }
  
  var yaQue = quoteData[j][0];
  yaQue = yaQue.split("");
   while(yaQue.length>75){
    yaQue.pop();
  }
  yaQue = yaQue.join("");
  yaQue = yaQue+ "... -"+quoteData[j][1]+"- ";
 
  
  
   $("#citado").html('"'+quoteData[j][0]+'"');
  $("#autor").html(quoteData[j][1]);
  $("#tuitera").attr("href",'https://twitter.com/intent/tweet?text='+yaQue+'See more at https://jorgerangel.ga');
  }
  myQuote();