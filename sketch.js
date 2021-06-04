
function preload(){
  ninjaimg=loadAnimation("ninja1.png","ninja2.png")
  ninjaimg2=loadAnimation("ninja3.png")
  ninjaimg3=loadAnimation("ninja4.png")
  
 forest=loadImage("forest.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  
forestimg=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
forestimg.addImage("f",forest);
forestimg.velocityX=-4


ninja=createSprite(0,displayHeight-140,20,20)
ninja.addAnimation("n",ninjaimg)
ninja.addAnimation("n2",ninjaimg2)
ninja.addAnimation("n3",ninjaimg3)
ninja.debug=true;
ninja.scale=2;

inviground=createSprite(displayWidth/2,displayHeight-140,displayWidth*2,5)
inviground.visible=true
inviground.debug=true
}

function draw() {
  background(forest); 
  ninja.velocityX=3;
 //camera.position.x=ninja.x
  if(keyDown("space")){
    ninja.velocityY=-6;
    ninja.changeAnimation("n2",ninjaimg2)
}
ninja.velocityY=ninja.velocityY+3
if(ninja.isTouching(inviground)){
  ninja.changeAnimation("n",ninjaimg)
}
ninja.collide(inviground)
  drawSprites();
}