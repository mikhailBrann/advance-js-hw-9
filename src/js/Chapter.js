export default class Chapter {
    constructor(name) {
        this.name = name;
        this._attack = 100;
        this._stoned = false;
        this._attackDistance = 1;
    }
    get attack() {
        return this._attack;
    }
    set attack(value) {
        if(value <= 1 || value > 9) {
            this._attack = 100;
            return false;
        }
    
        this._attackDistance = value;
        this._attack = this._attack - ((this._attackDistance - 1) * 10);
    }
    get stoned() {
        return this._stoned;
    }
    set stoned(value) {
        if(value === true) {
            this._stoned = true;
            this._attack = this._attack - Math.log2(this._attackDistance) * 5;
        } else {
            this._attack = 100;
        }
    }
}