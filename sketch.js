var thickness,wall;

var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90)
  weight=random(400,1500)
thickness=random(22,83)
  bullet=createSprite(50,200,50,50);
  bullet.velocityX = speed;

  wall=createSprite(1200,200,height/2)
}

function draw() {
  background(255,255,255);  

if(wall.x-bullet (bullet.width+wall.width)/2 )
{
  bullet.velocityX=0
  var deformation=0.5 * weight * speed/22509;
if(deformation){
  bullet.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100)
{
  bullet.shapeColor=color(230,230,0)
}
if(deformation<100)
{
  bullet.shapeColor=color(0,255,0);
}
}

var deformation=0.5 * weight * speed * speed/22500;

if(deformation>180)
{
  bullet.shapeColor=color(255,0,0)
}


if(100>deformation>180)
{
  bullet.shapeColor=color(255,0,0)
}

if(deformation<100)
{
  bullet.shapeColor=color(255,0,0)
}
  drawSprites();
}