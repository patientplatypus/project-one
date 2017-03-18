var fillvalue = 0;
var xover = 0;

function setup() {

  // Sets the screen to be 720 pixels wide and 400 pixels high
  var canvas = createCanvas(100, 100);
  background(255, 204, 0);
  noStroke();

  canvas.parent("lefttriangle");

}

function draw() {


  if (fillvalue > 250){
    fillvalue = 0;
  }

  if (xover > 50){
    xover = 0;
    fillvalue = 0;
  }

  fill(255-fillvalue);
  //triangle(20+xover,20,20+xover,80, 40+xover,50);
  triangle(70-xover,20,70-xover,80, 90-xover,50);

  xover = xover + 1;
  fillvalue = fillvalue + 5;

}