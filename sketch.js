var survivalTime=0
var monkey , monkey_running
var ground
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
  
   monkey=createSprite(80,315,20,20)
   monkey.addAnimation("moving" , monkey_running);
   monkey.scale=0.1
  
   ground = createSprite(400,350,900,20);
   ground.velocityX = -4
   ground.x = ground.width /2;
   console.log(ground.x)
  
  stoneGroup = new Group();
  bananaGroup = new Group();
  
 
  score=0;
  
}
 


function draw() {
  background(225)
 if(keyDown("space") && monkey.y >= 159) {
     monkey.velocityY = -12;
 }
   monkey.velocityY = monkey.velocityY + 0.8
  if (ground.x < 0){
    ground.x = ground.width/2;   
  }
   monkey.collide(ground)
  
   spawnFruits();
   spawnStone();
  
  if(bananaGroup.isTouching(monkey)){
       score=score+1
    
    }
    if(stoneGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        stoneGroup.setVelocityXEach(0);
        bananaGroup.setVelocityXEach(0);
        stoneGroup.setLifetimeEach(-1);
        bananaGroup.setLifetimeEach(-1);
    
    
    }
   stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 300,50);
  
  drawSprites();
}
function spawnFruits() {
  //write code here to spawn the fruits
  if (frameCount % 100 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,220));
    banana.addImage(bananaImage);
    banana.scale = 0.2;
    banana.velocityX = -3;
    
    
  
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each banana to the group
    bananaGroup.add(banana);
  }
}
  function spawnStone() {
  //write code here to spawn the stones
  if (frameCount % 200 === 0) {
    var stone = createSprite(600,335,40,10);
    stone.addImage(obstacleImage);
    stone.scale = 0.09;
    stone.velocityX = -3;
    
 //assign lifetime to the variable
 stone.lifetime = 200;
       
//add each banana to the group
 stoneGroup.add(stone);
    
  }
  }