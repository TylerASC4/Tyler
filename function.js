function rand(num) {
//generates a random number between 0 and one of youe choosing  
    var randDec = Math.random() * num;
    var randInt = Math.floor(randDec);
    console.log(randInt);
    return randInt;
}
rand(10);