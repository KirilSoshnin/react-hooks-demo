import { useReducer } from "react";
import { ButtonGroup, Button, LinearProgress } from "@material-ui/core";

function countReducer(state, action) {
  switch (action.type) {
    case "increment":
      return Math.min(100, state + 10);
    case "decrement":
      return Math.max(0, state - 10);
    default:
      throw new Error();
  }
}

export default function Counter() {
  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    <>
      <LinearProgress
        className="bottom-spacing"
        variant="determinate"
        value={count}
      />
      <ButtonGroup variant="contained">
        <Button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </Button>
        <Button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </Button>
      </ButtonGroup>
    </>
  );
}
