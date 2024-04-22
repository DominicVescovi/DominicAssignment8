

class TimeCounter {

    constructor(tempTotalTime) {
      this.savedTime = 0; // When Timer started
      this.totalTime = tempTotalTime; // How long Timer should last
    
  
      // Starting the timer
      this.start = function() {
        // When the timer starts it stores the current time in milliseconds.
        this.savedTime = millis();
        if (this.totalTime >= 50){
          this.totalTime -=.5;
        }
      };
  
      // The function isFinished() returns true if 5,000 ms have passed. 
      // The work of the timer is farmed out to this method.
      this.isFinished = function() { 
        // Check how much time has passed
        let passedTime = millis()- this.savedTime;
        if (passedTime > this.totalTime) {
          return true;
        } else {
          return false;
        }
      };
    } 
  }

/*
  class ScoreCounter {
    constructor() {
      this.TimeScore = 0;

      this.GameStart = function (){
        this.TimeScore = millis();
      }
    
  }
}
*/