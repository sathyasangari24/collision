var fixedRect, movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(100,100,30,30);
  movingRect.debug = true;
  fixedRect.debug = true;

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

}

function draw() {
  background(255,255,255);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  console.log("Distance when touches "+ (fixedRect.width/2 + movingRect.width/2));
  console.log("Distance between the rectangles "+ (movingRect.x - fixedRect.x));

  if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2){
    //fixedRect.shapeColor = "red";
     movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  }
  drawSprites();
}