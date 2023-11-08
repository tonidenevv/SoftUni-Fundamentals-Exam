function solve(input) {
    let heroesCount = input.shift();
    let heroes = {};
    for (let i = 0; i < heroesCount; i++) {
        let split = input.shift().split(' ');
        let hero = split[0];
        let health = +split[1];
        let mana = +split[2];
        heroes[hero] = {
            health,
            mana
        }
    }
    while (input[0] !== 'End') {
        let tokens = input.shift().split(' - ');
        let command = tokens[0];
        let heroName = tokens[1];

        if (command === 'CastSpell') {
            let manaNeeded = +tokens[2];
            let spellName = tokens[3];
            if (heroes[heroName].mana >= manaNeeded) {
                heroes[heroName].mana -= manaNeeded;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mana} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }
        } else if (command === 'TakeDamage') {
            let damageTaken = +tokens[2];
            let attackerName = tokens[3];
            if (heroes[heroName].health - damageTaken > 0) {
                heroes[heroName].health -= damageTaken;
                console.log(`${heroName} was hit for ${damageTaken} HP by ${attackerName} and now has ${heroes[heroName].health} HP left!`);
            } else {
                console.log(`${heroName} has been killed by ${attackerName}!`);
                delete heroes[heroName];
            }
        } else if (command === 'Recharge') {
            let rechargeAmount = +tokens[2];
            if (heroes[heroName].mana + rechargeAmount > 200) {
                console.log(`${heroName} recharged for ${200 - heroes[heroName].mana} MP!`);
                heroes[heroName].mana = 200;
            } else {
                console.log(`${heroName} recharged for ${heroes[heroName].mana + rechargeAmount - heroes[heroName].mana} MP!`);
                heroes[heroName].mana += rechargeAmount;
            }
        } else if (command === 'Heal') {
            let healAmount = +tokens[2];
            if (heroes[heroName].health + healAmount > 100) {
                console.log(`${heroName} healed for ${100 - heroes[heroName].health} HP!`);
                heroes[heroName].health = 100;
            } else {
                console.log(`${heroName} healed for ${heroes[heroName].health + healAmount - heroes[heroName].health} HP!`)
                heroes[heroName].health += healAmount;
            }
        }
    }
    let entries = Object.entries(heroes);
    for ([name, object] of entries) {
        console.log(`${name}`);
        console.log(`  HP: ${object.health}`);
        console.log(`  MP: ${object.mana}`);
    }
}