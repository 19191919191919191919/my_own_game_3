const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var spaceship;
var bg;
var ground;
var Aestroid1,Aestroid2,Aestroid3,Aestroid4,Aestroid5




function setup(){
    createCanvas(displayWidth,displayHeight);
    engine=Engine.create();
    world=engine.world;
    spaceship=new Spaceship(200,200,250,250);
    ground=new Ground(5,750,width,10)
    //Aestroid1=new Aestroid(500,500,170,170)
    ////Aestroid2=new
    
bg= loadImage("download.png")




}
function draw(){
    background(bg);
Engine .update (engine);
spaceship.display()
ground.display()
//Aestroid1.display()
}