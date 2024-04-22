 
    class PlayerObject {
        constructor(){
            this.PlayerColor = color(0,255,0);
            this.PlayerX = width/2;
            this.PlayerY = height-40;
            this.PlayerSize = 25;
        
        
    
    
        this.display = function(){      //draws player object
            rectMode(CENTER);
            fill(this.PlayerColor);
            //rect(this.PlayerX, this.PlayerY, this.PlayerSize, this.PlayerSize);
            quad(this.PlayerX+5, this.PlayerY, this.PlayerX+15, this.PlayerY+10, this.PlayerX-15, this.PlayerY+10, this.PlayerX-5,this.PlayerY);
            rect(this.PlayerX,this.PlayerY+10,10,10)
            quad(this.PlayerX+5, this.PlayerY+10, this.PlayerX+10, this.PlayerY+17, this.PlayerX, this.PlayerY+15, this.PlayerX,this.PlayerY);
            quad(this.PlayerX-5, this.PlayerY+10, this.PlayerX-10, this.PlayerY+17, this.PlayerX, this.PlayerY+15, this.PlayerX,this.PlayerY);
            triangle(this.PlayerX-5,this.PlayerY,this.PlayerX,this.PlayerY-10,this.PlayerX+5,this.PlayerY);
            fill(50);
            triangle(this.PlayerX-3,this.PlayerY,this.PlayerX,this.PlayerY-7,this.PlayerX+3,this.PlayerY);
            
        }

        this.movement = function(){     //Handles all player movement
            if (keyIsDown(LEFT_ARROW)) {
                this.PlayerX -= 5;
            }
   
            if (keyIsDown(RIGHT_ARROW)) {
                this.PlayerX += 5;
            }
  
            if (keyIsDown(UP_ARROW)) {
                this.PlayerY -= 5; 
            }
  
            if (keyIsDown(DOWN_ARROW)) {
                this.PlayerY += 5;
            }
        }

        this.impact = function(L){      //Gets the distance between Player Object and Lasers

            let distance = dist(this.PlayerX, this.PlayerY, L.LaserX, L.LaserY);

            if (distance < this.PlayerSize-10) { 
                print("Impact");
                return true;
              } else {
                return false;
              }
        }

        this.Death = function(){
            this.PlayerColor = color(255,255,255);      //Signifies player death
        }

    }
}
    
    /*
    fill(25);
    rect(0,height/2,25,height)
    rect(width,height/2,25,height)
    rect(width/2,0,width,25)
    rect(width/2,height,width,25)
    */