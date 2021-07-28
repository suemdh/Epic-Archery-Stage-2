const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase,playerArcher;
var computer, computerBase,computerArcher;


var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 playerArcher=new PlayerArcher(width - 1200,playerBase.body.position.y - 180,120,120)
  arrow = new PlayerArrow(playerArcher.body.position.x,playerArcher.body.position.y,
    100, 10 );
 
 //computerArrow = new ComputerArrow(computerArcher.body.position.x,computerArcher.body.position.y, 75, 10);
 
 
 
  //Create Player Archer Object

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  
  //Create an arrow Object
  
  
}

function draw() {
  background(180);
keyPressed();
  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()



  //Display arrow();
  arrow.display();
  //computerArrow.display();
  //if Space (32) key is pressed call shoot function of playerArrow
  
  function keyPressed() {
    if(keyCode === 32) {
    arrow.shoot(playerArcher.body.angle);
      }
   }
  
  
}



