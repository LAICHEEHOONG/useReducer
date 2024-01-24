import { useReducer, useState, memo } from "react";
import "../App.css";
import {
  Button,
  Chip,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@mui/material";


/*** COMPONENTS *************************************************************************************************/
const Counter1 = memo(
  (prop) => {
    function handleIncrementCounter1() {
      prop.slice.add1();
    }
    function handleDecrementCounter1() {
      prop.slice.minus1();
    }
    return (
      <div className="counter">
        <Button variant="text" onClick={handleDecrementCounter1}>
          <div style={{ fontSize: "2rem" }}>-</div>
        </Button>
        <Chip sx={{ fontSize: "2rem" }} label={prop.state.counter1} />
        <Button variant="text" onClick={handleIncrementCounter1}>
          <div style={{ fontSize: "2rem" }}>+</div>
        </Button>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.state === nextProps.state;
  }
);

const Counter2 = (prop) => {
  console.log("Counter2");
  function handleIncrementCounter2() {
    prop.slice.add2();
    // run({ type: ACTION.INCREMENT_2 });
  }
  function handleDecrementCounter2() {
    prop.slice.minus2();
    // run({ type: ACTION.DECREMENT_2 });
  }
  return (
    <div className="counter">
      <Button variant="text" onClick={handleDecrementCounter2}>
        <div style={{ fontSize: "2rem" }}>-</div>
      </Button>
      <Chip sx={{ fontSize: "2rem" }} label={prop.state.counter2} />
      <Button variant="text" onClick={handleIncrementCounter2}>
        <div style={{ fontSize: "2rem" }}>+</div>
      </Button>
    </div>
  );
};

const Counter3 = (prop) => {
  console.log("Counter3");
  function handleIncrementCounter3() {
    prop.slice.add3();
  }
  function handleDecrementCounter3() {
    prop.slice.minus3();
  }
  return (
    <div className="counter">
      <Button variant="text" onClick={handleDecrementCounter3}>
        <div style={{ fontSize: "2rem" }}>-</div>
      </Button>
      <Chip sx={{ fontSize: "2rem" }} label={prop.state.counter3} />
      <Button variant="text" onClick={handleIncrementCounter3}>
        <div style={{ fontSize: "2rem" }}>+</div>
      </Button>
    </div>
  );
};

const TextInput = memo(
  (prop) => {
    const handleInputOnChange = (event) => {
      const inputText = event.target.value;
      // prop.run({ type: ACTION.INPUT_TEXT, payload: inputText });
      prop.slice.inputText(inputText);
    };
    return (
      <FormControl variant="standard">
        <InputLabel htmlFor="component-helper">Name</InputLabel>
        <Input
          id="component-helper"
          defaultValue={prop.state.text}
          aria-describedby="component-helper-text"
          onChange={handleInputOnChange}
        />
        <FormHelperText id="component-helper-text">
          {prop.state.text}
        </FormHelperText>
      </FormControl>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.state === nextProps.state;
  }
);





/*** PAGE *************************************************************************************************/
function UseState() {
  const initState = {
    counter1: 0,
    counter2: 0,
    counter3: 0,
    text: "",
  };
  const [state, setState] = useState(initState);

  const slice = {
    add1: () => {
      state.counter1 += 1;
      state.counter2 += 1;
      state.counter3 += 1;
      setState({ ...state });
    },
    minus1: () => {
      state.counter1 -= 1;
      state.counter2 -= 1;
      state.counter3 -= 1;
      setState({ ...state });
    },
    add2: () => {
      state.counter2 += 1;
      state.counter3 += 1;
      setState({ ...state });
    },
    minus2: () => {
      state.counter2 -= 1;
      state.counter3 -= 1;
      setState({ ...state });
    },
    add3: () => {
      state.counter3 += 1;
      setState({ ...state });
    },
    minus3: () => {
      state.counter3 -= 1;
      setState({ ...state });
    },
    inputText: (value) => {
      state.text = value;
      setState({ ...state });
    },
  };

  return (
    <div>
      <h1>useState</h1>
      <Counter1 slice={slice} state={state} />
      <Counter2 slice={slice} state={state} />
      <Counter3 slice={slice} state={state} />
      <div style={{ marginTop: "50px" }}>
        <TextInput slice={slice} state={state} />
      </div>
    </div>
  );
}

export default UseState;
