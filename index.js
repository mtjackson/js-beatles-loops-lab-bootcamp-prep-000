function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts) {
  let counter = 0;
  while (counter <= facts.length - 1) {
	  facts[counter] = facts[counter] + '!!!';
	  counter++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    n++;
  } while(n < 15);
  return array.push("I love the Beatles!")
}