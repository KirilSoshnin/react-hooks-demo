import { useState } from "react";
import { Button } from "@material-ui/core";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Button variant="contained" onClick={() => setCount((current) => current + 1)}>
      {count}
    </Button>
  );
}
