$(document).ready(function() {
  var playerIcon;
  var computerIcon;
  prepareBoard();

  $(".space").click(function(){
    $(this).prop("disabled",true);
    $(this).empty();
    $(this).removeClass("glyphicon-unchecked");
    $(this).addClass("btn-primary");
    $(this).addClass(player);
  });


  //=====================settings====================
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
    prepareBoard();
    $(".btn").removeClass("btn-danger");
    $(".btn").removeClass("btn-primary");
    $(".btn").addClass("btn-default");
    $(".space").removeClass("glyphicon-star");
    $(".space").removeClass("glyphicon-heart");
    $(".space").addClass("glyphicon-unchecked");
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
    readyBoard();
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
    readyBoard();
  }

  function readyBoard(){
    $(".space").prop("disabled", false);
  }

  function prepareBoard(){
    $(".btn").prop("disabled", false);
    $(".space").prop("disabled", true);
  }

});
