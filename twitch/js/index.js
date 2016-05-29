
$(document).ready(function() {
  var channels=["freecodecamp","storbeck","terakilobyte","habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff", "MedryBW","brunofin"];
  $("#all").attr("disabled", "disabled");
  channels.forEach(function(channel){
    $.getJSON("https://api.twitch.tv/kraken/streams/"+channel, function(result){
      if(result.error != undefined){
        channels[channel] = {online:false, link:"http://www.twitch.tv/"+channel, logo:"http://i.imgur.com/IZ2cGbA.png", name: channel+" has closed their account"};
      }
      else if(result.stream===null){//channel is currently offline
        channels[channel] = {online:false, link:"http://www.twitch.tv/"+channel, logo:"http://i.imgur.com/IZ2cGbA.png", name:channel};
      }else{
        channels[channel] = {online:true, link:"http://www.twitch.tv/"+channel, logo:result.stream.channel.logo, name: result.stream.channel.display_name, details:result.stream.channel.status};
      }
      displayChannels(channels,-1);
    });
  });
  
  $("#all").click(function(){
    $("button").removeAttr("disabled");
    $("#all").attr("disabled", "disabled");
    displayChannels(channels,-1);
    });
  $("#online").click(function(){
    $("button").removeAttr("disabled");
    $("#online").attr("disabled", "disabled");
    displayChannels(channels, true);
    });
  $("#offline").click(function(){
    $("button").removeAttr("disabled");
    $("#offline").attr("disabled", "disabled");
    displayChannels(channels, false);
    });
  
  $("#searchString").keyup(function(){
    $("button").removeAttr("disabled");
    var query=$("#searchString").val();
    query=query.toLowerCase();
    displayChannels(channels, query);
  });
  
});

function displayChannels(channels, modifier)
{
  var re = new RegExp(modifier);
  $("#channel-list").empty();
  channels.forEach(function(channel){
          if(modifier=== -1){//show all channels
            appendChannel(channels[channel]);
          }else if(modifier===true && channels[channel].online===true){
            appendChannel(channels[channel]);
          }else if(modifier===false && channels[channel].online===false){
            appendChannel(channels[channel]);
          }else if(typeof(modifier)==="string" && re.test(channels[channel].name.toLowerCase())){
            appendChannel(channels[channel]);
          }
  });
}

function appendChannel(channel){
  if(channel.online===true){
    $('#channel-list').append('<li><a href="'+channel.link+'" target="_blank"><img src="'+channel.logo+'" width="50">'+channel.name+'</a><br>'+channel.details+'</li>');
  }else{
  $('#channel-list').append('<li><a href="'+channel.link+'" target="_blank"><img src="'+channel.logo+'" width="50">'+channel.name+'</a></li>');
  }
}