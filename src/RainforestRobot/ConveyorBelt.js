export default class ConveyorBelt {
  constructor() {
    this.x = 0;
    this.y = 0;
  }

  setPosition(input) {
    const [x, y] = input.split(' ').map(i => parseInt(i.trim(), 10));
    this.x = x;
    this.y = y;
  }

  isAtPosition(x, y) {
    return this.x === x && this.y === y;
  }
}
