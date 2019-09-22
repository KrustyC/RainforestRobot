import React, { useState } from 'react';
import {
  Container,
  Form,
  InputGroup,
  Label,
  Input,
  Button,
  SecondaryButton,
  Result,
  Side,
} from './style';
import RainforestRobot from './RainforestRobot';

const rainforestRobot = new RainforestRobot();

const Commands = () => {
  const [status, setStatus] = useState('');
  const [droppedBags, setDroppedBags] = useState(0);

  const [inputs, setInputs] = useState({
    conveyorBeltCoordinates: '',
    robotCoordinates: '',
    crates: '',
    instructions: '',
  });

  const onInput = key => e => {
    setInputs({
      ...inputs,
      [key]: e.target.value,
    });
  };

  const onGo = () => {
    const result = rainforestRobot.execute(
      inputs.conveyorBeltCoordinates,
      inputs.robotCoordinates,
      inputs.crates,
      inputs.instructions
    );

    setInputs({
      ...inputs,
      robotCoordinates: result.finalPosition,
    });

    setStatus(result.health);
    setDroppedBags(result.droppedBags);
  };

  const onReset = () => {
    rainforestRobot.reset();
    setStatus('');
    setDroppedBags(0);
  };

  return (
    <Container>
      <h1>Rainforest Robot</h1>
      <Form>
        <InputGroup>
          <Label>Conveyor Belt Coordinates</Label>
          <Input
            placeholder="x y"
            value={inputs.conveyorBeltCoordinates}
            onChange={onInput('conveyorBeltCoordinates')}
          />
        </InputGroup>
        <InputGroup>
          <Label>Robot Coordinates</Label>
          <Input
            placeholder="x y"
            value={inputs.robotCoordinates}
            onChange={onInput('robotCoordinates')}
          />
        </InputGroup>
        <InputGroup>
          <Label>Crates</Label>
          <Input
            placeholder="x y quantity, x y quantity..."
            value={inputs.crates}
            onChange={onInput('crates')}
          />
        </InputGroup>
        <InputGroup>
          <Label>Instructions</Label>
          <Input
            placeholder="NPPND"
            value={inputs.instructions}
            onChange={onInput('instructions')}
          />
        </InputGroup>

        <Button type="button" onClick={onGo}>
          Run Instructions
        </Button>
      </Form>
      <Result>
        <Side>
          <b>Status:</b> {status}
          <br />
          <b>Dropped bags:</b> {droppedBags}
        </Side>
        <Side>
          <SecondaryButton type="button" onClick={onReset}>
            Reset
          </SecondaryButton>
        </Side>
      </Result>
    </Container>
  );
};

export default Commands;
