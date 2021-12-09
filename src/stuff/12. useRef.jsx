import { useRef } from "react";
import { Button, TextField } from "@material-ui/core";

export default function Counter() {
  const inputRef = useRef();
  const mutableCount = useRef(0);

  const onClick = () => {
    inputRef.current.focus();
    mutableCount.current++;
    console.log(mutableCount.current);
  };

  return (
    <>
      <div className="bottom-spacing">
        <TextField
          inputProps={{ ref: inputRef }}
          label="Label"
          variant="outlined"
        />
      </div>
      <Button variant="contained" onClick={onClick}>
        {mutableCount.current}
      </Button>
    </>
  );
}
