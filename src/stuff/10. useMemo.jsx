import { useState, useMemo } from "react";
import { Button } from "@material-ui/core";

export default function Counter() {
  const [count, setCount] = useState(0);

  // click fast and see lag
  const expensiveValue = fibonacci(34);

  // useMemo alternative
  // --------------------------
  // const expensiveValue = useMemo(() => fibonacci(34), []);

  return (
    <Button variant="contained" onClick={() => setCount(count + 1)}>
      {count}
    </Button>
  );
}

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}
