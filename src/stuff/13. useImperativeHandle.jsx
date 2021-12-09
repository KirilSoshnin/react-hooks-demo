import { useImperativeHandle, useRef, forwardRef } from "react";
import { Button, TextField } from "@material-ui/core";

export default function Counter() {
  const inputRef = useRef();

  const onClick = () => {
    inputRef.current.validate();
  };

  return (
    <>
      <InputContainer ref={inputRef} />
      <Button variant="contained" onClick={onClick}>
        Validate
      </Button>
    </>
  );
}

const InputContainer = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    validate: () => {
      alert("validated");
    },
  }));

  return (
    <div className="bottom-spacing">
      <TextField inputProps={{ ref: ref }} label="Label" variant="outlined" />
    </div>
  );
});
