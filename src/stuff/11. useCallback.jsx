import { useState, useCallback, useEffect } from "react";
import { Button } from "@material-ui/core";

export default function Counter() {
  const [count, setCount] = useState(0);

  const change = count < 3;

  // see alert on every click
  const callback = () => (change ? "bar" : "baz");

  // useCallback alternative
  // --------------------------
  // const callback = useCallback(() => (change ? "bar" : "baz"), [change]);

  return (
    <ButtonContainer callback={callback} count={count} setCount={setCount} />
  );
}

function ButtonContainer({ callback, count, setCount }) {
  useEffect(() => {
    const options = { foo: callback() };
    alert("options changed!");
    console.log(options);
  }, [callback]);

  return (
    <Button variant="contained" onClick={() => setCount(count + 1)}>
      {count}
    </Button>
  );
}
