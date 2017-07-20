function setup(){
    createCanvas(1000 , 1000);
}
function draw(){
    background(155);
    var loadScreen = rect(40, 50, 900, 350);
    var tab1 = rect(25, 450, 300, 250);
    textSize(32);
    text("Bulbasaur", 97, 590);
    var tab2 = rect(350, 450, 300, 250);
    textSize(32);
    text("Squirtle", 440, 590);
    var tab3 = rect(680, 450, 300, 250);
    textSize(32);
    text("Charmander", 740, 590)
    textSize(24)
    text("Choose your Pokemon: ", 376 ,435)
    //rect(35, 500, 450, 250);
    //rect(520, 500, 450, 250)
}
function pokemon(Bulbasaur, Squirtle, Charmander){
    this.Bulbasaur = Bulbasaur;
    this.Squirtle = Squirtle;
    this.Charmander = Charmander;
} 
function mouseClicked(){

}//CALL WILD POKEMON
function wildPokemon (type) {
this.type = type;
}
//POKEMON ARRAY
var pokemonStats = new Array();
pokemonStats[0] = new wildPokemon("Bulbasaur");
pokemonStats[1] = new wildPokemon("Squirtile");
pokemonStats[2] = new wildPokemon("Charmander");
pokemonStats[3] = new wildPokemon("Pikachu");
//ATTACK ARRAY
function move (move, basedmg) {
this.move = move;
this.basedmg = basedmg;
}
var moves = new Array();
moves[0] = new move("Slam", 5);
moves[1] = new move("Headbutt", 4);
moves[2] = new move("Tackle", 3);
moves[3] = new move("Cut", 4);
//ALL WILD POKEMON STATS
//CALL WILD POKEMON ID
var wildPokemonid;
callWildPokemonid = function(){
wildPokemonid = Math.floor(Math.random() * pokemonStats.length);
};
//CALL WILD POKEMON LEVEL
var wildPokemonLevel;
callWildPokemonLevel = function(){
wildPokemonLevel = Math.floor(Math.random() * 6 + 1);
};
//CALL WILD POKEMON HEALTH  
var wildPokemonHealth;
callWildPokemonHealth = function(){
wildPokemonHealth = Math.floor(Math.random() + wildPokemonLevel + 5);
};
//CALL WILD POKEMON ATTACK
var moveid;
callMoveid = function(){
moveid = Math.floor(Math.random() * moves.length);
};
//CALL DAMAGE 
var damage;
//CALL WILD POKEMON ATTACK DAMAGE
callMoveDamage = function(){
damage = Math.floor(Math.random() * moves[callMoveid].basedmg + 5);
};
//CALL PLAYER ATTACK DAMAGE
callPlayerMoveDamage = function() {
damage = Math.floor(Math.random() * moves[playerMove].basedmg + 5);
};
//CALL PLAYER ATTACK
function selectMove(){
playerMove = prompt("You have 4 moves, " + moves[0].move + ", " + moves[1].move + ", " + moves[2].move + " and " + moves[3].move + ", which move do you want to use?").toUpperCase();
if (playerMove === ""){
selectMove();
}
else
{
switch(playerMove){
case 'SLAM':
playerMove = 0; 
callPlayerMoveDamage();
playerAttack();
break;
case 'HEADBUTT':
playerMove = 1;
callPlayerMoveDamage();
playerAttack();
break;
case 'TACKLE':
playerMove = 2;
callPlayerMoveDamage();
playerAttack();
break;
case 'CUT':
playerMove = 3; 
callPlayerMoveDamage();
playerAttack();
break;
}
}
}
//WILD POKEMON ATTACK
function wildPokemonAttack(){
if (pokemonHealth > 0){
pokemonHealth = pokemonHealth - damage;
alert("Wild " + pokemonStats[wildPokemonid].type + " uses " + moves[moveid].move + " dealing " + damage + " damage!");
attackLoop();}
else
{
alert("Pokemon fainted");
}
}
//PLAYER ATTACK
function playerAttack(){
alert ("Player uses " + moves[playerMove].move + " dealing " + damage + " damage!");
if (wildPokemonHealth > 0) 
{
wildPokemonHealth = wildPokemonHealth - damage;
alert(pokemonStats[wildPokemonid].type + " has " + wildPokemonHealth + " health remaining!");
playerTurn = false;
wildPokemonFaint()
}
else
{
alert(pokemonStats[wildPokemonid].type + " fainted");
}
}
//RANDOMIZE WILD POKEMON
function randomPokemon(){
callWildPokemonid();
callWildPokemonHealth();
callWildPokemonLevel();
callMoveid();
}
var pokemonHealth = 5;
//START FIGHT
function startFight(){
randomPokemon();
alert("Wild " + pokemonStats[wildPokemonid].type + " appears!");
alert("Level : " + wildPokemonLevel + " Health : " + wildPokemonHealth);
playerTurn = false;
attackLoop();
}
function attackLoop(){
if (playerTurn === false)
{
playerTurn = true;
wildPokemonAttack();
}
else
{
playerTurn = false;
selectMove();
}
}
function wildPokemonFaint(){
if (wildPokemonHealth < 1){
alert(pokemonStats[wildPokemonid].type + " has fainted");}
else
{   attackLoop();}
}
startFight();