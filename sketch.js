//Creates all the variables
var monkey, ground, bananagroup, obstaclegroup, score, bananaimg, obstacleimg, playerimg, backimg, backsprite;


//Is the function preload
function preload(){
  
  //Creates the back im
  backimg = loadImage("jungle.jpg");
  
  //Creates the player animation
  playerimg = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  //Create the banana img
  bananaimg = loadImage("Banana.png");
  
  //Creates the obstacle img
  obstacleimg = loadImage("stone.png");
  
  
}

//Is the funciton setup
function setup() {
  
  //Creates the Canvas
  createCanvas(600,300);
  
  //Creates the monke
  monkey = createSprite(100,260,20,20);
  monkey.addAnimation("player_running", playerimg);
  monkey.scale = 0.1;
  
  //Creates the ground sprite
  ground = createSprite(300,295,1200,20);
  ground.depth = 0;
  ground.scale = 0.6;
  ground.visible = false;
  
  //Creates the backsprite
  backsprite = createSprite(300,-100,20,20);
  backsprite.addImage(backimg);
  backsprite.scale = 2;
  backsprite.depth = 0;
  backsprite.x = backsprite.width / 2;
  
  //Creates the score
  score = 0;
  
  //Creates the bananagroup
  bananagroup = new Group();
  
  //Creates the obstacle group
  obstaclegroup = new Group();
  
 
  
}

//Is the funciton draw
function draw(){
   
  //Creates the background
  background(255); 
  
  //When the space is pressed the monkey jumps
  if (keyDown("space") && monkey.y > 257) { 
    
    monkey.velocityY = -12;
    
  }
  
  //This adds gravity to the monkey
  monkey.velocityY = monkey.velocityY + 0.5;
  
  //The monkey then collides with the gorund
  monkey.collide(ground);
  
  //Gives the ground velocity
  backsprite.velocityX = -5;
  
  //Creates an infinite ground
  if (backsprite.x < 0) {
    
    backsprite.x = backsprite.width / 2;
    
  }
  
  //The monkey gets smaller when touching an obstalce
  if (obstaclegroup.isTouching(monkey)) {
    
    monkey.scale = 0.1;
    
  }
  
  //The score increaes when touching the banana
  if (bananagroup.isTouching(monkey)) {
    
    score = score + 2;
    
    //For some reason the code below didnt work, I searched it up, looked on code.org, but coundn't find anything for destorying a sprite in a group
    
    //bananagroup.destroyEach(banana);
    
  }
  
  //This increaes the monkeys size every 10 score
  switch(score) {
      
    case 10: monkey.scale = 0.12;
      break;
    case 20: monkey.scale = 0.14;
      break;
    case 30: monkey.scale = 0.16;
      break;
    case 40: monkey.scale = 0.18;
      break;
      default: break;
      
      
  }

  //This calls the functions, draws the sprites, and displays the score
  food();
  
  obstacle();
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:" + score, 500,50);

}

//This is the function food
function food() {
  
  //This creates the banana sprite every 80 frames
  if (frameCount % 80 === 0) {
    
    var banana = createSprite(650,random(100,200),20,20);
    banana.addImage(bananaimg);
    
    banana.scale = 0.05;
    
    banana.velocityX = -5;
    banana.lifetime = 400/5 + 50;
    
    bananagroup.add(banana);
    
  }
  
  
}

//This is the obstacle group
function obstacle() {
  
  //This creates the obstacle sprites every 120 frames
  if (frameCount % 120 === 0) {
  
  var obstacle = createSprite(650,257,20,20);
  obstacle.addImage(obstacleimg);
  
  obstacle.scale = 0.2;
  
  obstacle.velocityX = -5;
  
  obstacle.lifetime = 400/5 + 50;
    
  obstaclegroup.add(obstacle);
  
  }
  
}