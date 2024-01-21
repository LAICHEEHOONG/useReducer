import { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  FormHelperText,
  FormControl,
  InputLabel,
  Input,
  Button,
  Chip,
} from "@mui/material";
import styled from "@emotion/styled";

function reducer(state, action) {
  switch (action.type) {
    case "increment_1": {
      return {
        ...state,
        counter1: state.counter1 + 1,
        counter2: state.counter2 + 1,
        counter3: state.counter3 + 1,
      };
    }
    case "increment_2": {
      return {
        ...state,
        counter2: state.counter2 + 1,
        counter3: state.counter3 + 1,
      };
    }
    case "increment_3": {
      return {
        ...state,
        counter3: state.counter3 + 1,
      };
    }
    case "decrement_1": {
      return {
        ...state,
        counter1: state.counter1 - 1,
        counter2: state.counter2 - 1,
        counter3: state.counter3 - 1,
      };
    }
    case "decrement_2": {
      return {
        ...state,
        counter2: state.counter2 - 1,
        counter3: state.counter3 - 1,
      };
    }
    case "decrement_3": {
      return {
        ...state,
        counter3: state.counter3 - 1,
      };
    }
    default:
      return state;
  }
}

function App() {
  const initState = {
    counter1: 0,
    counter2: 0,
    counter3: 0,
  };
  const [state, dispatch] = useReducer(reducer, initState);
  const counterCss = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "50px",
  };

  const Counter1 = () => {
    function handleIncrementCounter1() {
      dispatch({ type: "increment_1" });
    }
    function handleDecrementCounter1() {
      dispatch({ type: "decrement_1" });
    }
    return (
      <div style={counterCss}>
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
      dispatch({ type: "increment_2" });
    }
    function handleDecrementCounter2() {
      dispatch({ type: "decrement_2" });
    }
    return (
      <div style={counterCss}>
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
      dispatch({ type: "increment_3" });
    }
    function handleDecrementCounter3() {
      dispatch({ type: "decrement_3" });
    }
    return (
      <div style={counterCss}>
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

  return (
    <div className="App">
      <Counter1 />
      <Counter2 />
      <Counter3 />
    </div>
  );
}

export default App;
