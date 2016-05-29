$(document).ready(function() {
  var total = 0;
  var entry = null;
  var entry_number = "";
  var current_function = "";
  var decimal_point = false;
  
  $(".key-num").click(function() {
    if(($(this).text() == ".")&&(decimal_point==false)){
      decimal_point = true;
      if(entry==null){
        entry = $(this).text();
      }else{
        entry = entry + $(this).text();  
      }
      
    }else if(($(this).text() == ".")&&(decimal_point==true)){
      //do nothing
    }else{
      if(entry==null){
        entry = $(this).text();
      }else{
        entry = entry + $(this).text();  
      }
    }
    display(entry);
  });
  
  $(".key-del").click(function(){
    entry="";
    entry_number=0;
    display(0);
    decimal_point = false;
    
    if($(this).attr("id") == "button-AC"){
      total=0;
      current_function="";
    }
  });
  
  $(".key-fn").click(function(){
    
    if(entry == ""){
      return;
    }
    
    entry_number = Number(entry);
    
    if(current_function =="" && total == 0){
      total = entry_number;
    }else{
      switch(current_function){
        case "button-multiply":
          total *= entry_number;
          break;
        case "button-divide":
          //return MAX_VALUE if divide by zero happens
          if(entry_number == 0){
            total = Number.MAX_VALUE;
          }else{
            total=total / entry_number;
          }
          break;          
        case "button-add":
          total = total + entry_number;
          break;
        case "button-subtract":
          total = total-entry_number;
          break;
        case "button-percent":
          total = total * entry_number / 100;
          break;
      }
    }
    
    decimal_point = false;
    entry = "";
    entry_number=0;
    
    current_function = $(this).attr("id");
     if(current_function == "button-equals"){
       current_function="";
     }
   
    display(total);
    
  });
  
  function display(thingToDisplay){
    $("#display").text(thingToDisplay);
  }
  

});