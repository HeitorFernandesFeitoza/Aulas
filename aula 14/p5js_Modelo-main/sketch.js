var ball = {
  x: 200,
  y: 150,
  r:23,
  vx: 5,
  sc: "red"
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(ball.sc)
  circle(ball.x,ball.y,ball.r)
  ball.x += ball.vx;
}