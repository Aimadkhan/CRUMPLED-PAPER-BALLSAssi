var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    
	groundObj = new ground(width/2,670,width,20)
	leftside = new ground(1100,600,20,120)
	rightside = new ground(1200,600,20,120)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball_options={
	isStatic:false,
	restitution:0.3,
	fricition:0,
	density:1.2
}

ball = Bodies.circle(200,100,20,ball_options);
World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  ellipse(ball.position.x,ball.position.y,20)
  Engine.update(engine);
  drawSprites();
 
}
function keyPressed(){
if (keyCode===UP_ARROW)	{
	function hForce()
	{
	  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
	}
	
	function vForce()
	{
	  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
	}	
}

}


