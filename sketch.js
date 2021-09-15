const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint
var engine,world
var gr;
var box1,box2,box3,box4,box5;

var Ball;
var r;

function setup(){
createCanvas(1300, 800);

engine=Engine.create();
world=engine.world

gr=new ground(600,780,1250,20); 
box1=new box(800,100,70,70);
box2=new box(700,100,70,70);
box3=new box(600,100,70,70);
box4=new box(500,100,70,70);
box5=new box(400,100,70,70);
Ball=new ball(200,200,80,80);
r=new Rope(Ball.body,{x:500,y:50});
}
function draw(){
background(225);
Engine.update(engine);

Ball.display();
gr.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
r.display();
}
function mouseDragged(){
    Matter.Body.setPosition(Ball.body,{x:mouseX,y:mouseY})
}