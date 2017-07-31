function setup(){
    createCanvas(500,500);}
var x = 250;
function draw(){
    background("Teal");
    rect(40,20,55,55,20);
    rect(160,20,55,55,20);
    rect(280,20,55,55,20);
    rect(400,20,55,55,20);
    rect(x,400,55,55,20);
if(keyIsDown(LEFT_ARROW)){x-=8;}
if(x<1){x=500}
if(keyIsDown(RIGHT_ARROW)){x +=8;}
if(x>500){x=0}
else if(x>500){x=500}}

if(keyIsPressed(UP_ARROW)){}
function(keyIsPressed(UP_ARROW){8 =+x};



var rect = [];
for(c=0; c<rectColumnCount; c++){
    rect[c] = []
    for(r=0; r<rectRowCount; r++)
    rect[c][r] = {x:0, y:0, status: 1}
}