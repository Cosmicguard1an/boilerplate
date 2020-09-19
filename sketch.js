const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var myEngine,myWorld;
var object

function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  myWorld = myEngine.world 
  object = Bodies.rectangle(200,100)
  World.add(myWorld,object)
  console.log(object)
  

}

function draw() {
  background(255,255,255,255);  
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,100)


  drawSprites();
}









