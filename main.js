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


$(document).ready(function(evt) {

    //AJAX request to send message to server
	
	$('form').on('submit', function (evt) {
		evt.preventDefault();
		var sendmessage = $.ajax({
	        type: 'POST',
	        url: 'insertcomment.php',
	        data: $('form').serialize()
	    });
		sendmessage.done(function(msg) {
	  		$(".sentmessage").html( msg );
		});
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

    $(".circle").on("click",function(e){
    });

document.querySelector("canvas").addEventListener("click",function(){
    //alert("canvas clicked");
});


$("#1").css("opacity","1.0");

function changeplatyimage(){

	$(".platyimgright").each(function(){
		if ($(this).attr("id") == imagenumber){
			$(this).css("opacity", 1.0);
			//console.log($(this).attr("src"));
			$(".platyimg").attr("src",$(this).attr("src"));
				//function(){
				//var dummyattr = $(this).attr("src");
				//return dummyattr.toString();
			//});
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

	console.log($(".holderbox").offset());

},3000);

console.log("window width");
console.log($(window).width());


if ($(window).width() < 1000){
	$("header").append("<div class='dropdown'></div>")
	$('.dropdown').append("<button class='btn btn-default dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'><img class='hamburgerimage' src='hamburger.png'></button>");
	$('ul').addClass('dropdown-menu');
	//$('ul').addClass('pull-left');
	$('ul').attr("aria-labelledby","dropdownMenu1")
	$('.dropdown').append($("ul"));
	$('nav').remove();
}



    $(".righttriangle").offset(function(){
        newPos = new Object();
        var target = $(".holderbox").offset();
        newPos.left = target.left + 0.7*($(".holderbox").width());
        newPos.top = target.top + 0.1*($(".holderbox").height());
        return newPos;
    });

	$( window ).resize(function() {
	    $(".righttriangle").offset(function(){
	        newPos = new Object();
	        var target = $(".holderbox").offset();
	        newPos.left = target.left + 0.7*($(".holderbox").width());
	        newPos.top = target.top + 0.1*($(".holderbox").height());
	        return newPos;
	    });
	});



    $(".lefttriangle").offset(function(){
        newPos = new Object();
        var target = $(".holderbox").offset();
        newPos.left = target.left + 0.1*($(".holderbox").width());
        newPos.top = target.top + 0.1*($(".holderbox").height());
        return newPos;
    });

	$( window ).resize(function() {
	    $(".lefttriangle").offset(function(){
	        newPos = new Object();
	        var target = $(".holderbox").offset();
	        newPos.left = target.left + 0.1*($(".holderbox").width());
	        newPos.top = target.top + 0.1*($(".holderbox").height());
	        return newPos;
	    });
	});


    $(".circle").offset(function(){
        newPos = new Object();
        var target = $(".holderbox").offset();
        newPos.left = target.left + 0.4*($(".holderbox").width());
        newPos.top = target.top + 0.05*($(".holderbox").height());
        return newPos;
    });

	$( window ).resize(function() {
	    $(".circle").offset(function(){
	        newPos = new Object();
	        var target = $(".holderbox").offset();
	        newPos.left = target.left + 0.4*($(".holderbox").width());
	        newPos.top = target.top + 0.05*($(".holderbox").height());
	        return newPos;
	    });
	});



    $(".haiku").offset(function(){
        newPos = new Object();
        var target = $(".haikuholder").offset();
        newPos.left = target.left + $('.haikuholder').width()/2 - 236;// + 50; //+ 1.25*(($(".haikuholder").width())-500)/2;
        newPos.top = target.top;
        return newPos;
    });

	$( window ).resize(function() {
	    $(".haiku").offset(function(){
	        newPos = new Object();
	        var target = $(".haikuholder").offset();
	        newPos.left = target.left + $('.haikuholder').width()/2 - 236;// + 50; //+ 1.25*(($(".haikuholder").width())-500)/2;
	        newPos.top = target.top;
	        return newPos;
	    });
	});





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

});



$("#litwo").on("click",function(){
	//linkclicked = 1;
	//alert("hellothere");
	//litwohighlight();
	smoothscroll("#litwo");
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




  //  $(".expandingbuttons").remove();

});