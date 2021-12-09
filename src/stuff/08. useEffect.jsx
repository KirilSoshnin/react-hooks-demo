import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(null);

  // runs asynchronously after render is painted to the screen.
  useEffect(() => {
    const handle = setTimeout(() => setMessage("💥"), 3000);

    return () => clearTimeout(handle);
  }, []);

  useEffect(() => {
    if (count >= 10) {
      setMessage("🔥");
    } else if (count >= 3) {
      setMessage("🎉");
    }
  }, [count]);

  return (
    <>
      <Button variant="contained" onClick={() => setCount(count + 1)}>
        {count}
      </Button>
      {message && <div className="large">{message}</div>}
    </>
  );
}
