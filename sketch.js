var seaImage
var sea
var ship_image,ship
   
function preload(){
seaImage=loadImage("sea.png")
ship_Image=loadAnimation("ship-1.png","ship-2.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,200)
  sea.addImage(seaImage)
  sea.velocityX=-3
  ship=createSprite(200,300)
  ship.addAnimation("moving",ship_Image)
}

function draw() {
  background("blue");
  

  if(sea.x<0){
    sea.x=400
  }
  sea.scale=0.3
  ship.scale=0.2  
 drawSprites()
}