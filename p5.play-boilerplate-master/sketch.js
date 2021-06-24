const World = Matter .World;
const Engine = Matter .Engine;
const Bodies = Matter .Bodies;

var e, w, ground, ball;

function setup() {
  createCanvas(400,400);
  e = Engine.create();
  w = e.world;
  ground = Bodies.rectangle(200,350,400,80,{isStatic:true});
  ball = Bodies.circle(200,200, 15,{ restitution: 1});
  World.add(w,ground);
  World.add(w,ball);
  Engine.run(e);
}

function draw() {
  background("orange");
  rectMode(CENTER);
  rect (ground.position.x, ground.position.y, 400, 80);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,15,15);

}