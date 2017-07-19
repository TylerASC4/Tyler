function setup(){
    createCanvas(500,500);
    background(51);
}
var xPos = 100;
var yPos = 50;
var x = 94
var y = 94
function draw(){
    background(0);
   ellipse(xPos, yPos,94)
    xPos += x;
    yPos += y;
  if (xPos<0 || xPos>500) x = -x;
  if (yPos<0 || yPos>500) y = -y;
}
var mouseX