import Character from './app';

export default class Maths extends Character {
  constructor(name, type, attack, distance, stoned) {
    super(name, type);
    this.attack = attack;
    this.distance = distance;
    this.stoned = stoned;
  }

  get stoned() {
    // eslint-disable-next-line no-underscore-dangle
    return this._stoned;
  }

  set stoned(value) {
    // eslint-disable-next-line no-underscore-dangle
    this._stoned = value;
  }

  get attack() {
    // eslint-disable-next-line no-underscore-dangle
    let attack = this._attack - ((this.distance - 1) * 10);
    if (this.stoned) {
      attack -= Math.log2(this.distance) * 5;
    }
    return (attack > 0) ? Math.round(attack) : 0;
  }

  set attack(value) {
    // eslint-disable-next-line no-underscore-dangle
    this._attack = value;
  }
}
