
$( document ).ready(function() {
	// Handler for .ready() called.
	// var str = $( "body" ).text();
	// 
	// var words = str.split(" ");
	// var wordcount=words.length;
	// console.log(words.length);
	// 
	// var sentences = str.split(".");
	// var sentencecount=sentences.length;
	// 
	// for(var i=0; i<10; i++)
	// {	
	// 	var randomNum = Math.ceil(Math.random()*sentencecount); 
	// 	var searchString=sentences[randomNum];
	// 	str=str.replace(searchString,"<span class='t1'>"+searchString+"</span>");	
	// }
	// 
	// for(var i=0; i<10; i++)
	// {	
	// 	var randomNum = Math.ceil(Math.random()*wordcount); 
	// 	var searchString=words[randomNum];
	// 	str=str.replace(searchString,"<span class='t2'>"+searchString+"</span>");
	// }
	// 
	// 
	// for(var i=0; i<20; i++)
	// {	
	// 	var randomNum = Math.ceil(Math.random()*wordcount); 
	// 	var searchString=words[randomNum];
	// 	str=str.replace(searchString,"<span class='t3'>"+searchString+"</span>");
	// }
	// 
	// 
	// $( "body:last" ).html( str );

var images = ['background.jpg', 'bordered.jpg', 'bordered2.jpg', 'dolphin.gif', 'flower1.gif','gmn-bp.jpg','grid.gif','gs-bu.gif','gsm.gif','gstarfallin.gif','sky.jpg','ss145.gif','star-pibl.gif','stars-bubl.gif','StoneBlockTileGrey.jpg','StoneBlockTileLtBlue.jpg','storag2.jpg'];


//$("body").css("background-image","url('../static/scraped/backgrounds/background.jpg')");
$('body').css({'background-image': 'url(../static/scraped/backgrounds/' + images[Math.floor(Math.random() * images.length)] + ')'});
});



