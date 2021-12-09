import { Button } from "@material-ui/core";
import { useContext } from "react";
import { CountContext } from "./06. useContext";

export default function ButtonUsingContext() {
  const { count, setCount } = useContext(CountContext);

  return (
    <Button variant="contained" onClick={() => setCount(count + 1)}>
      {count}
    </Button>
  );
}
