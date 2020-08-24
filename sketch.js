const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var  engine, world;
var box1;
var stone1;
var stand1;
var ground1;


function setup() {
  createCanvas(1200,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world;
 
  box1 = new mangoes(1005,200,30,40);
  box2 = new mangoes(1005,200,30,40);
  box3 = new mangoes(1005,200,30,40);
  box4 = new mangoes(1005,200,30,40);
  box5 = new mangoes(1005,200,30,40);
  tree1 = new tree(1005,210,350,350);
  boy1 = new boy(200,340,150,400);
  stand1 = new stand(1005,100,20,10);
  stone1 = new stone(200,300);
  
  ground1 = new Ground(600,400,1200,40);
   
  launcher1 = new launcher(stone1.body,{x:100, y:210});

}

function draw() {
  background(223,223,223);  
  Engine.update(engine);
  strokeWeight(4);

  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  tree1.display();
  stand1.display();
  boy1.display();
  stone1.display();
  launcher1.display();

}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher1.fly();
}