
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var left;
var right;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_optinons;
		 ball_optinons={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
		
	}
	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);

	





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



