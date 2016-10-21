function Space(position){
  this.state = "";//can be EMPTY, PLAYER, or COMPUTER <<< enum would be better here, but I don't know how to do it well in JS
  this.score = 0;
  this.position = position;
};

Space.prototype = {
  constructor:Space,

  addScore:function(scoreToAdd){
    if(this.state == ""){
      this.score += scoreToAdd;
    }
  },

  getScore:function(){
    if(this.state != ""){
      console.error("getScore error: tried getting score from a " + this.state + " space at position " + this.position + ".\n");
      return -1;
    }
    return this.score;
  },

  getState:function () {
    return this.state;
  },

  setState:function (newState) {
    if(this.state == "" && newState != ""){
      this.score = -1;
      this.state = newState;
    }else{
      console.error("setState error: tried setting " + this.state + " to " + newState + " at position " + this.position + ".\n");
    }
  },

  getPosition:function(){
    return this.position;
  },

  toString(){//not working at this moment, but that's ok
    var state = this.state;
    if(this.state == ""){
      state = "EMPTY";
    }
    return "Space: " + this.position + " State: " + state + " Score: " + this.score;
  }

}
