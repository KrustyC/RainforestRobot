export default class Robot {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.state = 'still functioning';
    this.pickedBags = 0;
    this.droppedBags = 0;
  }

  setPosition(input) {
    const [x, y] = input.split(' ').map(i => parseInt(i.trim(), 10));
    this.x = x;
    this.y = y;
  }

  getCurrentState() {
    return {
      droppedBags: this.droppedBags,
      finalPosition: `${this.x} ${this.y}`,
      health: this.state,
    };
  }

  moveNorth() {
    this.y += 1;
  }

  moveSouth() {
    this.y -= 1;
  }

  moveEast() {
    this.x += 1;
  }

  moveWest() {
    this.x -= 1;
  }

  pickupBagFromCrate(crates) {
    // Check if there is a crate in the same location where the robot currently is
    const crate = crates.find(lookupCrate =>
      lookupCrate.isAtPosition(this.x, this.y)
    );

    if (crate === undefined) {
      this.state = 'short circuited';
    } else {
      this.pickedBags += crate.pickupBag();
    }
  }

  dropBags(conveyor) {
    // Check if the robot is on the conveyor belt, if not then it short circuits

    if (!conveyor.isAtPosition(this.x, this.y)) {
      this.state = 'short circuited';
    } else {
      this.droppedBags += this.pickedBags;
      this.pickedBags = 0;
    }
  }

  reset() {
    this.x = 0;
    this.y = 0;
    this.state = 'still functioning';
    this.pickedBags = 0;
    this.droppedBags = 0;
  }
}
