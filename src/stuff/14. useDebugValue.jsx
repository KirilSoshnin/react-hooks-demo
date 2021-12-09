import { useState, useDebugValue } from "react";
import { Button } from "@material-ui/core";

export default function Counter() {
  const [count, setCount] = useCount(0);

  return (
    <Button variant="contained" onClick={() => setCount(count + 1)}>
      {count}
    </Button>
  );
}

function useCount() {
  const [count, setCount] = useState(0);
  useDebugValue(count > 0 ? "positive" : "0, default");

  return [count, setCount];
}
