$(document).ready(function() {
  var playerIcon;
  var computerIcon;
  var isPlayerX = false;
  var xIcon = "glyphicon-star";
  var yIcon = "glyphicon-heart";
  var emptyIcon = "glyphicon-unchecked";
  var restIcon = "glyphicon-repeat";

  setupBoard();

//=======================gameplay section===================

  var boardState;
  $(".space").click(function(){
    $(this).prop("disabled",true);
    $(this).empty();
    $(this).removeClass("glyphicon-unchecked");
    $(this).addClass("btn-primary");
    $(this).addClass(player);
    analyzeBoard();
    for(var row of boardState){
      console.log(row);
    };
  });

  function analyzeBoard(){
    for(var i=1; i<4; i++){//rows
      for(var j=1; j<4; j++){//columns
        if($("#space"+i+j).hasClass("btn-primary")){//player's square
          boardState[i-1][j-1] = "P";
        }else if ($("#space"+i+j).hasClass("btn-danger")) {//computer's square
          boardState[i-1][j-1] = "C";
        }else{
          boardState[i=1][j-1] = 0;
        }
      }
    }
    analyzeHorz();
  }

  function analyzeHorz(){
    for(var i=0;i<3;i++){
      if(boardState[i].includes("P"))
      for(var j=0;j<3;j++){
        if(typeof boardState[i][j] == "number"){
          boardState[i][j]++;
        }
      }
    }
  }

  function setupBoard(){
    $(".btn").prop("disabled", false);
    $(".space").prop("disabled", true);
    $(".space").removeClass(xIcon);
    $(".space").removeClass(yIcon);
    $(".space").addClass(emptyIcon);
    $(".xIcon").addClass(xIcon);
    $(".yIcon").addClass(yIcon);
    $("#reset").addClass(restIcon);
    //TODO: replace the "" with Space objects
    //TODO: figure out an iterator function that takes a function as an argument and iterates it over i and j, I'm tired of writing nested for loops
    boardState = [["","",""],["","",""],["","",""]];
  }

  function switchToPlayMode(){
    $(".space").prop("disabled", false);
  }

  //=====================setting section=====================
  $("#playerX").click(function(){
    playerX();
  });

  $("#playerO").click(function(){
    playerO();
  });

  $("#computerX").click(function(){
    playerO();
  });

  $("#computerO").click(function(){
    playerX();
  });

  $("#reset").click(function(){
    setupBoard();
    $(".btn").removeClass("btn-danger");
    $(".btn").removeClass("btn-primary");
    $(".btn").addClass("btn-default");
  });

  function playerX(){
    $("#playerX").removeClass("btn-default");
    $("#playerX").addClass("btn-primary");
    $("#playerX").prop("disabled", true);
    $("#computerO").removeClass("btn-default");
    $("#computerO").addClass("btn-danger");
    $("#computerO").prop("disabled", true);
    $("#playerO").prop("disabled", true);
    $("#computerX").prop("disabled", true);
    player="glyphicon glyphicon-star";
    computer="glyphicon glyphicon-heart";
    switchToPlayMode();
    isPlayerX = true;
  }

  function playerO(){
    $("#playerO").removeClass("btn-default");
    $("#playerO").addClass("btn-primary");
    $("#playerO").prop("disabled", true);
    $("#computerX").removeClass("btn-default");
    $("#computerX").addClass("btn-danger");
    $("#computerX").prop("disabled", true);
    $("#playerX").prop("disabled", true);
    $("#computerO").prop("disabled", true);
    computer="glyphicon glyphicon-star";
    player="glyphicon glyphicon-heart";
    switchToPlayMode();
    isPlayerX = false;
  }

//================space object section====================




});
