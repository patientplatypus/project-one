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
var platyoffset = $(".platysoft").offset();
//var htmlheight = $("html:last-child").offset().top + $("html:last-child").height();
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



	//calls a hamburger menu if the window width is less than 1000px

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
		     //   console.log($(".holderbox").offset());
		     //   console.log($(newPos));
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

		if (platyoffset != $(".platysoft").offset()){
			platyoffset = $(".platysoft").offset();
		    $(".platy").offset(function(){
		        newPos = new Object();
		        var target = $(".platysoft").offset();
		        //console.log(target);
		        newPos.left = target.left;
		        newPos.top = target.top;
		        return newPos;
		    });	
		}

	//another attempt to fix page height. no dice.

	//	if htmlheight != ($("html:last-child").offset().top + $("html:last-child").height()){
	//		htmlheight = $("html:last-child").offset().top + $("html:last-child").height();
    //		$("html").height(htmlheight);
    		//$("html").height($("body").height());
	//	}
	},200);


	//changes the opacity of the high def top left platypus picture
	//to get a blurring effect.

	setInterval(function(){

		opacitynum = opacitynum + addopacityvalue;

		$(".platy").css("opacity", opacitynum.toString());

		if (opacitynum>=1 || opacitynum<=0){
			addopacityvalue = -1*addopacityvalue;
		}

	},200);


	//here are the functions that create nav#button classes and append them to
	//the document so p5js can find them and attach the appropriate canvas.
	//if i had more than two classes i would consider abstracting them away into 
	//a function that had the # as an argument.


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

	//function to make smooth scrolling to destination argument.

	function smoothscroll(variable){
		var thisTarget = $(variable).find(">:first-child").attr('href');
		var targetOffset = $(thisTarget).offset().top - 49;
		$("html, body").animate({ scrollTop: targetOffset},2000);
	}



	//here is the function that tests whether the window is scrolled
	//and looks through all the li a's to find the one that matches
	//the div that is cut off by the top of the window (taking into
	//account the top bar). if it finds a match it calls the corresponding
	//highlight function. NOTE: I could not figure out how to "turn off" the
	//highlighting when the window scrolled to a div that was NOT in the 
	//li a list. bummer.

	$(window).scroll(function(){

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


	//on nav bar link click call smoothscroll to destination link

	$("#lione").on("click",function(){
		smoothscroll("#lione");
	});

	$("#litwo").on("click",function(){
		smoothscroll("#litwo");
	});


	//here is the code that calls the lightbox and also exits
	//when clicking the black background. currently not filling
	//entire page, but this is probably a css problem.

	$(".black_overlay").on("click",function(){
		$(".black_overlay").css("display", "none");
		$(".white_content").css("display", "none");	

	});


	$("#lithree").on("click",function(){
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






	//functions changing the platypus images and information
	//called by arrow keys, clicked pictures and the timer.

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

	//On clicking the triangles it calls functions that change
	//the info boxes about the platypuses and changes the middle
	//platypus image. 

	//thanks to Dirk for fixing the race condition caused by loading
	//the canvas functions KUDOS KUDOS KUDOS

	console.log($(".righttriangle"));

    $("html").on("click",".righttriangle", function(){
	    if (imagenumber===6){
			imagenumber=1;
		}else{
			imagenumber = imagenumber + 1;
		}
		changeleftinfo();
    	changeplatyimage();
    	console.log(imagenumber);    	
    });

    $("html").on("click", ".lefttriangle", function(){

    	if (imagenumber===1){
			imagenumber=6;
		}else{
			imagenumber = imagenumber - 1;
		}
        changeleftinfo();
    	changeplatyimage();
    	console.log(imagenumber);
    });

    //Circle here doesn't do anything. Ran out of time.

    $(".circle").on("click",function(e){
    });

    //Changes the middle image when clicking on a right thumbnail.

	$(".platyimgright").on("click",function(){
		imagenumber = parseInt($(this).attr("id"));
		changeplatyimage();
		changeleftinfo();
	});

	//changes the middle picture and platypus info on a timer

	setInterval(function(){

		if (imagenumber===6){
			imagenumber=1;
		}else{
			imagenumber = imagenumber + 1;
		}

		changeplatyimage();
		changeleftinfo();


	},5000);

/*The below was an attempt to resize the blank hanging space at the end of
the body. The issue here is that I'm appending the canvases to the end of the body
which increases the height. Since I'm having trouble moving the canvases dynamically on
page load, this does not get reset properly so the below cannot run properly. (Not sure
how to run this AFTER the canvases are offset).*/


    $(window).resize(function(){
	   var bodyheight = $("body:last-child").offset().top + $("body:last-child").height();
	   $("body").height(bodyheight);
	   $("html").height($("body").height());
    });


});