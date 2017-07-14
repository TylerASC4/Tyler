function superhero(realName,ability,gender,archenemy)
this.realName=real.realName;
this.ability = ability,
this.gender = gender
this.archenemy = archenemy
this.newAbility = function(ability2){
this.ability = ability2;
    }
}
var superman = {
    'realName' : 'clark kent'
};
    var batman = new superhero ('bruce wayne','dat money','male','Joker')
    var StaticShock = new superhero('Virgil','electricity','male','Ebon')
console.log(StaticShock.realName);
console.log(batman.realName);
console.log.newability('drop kick');
}