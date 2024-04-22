
class Laser {
    constructor(){
        this.LaserSize = random(5,8);      //Laser Width
        this.LaserX = random(width);        //Laser X location
        this.LaserY =  0;           //Puts top of Laser just off screen
        this.LaserSpeed = random(4,5);     //Speed of Laser Blast
        this.LaserColor = color(255,0,0);   //Laser Color
        
    

    this.display = function(){  //draws laser
        fill(this.LaserColor);
        noStroke();
        ellipse(this.LaserX,this.LaserY,this.LaserSize,this.LaserSize*3);
    }

    this.movement = function(){     //sets laser speed
        this.LaserY += this.LaserSpeed
    }

}
}