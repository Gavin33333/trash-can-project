
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper1 = new paper(750,650,20)
	ground1 = new Ground(675,height,800,20)

	boxPosition=width/2-100
	boxY=610;


	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
	boxleftSprite.shapeColor=color(255,0,0);

	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
	World.add(world, boxLeftBody);

	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
	boxBase.shapeColor=color(255,0,0);

	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
	World.add(world, boxBottomBody);

	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
	boxleftSprite.shapeColor=color(255,0,0);

	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground1.display();
  drawSprites();
 
}

function Throw(){
	if(KeyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.Body.position,{x:85, y:-85})
	}

}

