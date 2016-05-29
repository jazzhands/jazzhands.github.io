$(document).ready(function() { 
  var city = geoplugin_city();
  var state = geoplugin_region();
  var country = geoplugin_countryName();
  var farenheit = true;
  var showicon = true;
  var details = true;
  var temp_f = 0;
  var temp_c = 0;
  var weather = "";
  var detailedWeather = "";
  var icon ="";
  var conditions="";
  
  if(city != ""){
    $('#location').text(city);
  }else if(state != ""){
    $('#location').text(state);
  }else{
    $('#location').text(country);
  }
  
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+city.replace(" ","_")+","+state.replace(" ","_")+","+country.replace(" ","_"), function(result){
    temp_c = result.main.temp - 273.2;
    temp_f = Math.round((temp_c * 9 / 5)+32);
    temp_c = Math.round(temp_c);
    if(farenheit){
      $('#temperature').text(temp_f+" F");
    }else{
      $('#temperature').text(temp_c+" C");
    }
    weather = result.weather[0].main;
    detailedWeather = result.weather[0].description;
    $('#weather').text(detailedWeather);
    icon = result.weather[0].icon;
    $('#icon').html("<img id='weather icon' src = 'http://openweathermap.org/img/w/"+ icon +".png'/>")
    if(temp_f > 80){
      $(".main").css("background-color: red;");
    }
    
  });
  
  $('#temperature').click(function(){
    farenheit = !farenheit;
    if(farenheit){
      $('#temperature').text(temp_f+" F");
    }else{
      $('#temperature').text(temp_c+" C");
    }
  });
  $('#weather').click(function(){
    details = !details;
    if(details){
      $('#weather').text(detailedWeather);
    }else{
      $('#weather').text(weather);
    }
  });

});