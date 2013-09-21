
var txt=$("body").text;

var wordCount = txt.replace( /[^\w ]/g, "" ).split( /\s+/ ).length


var rand = Math.ceil(Math.random()*wordCount); /* Pick random number between 1 and 2 */

$( "body" ).slice( 2 ).css( "background-color", "red" );
