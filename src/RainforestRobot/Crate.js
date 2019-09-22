export default class Crate {
  constructor(input) {
    const [x, y, quantity] = input.split(' ').map(i => i.trim());
    this.x = parseInt(x, 10);
    this.y = parseInt(y, 10);
    this.quantity = parseInt(quantity, 10);
  }

  pickupBag() {
    if (this.quantity >= 0) {
      this.quantity -= 1;
      return 1;
    }

    return 0;
  }

  isAtPosition(x, y) {
    return this.x === x && this.y === y;
  }
}
