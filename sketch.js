const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var ground;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
     
  box1=new Box(600,100,50,50);
  box2=new Box(600,200,50,50);
  box3=new Box(600,300,50,50);
  box4=new Box(600,400,50,50);
  box5=new Box(700,250,50,50);
  box6=new Box(700,350,50,50);
  box7=new Box(800,150,50,50);
   ground=new Ground(0,200,50,50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
   ground.display();
}
