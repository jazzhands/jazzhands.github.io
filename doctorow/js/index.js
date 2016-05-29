$(document).ready(function() {
  var quotes = [
    ['Never underestimate the determination of a kid who is time-rich and cash-poor.', 'Cory Doctorow, Little Brother '],
['When in trouble or in doubt, run in circles, scream and shout.', 'Cory Doctorow, Little Brother '],
['He hated it when adults told him he only felt the way he did because he was young. As if being young was like being insane or drunk, like the convictions he held were hallucinations caused by a mental illness that could only be cured by waiting five years.', 'Cory Doctorow, For the Win '],
["I can't go underground for a year, ten years, my whole life, waiting for freedom to be handed to me. Freedom is something you have to take for yourself.", 'Cory Doctorow, Little Brother '],
["It's the stupid questions that have some of the most surprising and interesting answers. Most people never think to ask the stupid questions.", 'Cory Doctorow, For the Win '],
['Conversation is king. Content is just something to talk about.', 'Cory Doctorow'],
["The future's a weirder place than we thought it would be when we were little kids.", 'Cory Doctorow, For the Win '],
['Universal access to human knowledge is in our grasp, for the first time in the history of the world. This is not a bad thing.', 'Cory Doctorow'],
['Stories are propaganda, virii that slide past your critical immune system and insert themselves directly into your emotions.', 'Cory Doctorow, Eastern Standard Tribe '],
['The first casualty of any battle is the plan of attack.', 'Cory Doctorow, For the Win '],
['If you want to double your success rate, triple your failure rate.', 'Cory Doctorow, Pirate Cinema '],
["Novels for me are how I find out what's going on in my own head. And so that's a really useful and indeed critical thing to do when you do as many of these other things as I do.", 'Cory Doctorow'],
["It's quite civilized, and a little weird. You go running after someone through the woods, catch up with him, bare your teeth, and sit down to play a little roshambo.", 'Cory Doctorow, Little Brother '],
["... the Kindle is a 'roach motel'' device: its license terms and DRM ensure that books can check in, but they can't check out.", 'Cory Doctorow, Context: Further Selected Essays on Productivity, Creativity, Parenting, and Politics in the 21st Century '],
["Abnormal is so common, it's practically normal.", 'Cory Doctorow, Little Brother '],
["It's like there's no human beings in the chain of responsibility, just things-that-happen. It's the ultimate cop-out. The system did it. The company did it. The government did it. What about the person who pulls the trigger?", 'Cory Doctorow, Homeland '],
['The fact is, almost everything you do is collaborative. Somewhere out there, someone else had a hand it it.', 'Cory Doctorow, For the Win '],
['The United States of America was a pirate nation for the first one hundred years of its existence, ripping off the patents and trademarks of the imperial European powers it had liberated itself from by blood. By keeping their GDP at home, the U.S. revolutionaries were able to bootstrap their nation into an industrial powerhouse. Now, it seems, their descendants are bent on ensuring that no other country can pull the same trick off.', 'Cory Doctorow, Overclocked: Stories of the Future Present '],
['We don’t care about what you did yesterday—we care about what you’re going to do tomorrow.', 'Cory Doctorow, Makers '],
["if it's not in my email archive, I don't know it", 'Cory Doctorow'],
["If you've never programmed a computer, you should. There's nothing like it in the whole world. When you program a computer, it does exactly what you tell it to do.", 'Cory Doctorow, Little Brother '],
["For me -- for pretty much every writer -- the big problem isn't piracy, it's obscurity.", 'Cory Doctorow'],
["Your problem is, you're trying to understand it. You need to just do it.", 'Cory Doctorow, Pirate Cinema '],
['People actually like supporting the artists whose work they like. It makes them feel happy. You don’t have to force them. And if you force them, they don’t feel as good.', "Cory Doctorow, Information Doesn't Want to Be Free: Laws for the Internet Age "],
["Engineers are all basically high-functioning autistics who have no idea how normal people do stuff.", "Eastern Standard Tribe, 2004"]
  ];
  
  var changeQuote=function(){
    var randomQuote = Math.round(Math.random() * (quotes.length - 1));
    $('#quote').text(quotes[randomQuote][0]);
    $('#source').text(quotes[randomQuote][1]);
    $('#tweet').attr("href", "https://twitter.com/intent/tweet?text="+quotes[randomQuote][0]+"%20@freecodecamp%20@sachadeangeli");
  };
  
  changeQuote();
  $('p').hide();
  
  $('#more').click(function() {
    changeQuote();
  });
    
  $('#about').click(function(){
    $('p').toggle();
  });

});