//alert("sanity check");

//GLOBAL VARIABLES

var linkpressed = 0;	
var imagenumber = 1;
var leftinfonumber = "";
var opacitynum = 0;
var addopacityvalue = 0.05;
var scrollname1 = "";
var scrollname2 = "";
var teststring  = "";
var scrollcounter = 0;
var linkclicked = 0;
var holderoffset = $(".holderbox").offset();
var haikuoffset = $(".haikuholder").offset();
$("#1").css("opacity","1.0");




$(document).ready(function() {

    //AJAX request to send message to server
	
	$('form').on('submit', function (evt) {
		evt.preventDefault();
		var sendmessage = $.ajax({
	        type: 'POST',
	        url: 'insertcomment.php',
	        data: $('form').serialize(),
	        error:function(data){
				alert("error occured"); //===Show Error Message====
			}
	    });

	    sendmessage.done(function(){
	    	console.log("message sent");
	    });

		var receivemessage = $.ajax({
			url: 'outputcomment.php',
            type: 'GET',
            dataType: "html",
        });

        receivemessage.done(function(msg) {
	  		$(".receivemessage").html( msg );
		});

		return false;
	});

	//end AJAX code

    $(".righttriangle").on("click",function(e){
	    if (imagenumber===6){
			imagenumber=1;
		}else{
			imagenumber = imagenumber + 1;
		}
		//console.log(imagenumber);
		changeleftinfo();
    	changeplatyimage();
    });

    $(".lefttriangle").on("click",function(e){
    	if (imagenumber===1){
			imagenumber=6;
		}else{
			imagenumber = imagenumber - 1;
		}
		//console.log(imagenumber);
        changeleftinfo();
    	changeplatyimage();
    });

    //Circle here doesn't do anything. Ran out of time.

    $(".circle").on("click",function(e){
    });




function changeplatyimage(){

	$(".platyimgright").each(function(){
		if ($(this).attr("id") == imagenumber){
			$(this).css("opacity", 1.0);
			$(".platyimg").attr("src",$(this).attr("src"));
		}else{
			$(this).css("opacity", 0.5);
		}
	});
}

function changeleftinfo(){
	$(".leftinfo").css("display", "none");
	leftinfonumber = ".platy" + imagenumber.toString();
	$(leftinfonumber).css("display", "inline-block");
}

$(".platyimgright").on("click",function(){
	imagenumber = parseInt($(this).attr("id"));
	changeplatyimage();
	changeleftinfo();
});

setInterval(function(){

	if (imagenumber===6){
		imagenumber=1;
	}else{
		imagenumber = imagenumber + 1;
	}

	changeplatyimage();
	changeleftinfo();


},3000);



if ($(window).width() < 1000){
	$("header").append("<div class='dropdown'></div>")
	$('.dropdown').append("<button class='btn btn-default dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'><img class='hamburgerimage' src='hamburger.png'></button>");
	$('ul').addClass('dropdown-menu');
	//$('ul').addClass('pull-left');
	$('ul').attr("aria-labelledby","dropdownMenu1")
	$('.dropdown').append($("ul"));
	$('nav').remove();
}

	
 //IMPORTANT......*****
 //Below is how I was trying to do the offset function. It would
 //offset once on page load, and then on window resize it would offset
 //again. For some reason, I do not know why(!) when I put this on my
 //server it did not work. So I have to make a set interval function and
 //set the position every n milliseconds. This is a particularly intensive
 //way of setting position which I REALLY don't like. There were other strange
 //problems which I didn't understand, such as when I update my send table the 
 //positioned elements would slide down the page by the length of the append. This
 //I consider spooky as offset should be calculated from the top (!). I also thought of
 //doing an on-change event for when the offset parent changes position but
 //apparently this is not possible
 //  (http://stackoverflow.com/questions/355015/jquery-event-to-detect-when-element-position-changes)
 //I've wrapped the offsets in if conditions testing if the offset values have changed to make
 //it a LITTLE less computationally intensive.




 //	  $(".righttriangle").offset(function(){
 //       newPos = new Object();
 //       var target = $(".holderbox").offset();
 //       newPos.left = target.left + 0.7*($(".holderbox").width());
 //       newPos.top = target.top + 0.1*($(".holderbox").height());
 //       console.log($(".holderbox").offset());
 //       console.log($(newPos));
 //       return newPos;
 //     });
  
//	$( window ).resize(function() {
//	    $(".righttriangle").offset(function(){
//	        newPos = new Object();
//	        var target = $(".holderbox").offset();
//	        console.log($(".holderbox").offset());
//	        newPos.left = target.left + 0.7*($(".holderbox").width());
//	        newPos.top = target.top + 0.1*($(".holderbox").height());
//	        console.log($(newPos));
//	        return newPos;
//	    });
//	});


	setInterval(function(){
		var holderoffset = $(".holderbox").offset();
		var haikuoffset = $(".haikuholder").offset();
		
		if (holderoffset!=$(".holderbox").offset()){
			holderoffset = $(".holderbox").offset();
		 	  $(".righttriangle").offset(function(){
		        newPos = new Object();
		        var target = $(".holderbox").offset();
		        newPos.left = target.left + 0.7*($(".holderbox").width());
		        newPos.top = target.top + 0.1*($(".holderbox").height());
		        console.log($(".holderbox").offset());
		        console.log($(newPos));
		        return newPos;
		      });

		      $(".lefttriangle").offset(function(){
		        newPos = new Object();
		        var target = $(".holderbox").offset();
		        newPos.left = target.left + 0.1*($(".holderbox").width());
		        newPos.top = target.top + 0.1*($(".holderbox").height());
		        return newPos;
		       });

		      $(".circle").offset(function(){
		        newPos = new Object();
		        var target = $(".holderbox").offset();
		        newPos.left = target.left + 0.4*($(".holderbox").width());
		        newPos.top = target.top + 0.05*($(".holderbox").height());
		        return newPos;
		      });
		}

		if (haikuoffset!=$(".haikuholder").offset()){
			holderoffset = $(".haikuholder").offset();	
		      $(".haiku").offset(function(){
		        newPos = new Object();
		        var target = $(".haikuholder").offset();
		        newPos.left = target.left + $('.haikuholder').width()/2 - 236;// + 50; //+ 1.25*(($(".haikuholder").width())-500)/2;
		        newPos.top = target.top;
		        return newPos;
	      	  });
		}
	},200);




setInterval(function(){

	opacitynum = opacitynum + addopacityvalue;

	$(".platy").css("opacity", opacitynum.toString());

	if (opacitynum>=1 || opacitynum<=0){
		addopacityvalue = -1*addopacityvalue;
	}

},200);

$(".lithree").on("click",function(){

});

$(window).scroll(function(){
//	$("id").each(function{
//		if (($(this).offset().top<=$(window).scrollTop() + 50) && ($(this).offset().top + $(this).height() > $(window).scrollTop() + 50)){
//			teststring = $(this).attr("id")
//			$("li a").each(function(){
//				if ($(this).attr("href") === teststring){
//					$(".navflare").css("display","inline-block");
//					scrollname1 = $(this).parent().attr("id");
//					scrollname2 = scrollname1 + "highlight";	
//					eval(scrollname2 + "();");
//				}else{
//					$(".navflare").css("display","none");
//				}
//			});
//		}
//	});
	
	$("li a").each(function(){
		if ($(this).attr("href")!=""){
			teststring = $(this).attr("href");
			if (($(teststring).offset().top <= $(window).scrollTop() + 50) && ($(teststring).offset().top + $(teststring).height() >= $(window).scrollTop() + 50)){
				scrollname1 = $(this).parent().attr("id");
				scrollname2 = scrollname1 + "highlight";	
				eval(scrollname2 + "();");
			} else{

			}
		}
	});

	teststring = $("#lione").find(">:first-child").attr('href');
	if ($(teststring).offset().top > $(window).scrollTop() + 51){
		$(".navflare").css("display","none");
	} else{
		$(".navflare").css("display","inline-block");
	}
});




function lionehighlight(){
	if (!(($(".navonebutton")).length>0)){
		$(".expandingbuttons").append("<div class='navonebutton'></div>");		
		if($(".navtwobutton").length>0){
			$(".navtwobutton").remove();
		}
		if($(".navthreebutton").length>0){
			$(".navthreebutton").remove();
		}
	}
}

function litwohighlight(){
	if (!(($(".navtwobutton")).length>0)){
		$(".expandingbuttons").append("<div class='navtwobutton'></div>");		
		if($(".navonebutton").length>0){
			$(".navonebutton").remove();
		}
		if($(".navthreebutton").length>0){
			$(".navthreebutton").remove();
		}
	}
}


function smoothscroll(variable){
	var thisTarget = $(variable).find(">:first-child").attr('href');
	console.log(thisTarget);
	//console.log(variable);
	//console.log(thisTarget.offset());
	var targetOffset = $(thisTarget).offset().top - 49;
	$("html, body").animate({ scrollTop: targetOffset},2000);
	//linkclicked = 0;
	//setInterval(function(){linkclicked = 0},2005);
}


$("#lione").on("click",function(){
	//linkclicked = 1;
	//alert("hellothere");
	//lionehighlight();
	smoothscroll("#lione");
	lionehighlight();
});



$("#litwo").on("click",function(){
	//linkclicked = 1;
	//alert("hellothere");
	//litwohighlight();
	smoothscroll("#litwo");
	litwohighlight();
});

$(".black_overlay").on("click",function(){
	$(".black_overlay").css("display", "none");
	$(".white_content").css("display", "none");	

});


$("#lithree").on("click",function(){
	//alert("hellothere");

	$(".black_overlay").css("display", "block");
	$(".white_content").css("display", "block");

	if (!(($(".navthreebutton")).length>0)){
		$(".expandingbuttons").append("<div class='navthreebutton'></div>");		
		if($(".navtwobutton").length>0){
			$(".navtwobutton").remove();
		}
		if($(".navonebutton").length>0){
			$(".navonebutton").remove();
		}
	}
	//necessary to return false here
	//to prevent something called a
	//post-back error (which somehow
	//refreshes the page).
	//I don't understand this.
	return false;
	
});


    $(".platy").offset(function(){
        newPos = new Object();
        var target = $(".platysoft").offset();
        //console.log(target);
        newPos.left = target.left;
        newPos.top = target.top;
        return newPos;
    });


    $(window).resize(function(){
    	$(".platy").offset(function(){
	        newPos = new Object();
	        var target = $(".platysoft").offset();
	        //console.log(target);
	        newPos.left = target.left;
	        newPos.top = target.top;
	        return newPos;
    	});
    });



//    console.log($(".about").width());
/*
    if ($(".platysoft").height()>$(".about").height()){
    	$(".aboutcontainer").height($(".platysoft").height());
    } else{
    	$(".aboutcontainer").height($(".about").height());
    }

    $(window).resize(function(){
   		if ($(".platysoft").height()>$(".about").height()){
    		$(".aboutcontainer").height($(".platysoft").height());
    	} else{
    		$(".aboutcontainer").height($(".about").height());
    	}	
    });

*/

/*The below was an attempt to resize the blank hanging space at the end of
the body. The issue here is that I'm appending the canvases to the end of the body
which increases the height. Since I'm having trouble moving the canvases dynamically on
page load, this does not get reset properly so the below cannot run properly. (Not sure
how to run this AFTER the canvases are offset).*/
/*
    var bodyheight = $("body:last-child").offset().top + $("body:last-child").height();
    $("body").height(bodyheight);
    $("html").height($("body").height());

    $(window).resize(function(){
	   var bodyheight = $("body:last-child").offset().top + $("body:last-child").height();
	   $("body").height(bodyheight);
	   $("html").height($("body").height());
    });

*/
 //   $(".expandingbuttons").remove();


});