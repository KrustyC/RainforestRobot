import RainforestRobot from '../index';

describe('Rainforest Robot Test', () => {
  test('it calculate the right number of dropped bags', () => {
    const rainforestRobot = new RainforestRobot();

    const conveyorBeltInput = '1 2';
    const robotInput = '0 0';
    const createsInput = '1 1 10,-1 -2 5';
    const instructions = 'NEPPND';

    const result = rainforestRobot.execute(
      conveyorBeltInput,
      robotInput,
      createsInput,
      instructions
    );

    expect(result).toHaveProperty('droppedBags', 2);
    expect(result).toHaveProperty('finalPosition', '1 2');
    expect(result).toHaveProperty('health', 'still functioning');
  });

  test('it keep the state for multiple instructions', () => {
    const rainforestRobot = new RainforestRobot();

    const conveyorBeltInput = '1 2';
    const robotInput = '0 0';
    const createsInput = '1 1 10,-1 -2 5';

    const result1 = rainforestRobot.execute(
      conveyorBeltInput,
      robotInput,
      createsInput,
      'N'
    );

    expect(result1).toHaveProperty('droppedBags', 0);
    expect(result1).toHaveProperty('finalPosition', '0 1');
    expect(result1).toHaveProperty('health', 'still functioning');

    const result2 = rainforestRobot.execute(
      conveyorBeltInput,
      result1.finalPosition,
      createsInput,
      'E'
    );

    expect(result2).toHaveProperty('droppedBags', 0);
    expect(result2).toHaveProperty('finalPosition', '1 1');
    expect(result2).toHaveProperty('health', 'still functioning');

    const result3 = rainforestRobot.execute(
      conveyorBeltInput,
      result2.finalPosition,
      createsInput,
      'P'
    );

    expect(result3).toHaveProperty('droppedBags', 0);
    expect(result3).toHaveProperty('finalPosition', '1 1');
    expect(result3).toHaveProperty('health', 'still functioning');

    const result4 = rainforestRobot.execute(
      conveyorBeltInput,
      result3.finalPosition,
      createsInput,
      'N'
    );

    expect(result4).toHaveProperty('droppedBags', 0);
    expect(result4).toHaveProperty('finalPosition', '1 2');
    expect(result4).toHaveProperty('health', 'still functioning');

    const result5 = rainforestRobot.execute(
      conveyorBeltInput,
      result4.finalPosition,
      createsInput,
      'D'
    );

    expect(result5).toHaveProperty('droppedBags', 1);
    expect(result5).toHaveProperty('finalPosition', '1 2');
    expect(result5).toHaveProperty('health', 'still functioning');
  });

  test('it short circuit when trying to drop up a bag outside the conveyour belt', () => {
    const rainforestRobot = new RainforestRobot();

    const conveyorBeltInput = '1 2';
    const robotInput = '0 0';
    const createsInput = '1 1 1,3 2 1,3 4 2';
    const instructions = 'NEPNND';

    const result = rainforestRobot.execute(
      conveyorBeltInput,
      robotInput,
      createsInput,
      instructions
    );

    expect(result).toHaveProperty('droppedBags', 0);
    expect(result).toHaveProperty('finalPosition', '1 3');
    expect(result).toHaveProperty('health', 'short circuited');
  });

  test('it short circuit when trying to pick up a bag where there  is no crate', () => {
    const rainforestRobot = new RainforestRobot();

    const conveyorBeltInput = '1 2';
    const robotInput = '0 5';
    const createsInput = '1 2 5,3 2 1,3 4 2';
    const instructions = 'NENP';

    const result = rainforestRobot.execute(
      conveyorBeltInput,
      robotInput,
      createsInput,
      instructions
    );

    expect(result).toHaveProperty('droppedBags', 0);
    expect(result).toHaveProperty('finalPosition', '1 7');
    expect(result).toHaveProperty('health', 'short circuited');
  });
});
