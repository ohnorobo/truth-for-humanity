
$( document ).ready(function() {
	// Handler for .ready() called.
	var str = $( "body" ).text();

	var words = str.split(" ");
	var count=words.length;

	console.log(words.length);
	var randomNum = Math.ceil(Math.random()*count); 


	var searchString=words[randomNum];
	//str=str.replace(searchString,"<span style='backgrond-color:red'>"+searchString+"</span>");
	str=str.replace(searchString,"<span style='color:sienna;background-color:yellow;font-size:40px;'>"+searchString+"</span>");
	
	$( "body:last" ).html( str );

});



