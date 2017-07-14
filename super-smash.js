
var location1 = ["Volcano","Ocean","plains","jungle"];
var firstQuestion = [1,2];
var secondQuestion = ["Mario!","Luigi!"];
var prompt = require('prompt-sync')();

function battle(){ 
var strike = prompt("how many times will you strike?");
var fight = prompt("who will you fight?");
firstQuestion.push(strike);
secondQuestion.push(fight)
}
battle();
console.log()