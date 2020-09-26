var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rect1Sprite, rect1, rect2Sprite, rect2, rect3Sprite, rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	rect1Sprite=createSprite(width/1.6,height-78, 20,100);
	rect1Sprite.shapeColor= "red";

	rect2Sprite=createSprite(width/2,height-38, 200,20);
	rect2Sprite.shapeColor= "red";

	rect3Sprite=createSprite(width/2.7,height-78, 20,100);
	rect3Sprite.shapeColor= "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
	rect2= Bodies.rectangle(200 , 20 , 20 , {restitution:0.4, isStatic:true});
	World.add(world, rect2);

	rect1= Bodies.rectangle(width/2 , 100 , 20 , {restitution:0.4, isStatic:false});
	World.add(world, rect1);

	rect3= Bodies.rectangle(width/2 , 100 , 20 , {restitution:0.4, isStatic:false});
	World.add(world, rect3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x
  packageSprite.y= packageBody.position.y
  //rect1Sprite.x= rect1.position.x;
 // rect1Sprite.y= rect1.position.y;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic( packageBody , false);
  }
}



