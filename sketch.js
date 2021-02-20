var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var platform;

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
	packageSprite.visible=false

	helicopterSprite=createSprite(100, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	helicopterSprite.velocityX=(4)

	groundSprite=createSprite(width/2, height-25, width,10);
	groundSprite.shapeColor=color(255)

	platform=createSprite(400, height-36, 150,10);
	platform.shapeColor = "grey"


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	

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
  
  if(helicopterSprite.x===400){
	helicopterSprite.velocityX=0;
	packageSprite.visible=true
  }

  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW && helicopterSprite.velocityX===0) {
    Matter.Body.setStatic(packageBody,false);
  }
}