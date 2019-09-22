import ConveyorBelt from './ConveyorBelt';
import Crate from './Crate';
import Robot from './Robot';

export default class RainforestRobot {
  constructor() {
    this.conveyorBelt = new ConveyorBelt();
    this.robot = new Robot();
    this.crates = [];
  }

  execute(conveyorBelt, robot, crates, instructions) {
    // For each new execution set the position of all elements then run the instructions

    this.conveyorBelt.setPosition(conveyorBelt);
    this.robot.setPosition(robot);
    this.crates = crates.split(',').map(crate => new Crate(crate));

    instructions.split('').forEach(instruction => {
      this.move(instruction);
    });

    return this.robot.getCurrentState();
  }

  move(instruction) {
    switch (instruction) {
      case 'N':
        this.robot.moveNorth();
        break;
      case 'S':
        this.robot.moveSouth();
        break;
      case 'E':
        this.robot.moveEast();
        break;
      case 'W':
        this.robot.moveWest();
        break;
      case 'P':
        this.robot.pickupBagFromCrate(this.crates);
        break;
      case 'D':
        this.robot.dropBags(this.conveyorBelt);
        break;
      default:
        return null;
    }

    return null;
  }

  reset() {
    this.robot.reset();
  }
}
