
$( document ).ready(function() {
	// Handler for .ready() called.
	var str = $( "body" ).text();

	var words = str.split(" ");
	var wordcount=words.length;
	console.log(words.length);
	
	var sentences = str.split(".");
	var sentencecount=sentences.length;
	
	for(var i=0; i<10; i++)
	{	
		var randomNum = Math.ceil(Math.random()*sentencecount); 
		var searchString=sentences[randomNum];
		str=str.replace(searchString,"<span class='t1'>"+searchString+"</span>");	
	}

	for(var i=0; i<10; i++)
	{	
		var randomNum = Math.ceil(Math.random()*wordcount); 
		var searchString=words[randomNum];
		str=str.replace(searchString,"<span class='t2'>"+searchString+"</span>");
	}


	for(var i=0; i<20; i++)
	{	
		var randomNum = Math.ceil(Math.random()*wordcount); 
		var searchString=words[randomNum];
		str=str.replace(searchString,"<span class='t3'>"+searchString+"</span>");
	}


	//$( "body:last" ).html( str );

});



