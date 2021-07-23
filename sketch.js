const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snow,snow1,snowImage,snow2,snow3,snow4;
var backgroundsnow1;

function preload(){
  backgroundsnow1 = loadImage("snow1.jpg");
  snowImage = loadImage("snow4.webp");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  snow = new Snow(random(0,800),0,50,50);
  snow.lifetime=75;
}

function draw() {
  background(backgroundsnow1);
  
  Engine.update(engine);  

  if(frameCount%5 == 0){
  snow1 = createSprite(random(0,800),0,50,50);
  snow1.addImage(snowImage);
  snow1.velocityY = 10;
  snow1.scale=0.1
  lifetime=75;
  snow2 = createSprite(random(0,800),0,50,50);
  snow2.addImage(snowImage);
  snow2.velocityY = 10;
  snow2.scale=0.1
  lifetime=75;
  snow3 = createSprite(random(0,800),0,50,50);
  snow3.addImage(snowImage);
  snow3.velocityY = 10;
  snow3.scale=0.1
  lifetime=75;
  snow4 = createSprite(random(0,800),0,50,50);
  snow4.addImage(snowImage);
  snow4.velocityY = 10;
  snow4.scale=0.1
  lifetime=75;
  }
  
  snow.display();

  drawSprites();
}

