
class Star {
    constructor(){
        this.StarsSize = random(1,5);      //Stars Width
        this.StarsX = random(width);        //Stars X location
        this.StarsY =  0;                   //Stars Y lcoation
        this.StarsSpeed = random(1,2);      //Speed of Stars
        this.StarsColor = color(255,255,255);   //Stars Color
        
    

    this.display = function(){  //draws 
        fill(this.StarsColor);
        noStroke();
        ellipse(this.StarsX,this.StarsY,this.StarsSize,this.StarsSize);
    }

    this.movement = function(){     //sets Star speed
        this.StarsY += this.StarsSpeed
    }

}
}