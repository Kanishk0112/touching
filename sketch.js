var fixedRect, MovingRect;



function setup() {
  createCanvas(800,400);
  
 fixedRect= createSprite(400, 200, 50, 80);
 MovingRect = createSprite(200,200,80,50);
MovingRect.shapeColor="blue";
fixedRect.shapeColor="blue";
MovingRect.debug=true;
fixedRect.debug= true;
}

function draw() {
  background(0,0,0);  
  drawSprites();
  MovingRect.x=mouseX;
  MovingRect.y=mouseY;
  if(MovingRect.x-fixedRect.x<fixedRect.width/2+MovingRect.width/2 &&
    fixedRect.x-MovingRect.x<MovingRect.width/2+fixedRect.width/2
    &&
    MovingRect.y-fixedRect.y<fixedRect.height/2+MovingRect.height/2 &&
    fixedRect.y-MovingRect.y<MovingRect.height/2+fixedRect.height/2
    
    
    ){
      MovingRect.shapeColor="white";
      fixedRect.shapeColor="white";
    }
    else{MovingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }
  }