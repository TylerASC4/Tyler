// THis game should load a new ogre img everytime butotn is pressed, as well as
// update stats which include hp, gold, and ogres killed
// when lose, hp -1, gold - 1, ogres slain stays same
// when win, hp stays same, gold + 10, ogres slain + 1
var HP = 100;
var gold = 0;
var slain = 0;
function updateStats() {
    $('#stats').text("HP: " + HP + " Gold: " + gold + " Ogres Slain: " + slain)
}
function attack() {
    if(HP > 0) {
        if(Math.random()*100 > gold) {
            gold += 10;
            slain++;
            $('#ogres').prepend('<p style="color:green">You Won! + 10 gold!</p>')

        }
        else {
            gold--;
            HP--;
            $('#ogres').prepend('<p style="color:red">You Lost! -1 gold</p>')
        }
        updateStats();
    }
    else {
        $('#ogres').prepend("<h1>GAME OVER!</h1>")
    }
}
function setup() { 
    // title
    $('body').append('<h1>Welcome to Ogre Fighter v.1.0</h1>')
    // the stats for the game
    $('body').append('<div><h3>STATS</h3><p id="stats"></p></div>')
    // the button
    $('body').append('<button onclick="attack()">Attack the Ogre!</button>')
    // ogres
    $('body').append('<div id="ogres"></div>')
}

$(document).ready(setup);