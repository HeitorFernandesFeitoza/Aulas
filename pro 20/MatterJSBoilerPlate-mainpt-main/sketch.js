
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ball2;
var box;
let engine;
let world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var ball_options = {
		restitution : 0.95,
		frictionAir : 0.01
	  }

	  
  var ball2_options = {
    restitution : 1.10,
    frictionAir : 0.05
  }

  var box_options = {
    isStatic : true
  }

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(300,10,20,ball2_options);
  World.add(world,ball2);

  box = Bodies.rectangle(300,200,100,20,wall_options);
  World.add(world,wall);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}
  



function draw() {
  rectMode(CENTER);
  Engine.run(engine);
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  rect(box.position.x,box.position.y,100,20);
  
  drawSprites();
 
}



