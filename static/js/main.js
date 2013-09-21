
var txt=$("body").text;
var wordCount = txt.replace( /[^\w ]/g, "" ).split( /\s+/ ).length
var rand = Math.ceil(Math.random()*wordCount);

$( "body" ).slice( rand ).css( "background-color", "red" );
