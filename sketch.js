var ship, ship_moving, edges;
var groundImage;

function preload(){
  ship_moving = loadAnimation("ship-1.png","ship-3.png","ship-4.png");
  groundImage = loadImage("sea                      .png")
}

function setup(){
  createCanvas(600,600);
  
  // creating ship
  ship = createSprite(50,160,20,50);
  ship.addAnimation("moving", ship_moving);
  edges = createEdgeSprites();
  
  //adding scale and position to ship
  ship.scale = 0.5;
  ship.x = 50
  edges =createSprite(300,180,600,20)
  ground.addImage(groundImage)
  ground.velocityX=-8
}


function draw(){
  //set background color 
  background("grey");
  if(ground.x<0){ground.x=ground.width/2
  }
  
  //logging the y position of the ship
  console.log(ship.y)
  
  //ship moving on Xaxis with mouse
ship.x=World.mouseX
  {
    ship.veslocityY = ship.velocityY + 0.5;
      
    //stop trex from falling down
    ship.collide(ground)
    drawSprites();}