class guerrier {
    constructor(name, pv, attack) {
        this.name = name
        this.pv = pv
        this.attack = attack
    }
    getAttack(name1) {
        name1.pv = name1.pv - this.attack
        console.log(name1.name, "à désormais " + name1.pv + "pv")
    }
}

let Mario = new guerrier("Mario", 100, 10);
let Luigi = new guerrier("Luigi", 90, 12)

while (Mario.pv > 0 && Luigi.pv > 0) {
    Mario.getAttack(Luigi)
    if (Luigi.pv <= 0) {
        console.log("Luigi est mort, il a perdu le combat et Mario a gagné")
        break;
    }

    Luigi.getAttack(Mario)
    if (Mario.pv <= 0) {
        console.log("Mario est mort, il a perdu le combat et Luigi a gagné")
        break;
    }
}
