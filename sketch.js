const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var hero ;
 var fly;
 var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
 var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;
var monster

function preload() {
 backgroundImg = loadImage("images/GamingBackground.png");
  

}

function setup() {
  var canvas = createCanvas(1200,650);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,600,1200,20);
monster= new MonsterClass (250,150,20,10)
 
  block1 = new Block (700,550,50,50)
  block2 = new Block(700,500,50,50)
  block3 = new Block(700.450,50,50)
  block4 = new Block (700,400,50,50)
  block5 = new Block(700,350,50,50)
  block6 = new Block (750,300,50,50)
  block7 = new Block (750,550,50,50)
  block8 = new Block(750,500,50,50)
  block9 = new Block (750,450,50,50)
  block10 = new Block (750,400,50,50)
  block11 = new Block (650,550,50,50)
  block12 = new Block(650,500,50,50)
  block13 = new Block(650.450,50,50)
  block14 = new Block (650,400,50,50)
  block15 = new Block(650,350,50,50)
  block16 = new Block (600,300,50,50)
  block17 = new Block (600,550,50,50)
  block18 = new Block(600,500,50,50)
  block19 = new Block (600,450,50,50)
 blocK20 = new Block (600,400,50,50)


  hero = new HeroClass(200,100,20,20)
  fly= new Fly (hero.body,{x:500,y:250})
}
function draw() {
  background(backgroundImg);
  Engine.update(engine);

  ground.display()


  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  block17.display()
  block18.display()
  block19.display()
 // block20.display()

hero.display()

  fly.display()

  monster.display()
}

function mouseDragged(){
 Matter.Body.setPosition(HeroClass.body,{x:mouseX , y:mouseY})
}























