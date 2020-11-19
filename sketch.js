
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof (500,100,600,30)
	bob1 = new Bob (310,400,60);
	bob2 = new Bob (430,400,60);
	bob3 = new Bob (550,400,60);
	bob4 = new Bob (670,400,60);
	bob5 = new Bob (750,400,60);

	rope1= new Rope(bob1.body,roof.body,-50*2,0);
    rope2= new Rope(bob2.body,roof.body,-25*2,0);
	rope3= new Rope(bob3.body,roof.body,-0*2,0);
	rope4= new Rope(bob4.body,roof.body,25*2,0);
	rope5= new Rope(bob5.body,roof.body,50*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  keyPressed();
  drawSprites();
 
}
function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100}); } 
} 



