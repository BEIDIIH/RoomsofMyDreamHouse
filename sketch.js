/***********************************************************************************
	Rooms of My Dream House - TEMPLATE
	by Beidi Han

	
	Notes:
	- I got some trouble on chaging the size of my png.


***********************************************************************************/

// Array of images
var images = [];
var midX;
var midY;
var strings = [];
var startY;
var lineHeight = 40;

// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 20;

// load all images into an array
function preload() {
  images[0] = loadImage('assets/L1.png');
  images[1] = loadImage('assets/L2.png');
  images[2] = loadImage('assets/L3.png');
  images[3] = loadImage('assets/D1.png');
  images[4] = loadImage('assets/D2.png');
  images[5] = loadImage('assets/D3.png');
  images[6] = loadImage('assets/K1.png');
  images[7] = loadImage('assets/K2.png');
  images[8] = loadImage('assets/K3.png');
  images[9] = loadImage('assets/1B.png');
  images[10] = loadImage('assets/2B.png');
  images[11] = loadImage('assets/3B.png');
  images[12] = loadImage('assets/B1.png');
  images[13] = loadImage('assets/B2.png');
  images[14] = loadImage('assets/B3.png');
  images[15] = loadImage('assets/BT1.png');
  images[16] = loadImage('assets/BT2.png');
  images[17] = loadImage('assets/BT3.jpg');
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(windowWidth,windowHeight);

  // Center our drawing objects
  midX = width/2;
  midY = height/2;
  startY = 300;
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(30);

  // set to one for startup
  drawFunction = drawLivingRoom;
}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background(255);

  // will call your state machine function
  drawFunction();
}

//========= TEMPLATE: modify these functions, INSIDE the function blocks only =========

//-- drawOne() will draw the image at index 0 from the array
drawLivingRoom = function() {
   image(images[0],1400, midY);
   image(images[2],1400, 700, midX,height);
   image(images[1],300, midY, midX, height);

   loadArray();

   fill(0,0,0);
}

//-- drawTwo() will draw the image at index 1 from the array
drawDiningRoom = function() {
   image(images[3],midX, midY);
   image(images[4],midX, midY);
   image(images[5],1400, 700);

   fill(250);
   text("Press L back to Living Room", width/2, height - gTextOffset);
   text("Press K go to Kitchen", width/2, height - 60);
}

//-- drawOne() will draw the image at index 2 from the array
drawKitchen = function() {
   image(images[6],midX, midY);
   image(images[8],midX, midY);
   image(images[7],midX, midY);
   

   fill(0,0,0);
   text("Press L back to Living Room", width/2, height - gTextOffset);
   text("Press D go to Dining Room", width/2, height - 60);
}

//-- drawOne() will draw the image at index 3 from the array
drawBedroomI = function() {
   image(images[9],530, midY);
   image(images[10],1500, midY);
   image(images[11],930, 100);

   fill(0,0,0);
   text("Press L back to Living Room", width/3, height/3 - gTextOffset);
    text("Press 2 go to the other Bedroom", width/3, height/3 - 60);
}

//-- drawOne() will draw the image at index 4 from the array
drawBedRoomII = function() {
   image(images[12],1800, 250);
   image(images[13],500, midY);
   image(images[14],midX, 350);

   fill(0,0,0);
   text("Press L back to Living Room", width/2, height/2 - gTextOffset);
   text("Press 1 go to the other Bedroom", width/2, height/2 - 60);
}

//-- drawSplash() will draw the image at index 4 from the array
drawBathroom = function() {
   image(images[17],midX, midY);
   image(images[15],1900, 600);
   image(images[16],950, 230);
  
   text("Press L back to Living Room", width/2, height - gTextOffset);
}


// array
function loadArray() {
  strings[0] = "Press 'D' to Dining room";
  strings[1] = "Press 'K' to Kitchen";
  strings[2] = "Press '1' to Bedroom I";
  strings[3] = "Press '2' to Bedroom II";
  strings[4] = "Press 'B' to Bathroom";
  strings[5] = "If you want back to the Living Room";
  strings[6] = "Please press 'L'";
  fill(0);
  for( let i = 0 ; i < strings.length; i++ ) {
    text( strings[i], 300, startY + (i * lineHeight) )
  }
}


//========= TEMPLATE: add or change interface functions, as you like =========

// Change the drawFunction variable based on your interaction
function keyTyped() {
  if( drawFunction === drawLivingRoom ) {
  if( key === 'd' ) {
  	drawFunction = drawDiningRoom;
  }
  else if( key === 'k' ) {
  	drawFunction = drawKitchen;
  }
  else if( key === '1' ) {
  	drawFunction = drawBedroomI;
  }
  else if( key === '2' ) {
  	drawFunction = drawBedRoomII;
  }
  else if( key === 'b' ) {
  	drawFunction = drawBathroom;
  }
 } 

  if( drawFunction === drawDiningRoom ) {
  if( key === 'l' ) {
    drawFunction = drawLivingRoom;
  }
  else if( key === 'k' ) {
    drawFunction = drawKitchen;
  }
}

  if( drawFunction === drawKitchen ){
  if( key === 'l' ) {
    drawFunction = drawLivingRoom;
  }
  else if( key === 'd' ) {
    drawFunction = drawDiningRoom;
  }
}

  if( drawFunction === drawBedroomI ){
  if( key === 'l' ) {
    drawFunction = drawLivingRoom;
  }
  else if( key === '2' ) {
    drawFunction = drawBedRoomII;
  }
}

  if( drawFunction === drawBedRoomII ){
  if( key === 'l' ) {
    drawFunction = drawLivingRoom;
  }
  else if( key === '1' ) {
    drawFunction = drawBedroomI;
  }
}


  if( drawFunction === drawBathroom ){
  if( key === 'l' ) {
    drawFunction = drawLivingRoom;
  }
}
}