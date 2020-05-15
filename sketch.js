var car,wall;
var speed,weight;
var rect;
function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight= random(400,1500);
  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  wall = createSprite(1350, 200, 60, 400);
  rect = createSprite(50,200,50,50);
  rect.velocityX = speed;
}

function draw() {
  background(80,80,80);  
  if(rect.isTouching(wall))
  {rect.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22500
    if(deformation>180){
       rect.shapeColor = "red";
    }
    if(deformation<180 && deformation>100){
       rect.shapeColor = "yellow";
    }
    if(deformation<100){
       rect.shapeColor = "green";
    }
   }
  drawSprites();
  
}