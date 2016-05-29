$(document).ready(function(){
  //set defaults here, not in DOM
  var breakTime;
  var workTime;
  var mainSeconds = 0;
  var mainTime;
  var pausedStatus;
  var status; //stopped; working; on break; paused
  var timer;
  var sound=true;
  
  $("#aboutText").hide();

  resetDefaults();
  display();
 
  
  $("#breakMinus").click(function(){
    if(breakTime>1){
      breakTime--;
    }
    display();
  });
    
  $("#breakPlus").click(function(){
    breakTime++;
    display();
  });
  
  $("#workMinus").click(function(){
    if(workTime>1){
      workTime--;
    }
    display();
  });
  
  $("#workPlus").click(function(){
    workTime++;
    display();
  });
  
  $("#defaults").click(function(){
    resetDefaults();
    display();
  })
  
  $("#reset").click(function(){
    reset();
    display();
  });
  
  $("#start").click(function(){
    start();
  });
  
  $("#pause").click(function(){
    pause();
  });
  
  $("#mainTimer").click(function(){
    if(status==="stopped"){
      start();
    }else{
      pause();
    }
  });
  
  $("#breakTime").click(function(){
    mainSeconds=0;
    if(status==="paused"||status==="stopped"){
      start();
    }
    if(status==="working"){
      status="on break";
      mainTime=breakTime;
    }
    display();
  });
  
  $("#workTime").click(function(){
    mainSeconds=0;
    if(status==="on break"){
      status="working";
      mainTime=workTime;
    }else if(status==="stopped"||status==="paused"){
      start();
    }
    display();
  });
  
  $("#sound").click(function(){
    sound=!sound;
    if(sound){
      $("#sound").html('<span class="glyphicon glyphicon-volume-up" aria-hidden="true"></span> sound on');
    }else{
      $("#sound").html('<span class="glyphicon glyphicon-remove" aria-hidden="true"></span> sound off');
    }
  });
  
  $("#about").click(function(){
    $("#aboutText").toggle();
  });
  
  function display(){
    if(status==="stopped"){
      mainTime=workTime;
    }
    
    $("#breakTime").text(timeToDisplay(breakTime));
    $("#workTime").text(timeToDisplay(workTime));
    $("#mainTimer").text(timeToDisplay(mainTime)+":"+ timeToDisplay(mainSeconds));
    $("#status").text(status);
    
    if(status==="on break"||(status==="paused" && pausedStatus==="on break")){
      $(".progressBar").css("background-color", "lightgreen");
      
    }else{
      $(".progressBar").css("background-color", "#FF9E9E");
      
    }
    
    if(status==="working"){
      $("h2").css("color", "#FF9E9E");
      $("h1").css("color", "#FF9E9E");
    }else if(status==="on break"){
      $("h2").css("color", "lightgreen");
      $("h1").css("color", "lightgreen");
    }else{
      $("h2").css("color", "lightgrey");
      $("h1").css("color", "lightgrey");
    }
    
    if(mainSeconds < 1){
      var progress = 10;
    }else{
      var progress = Math.round(10*(mainSeconds/60.0));
    }

    for(var progressBlock = 0; progressBlock<10;progressBlock++){
      if(progressBlock <= progress){
        $(".progressBar:nth-child("+progressBlock+")").show();
      }else{
        $(".progressBar:nth-child("+progressBlock+")").hide();
      }
    }
    
  }
  
  function timeToDisplay(time){
    time=time+"";
    if(time.length<2){
      time="0"+time;
    }
    return time;
  }
  
  function resetDefaults(){ //place defaults here
    stopTime();
    breakTime=5;
    workTime=20;
    mainSeconds=0;
    mainTime=workTime;
    status="stopped";
  }
  
  function reset(){
    stopTime();
    status="stopped";
    mainTime=workTime;
    mainSeconds=0;
  }
  
  function runTime(){
    timer = setInterval(function(){
      if(mainSeconds>0){
        mainSeconds--;
      }else if(mainTime>0){
        mainSeconds=59;
        mainTime--;
      }else if(status==="working"){
        status="on break";
        mainTime=breakTime;
        makeNoise();
      }else if(status==="on break"){
        status="working";
        mainTime=workTime;
        makeNoise();
      }
      display();
    }, 1000);
  }
  
  function stopTime(){
    clearInterval(timer);
  }
  
  function start(){
    if(status==="paused"){
      pause();
    }else if(status==="stopped"){
      status="working";
      display();
      runTime();
    }
  }
  
  function pause(){
    if(status==="working" || status==="on break"){
      pausedStatus=status;
      status = "paused";
      stopTime();
    }else if(status==="paused"){
      status = pausedStatus;
      runTime();
    }else{
      return;//do nothing
    }
    
    display();
  }
  
  function makeNoise(){
    if(sound){
      var audio = document.getElementById("alertSound");
      audio.play();
    }else{
      //do nothing?
    }
  }
  
});