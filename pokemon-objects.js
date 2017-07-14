function pokestats(name,type,hp,def,atk,legend){
this.name = name,
this.type = type,
this.hp = hp,
this.def = def,
this.atk = atk,
this.legend = legend}
this.pokemonAttacked = function(pokemonAttacked){this.hp -=400}
var leafman = new pokestats("leafman","plant",200,200,100,false);
var volcano = new pokestats("volcano","earth",600,250,50,true);
var turmite = new pokestats("turmite","water",200,130,100,false);
var rochmastaflex = new pokestats("roachmastaflex","hood",600,110,210,true);
var osmosis = new pokestats("osmosis","electric",200,200,150,false);
var charizard = new pokestats("charizard","water",200,110,100,false);
var pRoster = [leafman,volcano,turmite,rochmastaflex,osmosis,charizard];
function printRoster(){
    console.log(pRoster[0])
    console.log(pRoster[1])
    console.log(pRoster[2])
    console.log(pRoster[3])
    console.log(pRoster[4])
    console.log(pRoster[5])}
printRoster();

function pokemonAttacked(){
for (i = 0; i<pRoster.length; i++){
    pokestats.hp -= 10
}}
pokemonAttacked(10)

console.log(leafman,volcano,turmite,rochmastaflex,osmosis,charizard.hp)
leafman,volcano,turmite,rochmastaflex,osmosis,charizard.pokemonAttacked();
console.log(leafman,volcano,turmite,rochmastaflex,osmosis,charizard.hp)
 