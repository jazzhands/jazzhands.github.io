$(document).ready(function() {
  $("#search").keypress(function(keypressed){
    if(keypressed.which == 13)
    {
      console.log("enter key pressed!")
      console.log($("#search").attr("text"));
    }
  });
});
