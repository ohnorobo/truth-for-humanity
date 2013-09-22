
$( document ).ready(function() {

	//h4 style
	var colors=['red','yellow','cyan','orange'];
	$("h4").css("backgroundColor", colors[Math.floor(Math.random() * colors.length)]);
	$("h4").css("color", "red");
	
	
	
	//highlight search term
	var url = window.location.pathname;
	
	var array = url.split('/');
	var searchString = array[array.length-1];
	console.log(searchString);
	
	var str=$("body").text();
	
	var tCSS=['t1','t2','t3'];
	var randCSS=tCSS[Math.floor(Math.random() * tCSS.length)];	
	str=$("body").html().replace(searchString,"<span class='"+randCSS+"'>"+searchString+"</span>");

	$( "body:last" ).html( str );
	

	//background based on search
	        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
	        {
	          tags: searchString,
	          tagmode: "all",
	          format: "json",
				is_getty:"true" //only getty images
	        },
	        function(data) {
	          $.each(data.items, function(i,item){
				if ( i == 1){
					$('body').css({'background-image': 'url('+ item.media.m + ')'});
					$('body').css({'background-image': 'url('+ item.media.m + ')'});
					
					//background-size: 490px;
				}
				else {
		            $("<img/>").attr("src", item.media.m).prependTo("#results");
				}
	            
				if ( i == 11)return false;
	
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



