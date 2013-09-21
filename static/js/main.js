
var yourstring="ninjas";


$('p:contains('+yourstring+')', document.body).each(function(){
  $(this).html($(this).html().replace(
        new RegExp(yourstring, 'g'), '<span class=someclass>'+yourstring+'</span>'
  ));
}​);​

/*
var txt=$("body").text;
var wordCount = txt.replace( /[^\w ]/g, "" ).split( /\s+/ ).length
var rand = Math.ceil(Math.random()*wordCount);

$( "body" ).slice( rand ).css( "background-color", "red" );


var txt = $("body").text();
//  Split every word
var words = txt.split(" ");
//  Count the amount of words
var amount = words.length

console.log(words[120])

var randomword=words[120];

$( "body:contains("+randomword+")" ).css( "text-decoration", "underline" );

$( "body:contains("+randomword+")" ).replace
//words[10].css("background-color","red");
*/