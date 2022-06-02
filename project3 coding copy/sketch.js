//Moving sprites
let bOne, bTwo,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20;
let direction = 90; //bTwo initial direction moving down


function setup() {
    createCanvas(windowWidth, windowHeight);
  

  //create the sprites
  bOne = createSprite(random(400), 60 + random(512), 100, 80);
  bOne.addAnimation("floating", "1-original.png");
  
  bTwo = createSprite(windowWidth/2 + random(windowHeight/2), 700 - random(512), 70, 90);
  bTwo.addAnimation("floating", "2.png");
  
  b3 = createSprite(windowWidth/2 + random(windowHeight/2), 800 - random(300), 90, 60);
  b3.addAnimation("floating", "3.png");

  b4 = createSprite(60 + random(windowHeight/2), 300 + random(512), 60, 70);
  b4.addAnimation("floating", "4.png");

  b5 = createSprite(windowWidth/2 + random(windowHeight/2), 400 + random(400), 70, 50);
  b5.addAnimation("floating", "5.png");

  b6 = createSprite(80 + random(windowHeight/2), 50 + random(490), 80, 60);
  b6.addAnimation("floating", "6.png");

  b7 = createSprite(windowWidth/2 + random(windowHeight/2), 300 - random(300), 30, 50);
  b7.addAnimation("floating", "7.png");

  b8 = createSprite(random(100) + random(windowHeight/2), 400 + random(700), 40, 50);
  b8.addAnimation("floating", "8.png");

  b9 = createSprite(windowWidth/2 + random(windowHeight/2), 600 + random(350), 60, 100);
  b9.addAnimation("floating", "9.png");

  b10 = createSprite(100 + random(windowHeight/2), 720 - random(512), 20, 80);
  b10.addAnimation("floating", "10.png");

  b11 = createSprite(windowWidth/2 + random(windowHeight/2), 720 - random(420), 40, 50);
  b11.addAnimation("floating", "11.png");

  b12 = createSprite(windowWidth/2 + random(windowHeight/2), 720 + random(200), 90, 50);
  b12.addAnimation("floating", "12.png");

  b13 = createSprite(windowWidth/2 + random(windowHeight/2), 200 + random(380), 50, 40);
  b13.addAnimation("floating", "13.png");

  b14 = createSprite(windowWidth/2 + random(windowHeight/2), 720 - random(430), 30, 90);
  b14.addAnimation("floating", "14.png");

  b15 = createSprite(700+ random(windowHeight/2), 800 - random(90), 100, 90);
  b15.addAnimation("floating", "15.png");

  b16 = createSprite(windowWidth/2 + random(windowHeight/2), 720 + random(280), 70, 70);
  b16.addAnimation("floating", "16.png");
  
  b17 = createSprite(400 + random(windowHeight/2), 400 + random(512), 30, 80);
  b17.addAnimation("floating", "17.png");

  b18 = createSprite(windowWidth/2 + random(windowHeight/2), 720 - random(360), 80, 100);
  b18.addAnimation("floating", "18.png");

  b19 = createSprite(600 + random(windowHeight/2), 300 - random(90), 40, 80);
  b19.addAnimation("floating", "19.png");

  b20 = createSprite(windowWidth/2 + random(windowHeight/2), 720 + random(400), 100, 30);
  b20.addAnimation("floating", "20-small.png");
}

// var canvas= document.getElementById("myCanvas");
// if(canvas.getContext){
// var ctx= canvas.getContext("2d");
// ctx.font="30px Comic Sans MS";
// ctx.fillStyle="grey"
// ctx.textAlign="center";
// ctx.fillText("Click the Bubbles to explore", canvas.width/2, canvas.height/2);}

function draw() {
   background(255,255,255);

  //aside of setting the velocity directly you can move a sprite
  //by providing a speed and an angle
  direction += 2;
  //speed, angle
  bTwo.setSpeed(2, direction);
  b4.setSpeed(2.5,direction);
  b6.setSpeed(1.5,direction);
  b8.setSpeed(3,direction);
  b10.setSpeed(1.5,direction);
  b12.setSpeed(2.5,direction);
  b14.setSpeed(0.5,direction);
  b16.setSpeed(-2.5,direction);
  b18.setSpeed(1.5,direction);
  b20.setSpeed(2,direction);
  bOne.setSpeed(0.2, direction);
  b3.setSpeed(2,direction);
  b5.setSpeed(0.3,direction);
  b7.setSpeed(0.6,direction);
  b9.setSpeed(2,direction);
  b11.setSpeed(0.5,direction);
  b13.setSpeed(0.7,direction);
  b15.setSpeed(-3,direction);
  b17.setSpeed(0.8,direction);
  b19.setSpeed(0.5,direction);
//   //you can rotate the sprite according the direction it is moving

  bTwo.rotateToDirection = false;
  bOne.rotateToDirection = false;
  b3.rotateToDirection= true;
  b4.rotateToDirection= false;
  b5.rotateToDirection = true;
  b6.rotateToDirection = false;
  b7.rotateToDirection= true;
  b8.rotateToDirection= false;  
  b9.rotateToDirection = true;
  b10.rotateToDirection = true;
  b11.rotateToDirection= false;
  b12.rotateToDirection= true;
  b13.rotateToDirection = true;
  b14.rotateToDirection = true;
  b15.rotateToDirection= false;
  b16.rotateToDirection= false; 
  b17.rotateToDirection = true;
  b18.rotateToDirection = true;
  b19.rotateToDirection= false;
  b20.rotateToDirection= true;
//   //or by applying a force toward a point
//   //force (acceleration), pointx, pointy
  bOne.attractionPoint(0.6, mouseX, mouseY);
  bTwo.attractionPoint(0.2, mouseX, mouseY);
  b3.attractionPoint(0.5, mouseX, mouseY);
  b4.attractionPoint(0.7, mouseX, mouseY);
  b5.attractionPoint(0.2, mouseX, mouseY);
  b6.attractionPoint(0.3, mouseX, mouseY);
  b7.attractionPoint(1, mouseX, mouseY);
  b8.attractionPoint(0.8, mouseX, mouseY);
  b9.attractionPoint(0.2, mouseX, mouseY);
  b10.attractionPoint(0.1, mouseX, mouseY);
  //since the force keeps incrementing the speed you can
//   //set a limit to it with maxSpeed
  bOne.maxSpeed = 2;
  b3.maxSpeed= 4;
  b5.maxSpeed= 3;
  b7.maxSpeed= 2.5;
  b9.maxSpeed= 3;
  b11.maxSpeed= 4;
  b13.maxSpeed= 5;
  b15.maxSpeed= 2;
  b17.maxSpeed= 3.5;
  b19.maxSpeed= 3;

  bOne.onMousePressed = function () {
         window.open("bOne2.html", "_self");
  };

  bTwo.onMouseOver = function () {
   this.scale = 1.5;
  };
  bOne.onMouseOver = function () {
   this.scale = 1.5;
  };
  b3.onMouseOver = function () {
    this.scale = 1.5;
  };
  b4.onMouseOver = function () {
    this.scale = 1.5;
  };
  b5.onMouseOver = function () {
    this.scale = 1.5;
  };
  b6.onMouseOver = function () {
    this.scale = 1.5;
  };
  b7.onMouseOver = function () {
    this.scale = 1.5;
  };
  b8.onMouseOver = function () {
    this.scale = 1.5;
  };
  b9.onMouseOver = function () {
    this.scale = 1.5;
  };
  b10.onMouseOver = function () {
    this.scale = 1.5;
  };
  b11.onMouseOver = function () {
    this.scale = 1.5;
  };
  b12.onMouseOver = function () {
    this.scale = 1.5;
  };
  b13.onMouseOver = function () {
    this.scale = 1.5;
  };
  b14.onMouseOver = function () {
    this.scale = 1.5;
  };
  b15.onMouseOver = function () {
    this.scale = 1.5;
  };
  b16.onMouseOver = function () {
    this.scale = 1.5;
  };
  b17.onMouseOver = function () {
    this.scale = 1.5;
  };
  b18.onMouseOver = function () {
    this.scale = 1.5;
  };
  b19.onMouseOver = function () {
    this.scale = 1.5;
  };
  b20.onMouseOver = function () {
    this.scale = 1.5;
  };




  bTwo.onMouseOut = function () {
    this.scale = 1;
  };
  bOne.onMouseOut = function () {
    this.scale = 1;
  };
  b3.onMouseOut = function () {
    this.scale = 1;
  };
  b4.onMouseOut = function () {
    this.scale = 1;
  };
  b5.onMouseOut = function () {
    this.scale = 1;
  };
  b6.onMouseOut = function () {
    this.scale = 1;
  };
  b7.onMouseOut = function () {
    this.scale = 1;
  };
  b8.onMouseOut = function () {
    this.scale = 1;
  };
  b9.onMouseOut = function () {
    this.scale = 1;
  };
  b10.onMouseOut = function () {
    this.scale = 1;
  };
  b11.onMouseOut = function () {
    this.scale = 1;
  };
  b12.onMouseOut = function () {
    this.scale = 1;
  };
  b13.onMouseOut = function () {
    this.scale = 1;
  };
  b14.onMouseOut = function () {
    this.scale = 1;
  };
  b15.onMouseOut = function () {
    this.scale = 1;
  };
  b16.onMouseOut = function () {
    this.scale = 1;
  };
  b17.onMouseOut = function () {
    this.scale = 1;
  };
  b18.onMouseOut = function () {
    this.scale = 1;
  };
  b19.onMouseOut = function () {
    this.scale = 1;
  };
  b20.onMouseOut = function () {
    this.scale = 1;
  };
  //draw the sprite
  drawSprites();
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }