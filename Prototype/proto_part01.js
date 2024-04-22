

Stars = Array(10);    //Sets up stars
let totalStars = 0;

lasers = Array(10);   //Set up Laser
let totalLasers = 0;

let Ship;   //Set up Ship

let timer;    //Set up Timer

let ScoreTimer = 0;

let GameOver = false;

function setup() {
  createCanvas(600, 600);
  Ship = new PlayerObject();        //makes ship
  timer = new TimeCounter(300);     //makes counter
  timer.start();                     //starts timer
  ScoreTimer = millis();


}

function draw() {
  background(0);

  if (GameOver){                    //goes off when player hits laser
    textSize(50);
    textAlign(CENTER);
    text("Game Over.", width/2,height/2);    //fades screen and dsiplays text
    textSize(14);
    text("Your Scrore was: " + ScoreTimer, width/2,height/2+40);
  }

  if (GameOver == false){
  Ship.display();             //Displays player ship
  Ship.movement();            //player ship movement
  
  Stars[totalStars] = new Star();   //initializies background stars
  totalStars++ ;
 

  for (let i = 0; i < totalStars; i++ ) {
    Stars[i].display();                     //makes background stars show and move
    Stars[i].movement();
  }

  if (timer.isFinished()) {
    lasers[totalLasers] = new Laser();    //initializes lasers
    totalLasers++ ;                       

    timer.start();                        //starts timer to make lasers appear faster
  }

  for (let i = 0; i < totalLasers; i++ ) {
    lasers[i].display();                         //draws lasers and moves them
    lasers[i].movement();
    if (Ship.impact(lasers[i])) {                //registers if ship has been hit by a laser
      Ship.Death();                          //tells code the game is over
      GameOver = true;
    }
  }
  }
}


