
var s = function( p ) { // p could be any variable name
  var fillvalue = 0;
  var xover = 0;
  var canvas;

  p.setup = function() {
    canvas = p.createCanvas(100, 100);
    canvas.class("lefttriangle");
    p.background(255, 255,255,0);
    p.noStroke();
  };

  p.draw = function() {
    if (fillvalue > 250){
      fillvalue = 0;
    }

    if (xover > 50){
      xover = 0;
      fillvalue = 0;
    }

    p.fill(255-fillvalue);
    p.triangle(100-(20+xover),20,100-(20+xover),80, 100-(40+xover),50);

    xover = xover + 1;
    fillvalue = fillvalue + 5;
  };
};
var myp5 = new p5(s, '.lefttriangle');

var v = function( p ) { 
  var fillvalue = 0;
  var xover = 0;
  var canvas;

  p.setup = function() {
    canvas = p.createCanvas(100, 100);
    canvas.class("circle");
    p.background(255, 255,255,0);
    p.noStroke();
  };

  p.draw = function() {
    if (fillvalue > 250){
      fillvalue = 0;
    }

    if (xover > 50){
      xover = 0;
      fillvalue = 0;
    }

    p.fill(255-fillvalue);
    p.ellipse(50,50,xover,xover);

    xover = xover + 1;
    fillvalue = fillvalue + 5;
  };
};
var myp5 = new p5(v, '.circle');


var t = function( p ) { 
  var fillvalue = 0;
  var xover = 0;
  var canvas;

  p.setup = function() {
    canvas = p.createCanvas(100, 100);
    canvas.class("righttriangle");
    p.background(255, 255,255,0);
    p.noStroke();
  };

  p.draw = function() {
    if (fillvalue > 250){
      fillvalue = 0;
    }

    if (xover > 50){
      xover = 0;
      fillvalue = 0;
    }

    p.fill(255-fillvalue);
    p.triangle(20+xover,20,20+xover,80, 40+xover,50);

    xover = xover + 1;
    fillvalue = fillvalue + 5;
  };
};
var myp5 = new p5(t, '.righttriangle');




setInterval(function(){ 

function drawflare(linkname){

var w = function( p ) { 
  var xvalue = 0;
  var yvalue = 0;
  var fillvalue = 0;
  var counter = 0;
  p.setup = function() {
    canvas = p.createCanvas(50, 20);
    canvas.class("navflare " + linkname);
    p.background(255,255,255,0);
    p.noStroke();
  };

  p.draw = function() {

    if (fillvalue > 500){
      fillvalue = 0;
    }

    if (xvalue > 50){
      xvalue = 0;
      yvalue = yvalue + 3;
    }
    if (yvalue > 20){
      yvalue = 0;
      xvalue = 0;
      counter = counter + 1;
    }

    if (counter >= 2){
      p.clear();
      counter = 0;
    }

    c = p.color(fillvalue%50,fillvalue%255,fillvalue%255, fillvalue%50);
    p.fill(c);
    p.rect(xvalue,yvalue,5,5);
    fillvalue = fillvalue + 20;
    xvalue = xvalue + 3;
  };
};

return w;

}


var x = document.querySelectorAll(".navonebutton");
if (x.length>0 && linkpressed!=1){
  var cleanupflare = document.querySelector( '.navflare' );
  if (cleanupflare != null){
    cleanupflare.parentNode.removeChild(cleanupflare);
  }
  var linkname = "linkone";
  var myp5 = new p5(drawflare(linkname), '.navonebutton');
  linkpressed = 1;

   $(".linkone").offset(function(){
        newPos = new Object();
        var target = $("#lione").offset();
        newPos.left = target.left;
        newPos.top = target.top + 0.75*($("#lione").height()); ;
        return newPos;
    });
   $(".linkone").css('position', 'relative');
   $(".linkone").css('z-index', 2000);
}


var y = document.querySelectorAll(".navtwobutton");
if (y.length>0 && linkpressed!=2){
  var cleanupflare = document.querySelector( '.navflare' );
  if (cleanupflare != null){
    cleanupflare.parentNode.removeChild(cleanupflare);
  }
  var linkname = "linktwo";
  var myp5 = new p5(drawflare(linkname), '.navtwobutton');
  linkpressed = 2;

    $(".linktwo").offset(function(){
        newPos = new Object();
        var target = $("#litwo").offset();
        newPos.left = target.left;
        newPos.top = target.top + 0.75*($("#litwo").height()); ;
        return newPos;
    });
   $(".linktwo").css('position', 'relative');
   $(".linktwo").css('z-index', 2000);
}

var z = document.querySelectorAll(".navthreebutton");
if (z.length>0 && linkpressed!=3){
  var cleanupflare = document.querySelector( '.navflare' );
  if (cleanupflare != null){
    cleanupflare.parentNode.removeChild(cleanupflare);
  }
  var linkname = "linkthree";
  var myp5 = new p5(drawflare(linkname), '.navthreebutton');
  linkpressed = 3;

    $(".linkthree").offset(function(){
        newPos = new Object();
        var target = $("#lithree").offset();
        newPos.left = target.left + 0.2*($("#lithree").width());
        newPos.top = target.top + 0.75*($("#lithree").height()); 
        return newPos;
    });
   $(".linkthree").css('position', 'relative');
   $(".linkthree").css('z-index', 2000);
}




}, 200);





$(window).scroll(function(){

  if ($(".linkone").length>0){
    $(".linkone").offset(function(){
        newPos = new Object();
        var target = $("#lione").offset();
        newPos.left = target.left;
        newPos.top = target.top + 0.75*($("#lione").height());
        return newPos;
    });
  }

  if ($(".linktwo").length>0){
    $(".linktwo").offset(function(){
        newPos = new Object();
        var target = $("#litwo").offset();
        newPos.left = target.left;
        newPos.top = target.top + 0.75*($("#litwo").height());
        return newPos;
    });
  }

  if ($(".linkthree").length>0){
    $(".linkthree").offset(function(){
        newPos = new Object();
        var target = $("#lithree").offset();
        newPos.left = target.left + 0.2*($("#lithree").width());
        newPos.top = target.top + 0.75*($("#lithree").height());
        return newPos;
    });
  }

});


  var text1 = "HAIKU";
  var text2 = "SWIMMING WITH FISHES";
  var text3 = "ALSO ENJOYS EATING THEM";
  var text4 = "A BROWN PLATYPUS";
  var words1 = text2.split("");
  var words2 = text3.split("");
  var words3 = text4.split("");

var h = function( p ) { 
 
  var i = 10;
  var j = 0;
  var z = 10;
  var n = 10;
  var k = 0; 
  var l = 0; 

  p.setup = function() {
    canvas = p.createCanvas(500, 500);
    canvas.class("haiku");
    p.fill(100,100,100);
    p.background(100, 25,255,100);
    p.textSize(50);
    p.frameRate(5);
    p.text(text1,50,50);
    p.textSize(40);
  };

  p.draw = function() {
    p.background(100, 25,255,100);
    p.textSize(100);
    p.text(text1,50,50);
    p.textSize(70);
    
    if (i>500){
      i = 0;
    }

    if (z>500){
      z = 0;
    }

    if (n>500){
      n = 0;
    }

    if (j >= words1.length){
      j = 0;
    }

    if (k >= words2.length){
      k = 0;
    }

    if (l >= words3.length){
      l = 0;
    }
 
    p.fill(i%255,z%255,n%255);
    p.text(words1[j],i,150);

    p.fill(z%255,i%255,n%255);
    p.text(words2[k],z,250);

    p.fill(n%255,i%255,z%255);
    p.text(words3[l],n,400);

    i = i + p.textWidth(words1[j]) + 10;
    z = z + p.textWidth(words2[k]) + 14;
    n = n + p.textWidth(words3[l]) + 10; 
    j = j + 1;
    k = k + 1;
    l = l + 1;
  };
};
var myp5 = new p5(h, '.haiku');