const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snow1,snow2,snow3,snow4,snow5,snow6,snow7,snow8,snow9,snow10;
var snow11,snow12,snow13,snow14,snow15,snow16,snow17,snow18,snow19,snow20;
var backgroundsnow1;

function preload(){
  backgroundsnow1 = loadImage("snow1.jpg");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  snow1 = new Snow(100,0,50,50);
  snow1.lifetime=75;
  snow2 = new Snow(200,-20,50,50);
  snow2.lifetime=75;
  snow3 = new Snow(300,-100,50,50);
  snow3.lifetime=75;
  snow4 = new Snow(400,-50,50,50);
  snow4.lifetime=75;
  snow5 = new Snow(500,-80,50,50);
  snow5.lifetime=75;
  snow6 = new Snow(600,-40,50,50);
  snow6.lifetime=75;
  snow7 = new Snow(650,-60,50,50);
  snow7.lifetime=75;
  snow8 = new Snow(550,60,50,50);
  snow8.lifetime=75;
  snow9 = new Snow(450,40,50,50);
  snow9.lifetime=75;
  snow10 = new Snow(700,50,50,50);
  snow10.lifetime=75;
  snow11 = new Snow(100,120,50,50);
  snow11.lifetime=75;
  snow12 = new Snow(200,200,50,50);
  snow12.lifetime=75;
  snow13 = new Snow(300,140,50,50);
  snow13.lifetime=75;
  snow14 = new Snow(400,150,50,50);
  snow14.lifetime=75;
  snow15 = new Snow(500,100,50,50);
  snow15.lifetime=75;
  snow16 = new Snow(600,70,50,50);
  snow16.lifetime=75;
  snow17 = new Snow(650,160,50,50);
  snow17.lifetime=75;
  snow18 = new Snow(550,110,50,50);
  snow18.lifetime=75;
  snow19 = new Snow(450,-140,50,50);
  snow19.lifetime=75;
  snow20 = new Snow(700,-150,50,50);
  snow20.lifetime=75;


}

function draw() {
  background(backgroundsnow1);
  
  Engine.update(engine);  

  if(frameCount%75 == 0){
    snow1 = new Snow(100,0,50,50);
  snow1.lifetime=75;
  snow2 = new Snow(200,-20,50,50);
  snow2.lifetime=75;
  snow3 = new Snow(300,-100,50,50);
  snow3.lifetime=75;
  snow4 = new Snow(400,-50,50,50);
  snow4.lifetime=75;
  snow5 = new Snow(500,-80,50,50);
  snow5.lifetime=75;
  snow6 = new Snow(600,-40,50,50);
  snow6.lifetime=75;
  snow7 = new Snow(650,-60,50,50);
  snow7.lifetime=75;
  snow8 = new Snow(550,60,50,50);
  snow8.lifetime=75;
  snow9 = new Snow(450,40,50,50);
  snow9.lifetime=75;
  snow10 = new Snow(700,50,50,50);
  snow10.lifetime=75;
  snow11 = new Snow(100,120,50,50);
  snow11.lifetime=75;
  snow12 = new Snow(200,200,50,50);
  snow12.lifetime=75;
  snow13 = new Snow(300,140,50,50);
  snow13.lifetime=75;
  snow14 = new Snow(400,150,50,50);
  snow14.lifetime=75;
  snow15 = new Snow(500,100,50,50);
  snow15.lifetime=75;
  snow16 = new Snow(600,70,50,50);
  snow16.lifetime=75;
  snow17 = new Snow(650,160,50,50);
  snow17.lifetime=75;
  snow18 = new Snow(550,110,50,50);
  snow18.lifetime=75;
  snow19 = new Snow(450,-140,50,50);
  snow19.lifetime=75;
  snow20 = new Snow(700,-150,50,50);
  snow20.lifetime=75;
  }
  
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();
  snow10.display();
  snow11.display();
  snow12.display();
  snow13.display();
  snow14.display();
  snow15.display();
  snow16.display();
  snow17.display();
  snow18.display();
  snow19.display();
  snow20.display();

  drawSprites();
}

