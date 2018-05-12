function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {
    array.push(musicians[0] + " plays " + instruments[0])
  }
}

function johnLennonFacts(facts) {
  let counter = 0;
  while (counter <= facts.length - 1) {
	  counter++;
	  facts[counter] = facts[counter] + '!!!';
  } if (counter === facts.length) {
    return facts;
  }
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    n++;
  } while(n < 15);
  return array.push("I love the Beatles!")
}