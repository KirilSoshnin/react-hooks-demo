import { useLayoutEffect, useEffect, useState } from "react";
import { Button } from "@material-ui/core";

export default function Counter() {
  const [count, setCount] = useState(0);

  // useEffect runs asynchronously after render is painted to the screen.
  // click fast on the button to see flickering
  useEffect(() => {
    if (count === 1) {
      setCount(fibonacci(34) + Math.random() * 10000000000);
    }
  }, [count]);

  // useLayoutEffect runs synchronously after render but before the screen is updated.
  // uncomment below to compare
  // --------------------------
  // useLayoutEffect(() => {
  //   if (count === 1) {
  //     setCount(fibonacci(34) + Math.random() * 10000000000);
  //   }
  // }, [count]);

  return (
    <Button variant="contained" onClick={() => setCount(1)}>
      {count}
    </Button>
  );
}

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}
