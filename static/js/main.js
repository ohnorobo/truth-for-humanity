
$( document ).ready(function() {

	//h4 style
	//$("h4").css("backgroundColor", colors[Math.floor(Math.random() * colors.length)]);
	//$("h4").css("color", "red");
	
	//window.history.pushState("object or string", "URL", "test");
	
	
	//get search term
	var url = window.location.pathname;
	var array = url.split('/');
	var searchString = array[array.length-1];
	
	// searchString=searchString.replace('the%20', '');
	// searchString=searchString.replace('The%20', '');
	// 
	console.log(searchString);
	
	
	
	var tCSS=['t1','t2','t3', 't4','t5','t6','t7','t8','t9','t10'];
	
	
	var str=$("body").text();
	
	
	//highlight first word
	// var randCSS=tCSS[Math.floor(Math.random() * tCSS.length)];	
	// str=$("body").html().replace(searchString,"<span class='"+randCSS+"'>"+searchString+"</span>");
	// $( "body" ).html( str );
	
	//set body text color
	var colors=['red','yellow','cyan','orange'];
	var rand=Math.floor(Math.random() * colors.length);
	$( "body" ).css('color', colors[rand] );
	
	var randMargin=Math.random()*50;
	$( "body" ).css('margin', randMargin+'px' );



	//highlight random paragraph
	var pSize=$('p').size();
	var r=Math.floor(Math.random() *pSize);
	for( var i=0; i<pSize*.75; i++){
		var pCSS=['p1','p2','p3','p4','p5','p6','p7','p8','p9'];
		randCSS=pCSS[Math.floor(Math.random() * pCSS.length)];	
		
		var random = Math.floor(Math.random() * pSize );
		$("p").eq(random).attr("class", randCSS);
	}

	// randCSS=tCSS[Math.floor(Math.random() * tCSS.length)];	
	// console.log(sentences[1]);
	// str=$("body").html().replace(sentences[1],"<span class='"+randCSS+"'>"+sentences[1]+"</span>");
	// $( "body:last" ).html( str );
	// 
	// randCSS=tCSS[Math.floor(Math.random() * tCSS.length)];	
	// console.log(sentences[6]);
	// str=$("body").html().replace(sentences[6],"<span class='"+randCSS+"'>"+sentences[6]+"</span>");
	// $( "body:last" ).html( str );
	
	
	
	
	//highlight sentences
 	str=$("body").text();

	cleanText = str.replace(/<\/?[^>]+(>|$)/g, "");
	var sentences=cleanText.split(".");
	$.each(sentences, function(i,item){
		
		if(i>=20)return;
		
		if(item.indexOf(unescape(searchString)) != -1)
		{
			//console.log(item);
		
	 		randCSS=tCSS[Math.floor(Math.random() * tCSS.length)];	
			//console.log(item);
			str=$("body").html().replace(item,"<span class='"+randCSS+"'>"+item+"</span>");
			$( "body" ).html( str );
		}
	});


	
	//background based on search		
		var randomBack=Math.round(Math.random()*10);
			//set paragraph image
		var	randomFirst=Math.round(Math.random()*10);
	
	     $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
	     {
			       tags: unescape(searchString),
			       tagmode: "all",
			       format: "json",
					//is_getty:"true" //only getty images
			     },
			     function(data) {
			       $.each(data.items, function(i,item){
				
				
				

			
			if ( i == randomBack){
				$('body').css({'background-image': 'url('+ item.media.m + ')'});
	
				var rand=1+Math.floor(Math.random() *10);
				$('body').css({'background-size': 100*rand+'px'});
	
				//background-size: 490px;
			}
			
		
			else if ( i == randomFirst){
				var r=0;
				var img=$("<img/>").attr("src", item.media.m).prependTo("p:eq("+r+")");
				img.css('width',400+'px');
				img.css('padding','30px');
				var rd=Math.round(Math.random());
				if(rd==0) img.css('float','right');
				else img.css('float','left');				
			}
			
			else if ( i == 3){
				var r=1+Math.floor(Math.random() *10);
				
				var img=$("<img/>").attr("src", item.media.m).prependTo("p:eq("+r+")");
				img.css('width',400+'px');
				img.css('padding','30px');
				var rd=Math.round(Math.random());
				if(rd==0) img.css('float','right');
				else img.css('float','left');				
				randCSS=pCSS[Math.floor(Math.random() * pCSS.length)];	
				img.parent().attr("class", randCSS);
								
			}
			
			else if ( i == 5){
				var r=1+Math.floor(Math.random() *10);
				
				var img=$("<img/>").attr("src", item.media.m).prependTo("p:eq("+r+")");
				img.css('width',400+'px');
				img.css('padding','30px');
							var rd=Math.round(Math.random());
							if(rd==0) img.css('float','right');
							else img.css('float','left');				
			}
			
			else {
				//insert images
				
				var pSize=$('p').size();
				
				var r=1+Math.floor(Math.random() *pSize);
				var img=$("<img/>").attr("src", item.media.m).prependTo("p:eq("+r+")");
				
				var rand=1+Math.floor(Math.random() *3);
				img.css('width',150*rand+'px');
				
				
				var rd=Math.round(Math.random());
				if(rd==0) img.css('float','right');
				else img.css('float','left');
				

			}
			
			// else {
			// 	//insert images
			// 	var img=$("<img/>").attr("src", item.media.m).prependTo("#results");
			// 	var rand=1+Math.floor(Math.random() *3);
			// 	img.css('width',100*rand+'px');
			// 
			// }
			
         
			if ( i >= 20)return false;

	       });
	
	
	//console.log(data.items);
	
	// if(data.size()=<1){
	// 	
	// 	//random background
	// 	var images = ['background.jpg', 'bordered.jpg', 'bordered2.jpg', 'dolphin.gif', 'flower1.gif','gmn-bp.jpg','grid.gif','gs-bu.gif','gsm.gif','gstarfallin.gif','sky.jpg','ss145.gif','star-pibl.gif','stars-bubl.gif','StoneBlockTileGrey.jpg','StoneBlockTileLtBlue.jpg','storag2.jpg'];
	// 	$('body').css({'background-image': 'url(../static/scraped/backgrounds/' + images[Math.floor(Math.random() * images.length)] + ')'});
	// 
	// 
	// 
	// }
	// 
	        });
	
	



});



