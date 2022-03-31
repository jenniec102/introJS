var array = ["Miami", "Orlando", "California", "Atlantic City", "Hawaii", "Puerto Rico"];

//select a random entry and add it to a sentence
function randomWords(){
  var rand = Math.floor(Math.random()*array.length);
  return ("Let's go to " + array[rand]);
}

console.log(randomWords());
