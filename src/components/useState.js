import { useReducer, useState } from "react";
import "../App.css";
import {
  Button,
  Chip,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@mui/material";

const ACTION = {
  INCREMENT_1: "increment_1",
  DECREMENT_1: "decrement_1",
  INCREMENT_2: "increment_2",
  DECREMENT_2: "decrement_2",
  INCREMENT_3: "increment_3",
  DECREMENT_3: "decrement_3",
  INPUT_TEXT: "input_text",
};

function UseState() {
  const initState = {
    counter1: 0,
    counter2: 0,
    counter3: 0,
    text: "",
  };
  const [state, setState] = useState(initState);
  const run = (action) => {
    switch (action.type) {
      case ACTION.INCREMENT_1: {
        setState({
          ...state,
          counter1: state.counter1 + 1,
          counter2: state.counter2 + 1,
          counter3: state.counter3 + 1,
        });
        break;
      }
      case ACTION.DECREMENT_1: {
        setState({
          ...state,
          counter1: state.counter1 - 1,
          counter2: state.counter2 - 1,
          counter3: state.counter3 - 1,
        });
        break;
      }
      case ACTION.INCREMENT_2: {
        setState({
          ...state,
          counter2: state.counter2 + 1,
          counter3: state.counter3 + 1,
        });
        break;
      }
      case ACTION.DECREMENT_2: {
        setState({
          ...state,
          counter2: state.counter2 - 1,
          counter3: state.counter3 - 1,
        });
        break;
      }
      case ACTION.INCREMENT_3: {
        setState({
          ...state,
          counter3: state.counter3 + 1,
        });
        break;
      }
      case ACTION.DECREMENT_3: {
        setState({
          ...state,
          counter3: state.counter3 - 1,
        });
        break;
      }
      case ACTION.INPUT_TEXT: {
        setState({
          ...state,
          text: action.payload,
        });
        break;
      }
      default:
        break;
    }
  };

  const Counter1 = () => {
    function handleIncrementCounter1() {
        run({ type: ACTION.INCREMENT_1 });
    }
    function handleDecrementCounter1() {
        run({ type: ACTION.DECREMENT_1 });
    }
    return (
      <div className="counter">
        <Button variant="text" onClick={handleDecrementCounter1}>
          <div style={{ fontSize: "2rem" }}>-</div>
        </Button>
        <Chip sx={{ fontSize: "2rem" }} label={state.counter1} />
        <Button variant="text" onClick={handleIncrementCounter1}>
          <div style={{ fontSize: "2rem" }}>+</div>
        </Button>
      </div>
    );
  };

  const Counter2 = () => {
    function handleIncrementCounter2() {
        run({ type: ACTION.INCREMENT_2 });
    }
    function handleDecrementCounter2() {
        run({ type: ACTION.DECREMENT_2 });
    }
    return (
      <div className="counter">
        <Button variant="text" onClick={handleDecrementCounter2}>
          <div style={{ fontSize: "2rem" }}>-</div>
        </Button>
        <Chip sx={{ fontSize: "2rem" }} label={state.counter2} />
        <Button variant="text" onClick={handleIncrementCounter2}>
          <div style={{ fontSize: "2rem" }}>+</div>
        </Button>
      </div>
    );
  };

  const Counter3 = () => {
    function handleIncrementCounter3() {
        run({ type: ACTION.INCREMENT_3 });
    }
    function handleDecrementCounter3() {
        run({ type: ACTION.DECREMENT_3 });
    }
    return (
      <div className="counter">
        <Button variant="text" onClick={handleDecrementCounter3}>
          <div style={{ fontSize: "2rem" }}>-</div>
        </Button>
        <Chip sx={{ fontSize: "2rem" }} label={state.counter3} />
        <Button variant="text" onClick={handleIncrementCounter3}>
          <div style={{ fontSize: "2rem" }}>+</div>
        </Button>
      </div>
    );
  };

  const TextInput = () => { 
    const [a, setA] = useState('');
    const handleInputOnChange = (event) => {
        const inputText = event.target.value;
        // run({type: ACTION.INPUT_TEXT, payload: inputText})
        setA(inputText);
    }
    return (
      <FormControl variant="standard">
        <InputLabel htmlFor="component-helper">Name</InputLabel>
        <Input
          id="component-helper"
          defaultValue={a}
          aria-describedby="component-helper-text"
          onChange={handleInputOnChange}
        />
        <FormHelperText id="component-helper-text">
          {a}
        </FormHelperText>
      </FormControl>
    );
  };

  return (
    <div>
      <h1>useState</h1>
      <Counter1 />
      <Counter2 />
      <Counter3 />
      <div style={{ marginTop: "50px" }}>
        <TextInput />
      </div>
    </div>
  );
}

export default UseState;
