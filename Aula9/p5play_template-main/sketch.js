var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(30,90,20,20);
}

function draw() 
{
  background(30);
  if (keyDown("Left")){
    box.x -= 7;
  }
  if (keyDown("Right")){
    box.x += 7;
  }
  drawSprites();
}




