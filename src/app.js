//write your code here

const options = ["piedra", "papel", "tijera", "lagarto", "spock"];

const player = prompt("Elige!: piedra, papel, tijera, lagarto o spock").toLowerCase();

const winnerplayer = {
        piedra: ["tijera", "lagarto"],
        papel: ["piedra", "spock"],
        tijera: ["papel", "lagarto"],
        lagarto: ["spock", "papel"],
        spock: ["tijera", "piedra"]
    };

function pcoptions() {
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}

function thewinner(player, pc) {
    if (player === pc) {
        return "¡VAYA EMPATE!";
    }
    if (winnerplayer[player].includes(pc)) {
        return `Ganaste! ${player} extermino a ${pc}!!!!`;
    } else {
        return `¡Perdiste...! ${pc} extermino a ${player}!!!!`;
    }
}

const pc = pcoptions();

console.log("Player elige!:", player);
console.log("Player 2 elige!:", pc);
console.log(thewinner(player,pc));