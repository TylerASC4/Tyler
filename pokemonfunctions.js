function rand(num) {
//generates a random number between 0 and one of youe choosing  
    var randDec = Math.random() * num;
    var randInt = Math.floor(randDec);
    console.log(randInt);
    return randInt;
}
function randLetter(){
  var possible = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var length = possible[rand(possible.length)];
  console.log(rand(Letter));
  return length;
}
