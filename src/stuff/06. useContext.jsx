import { useState, createContext } from "react";
import Container from "./06a. useContext Container";

export const CountContext = createContext();

export default function Counter() {
  const [count, setCount] = useState(0);

  const contextValue = {
    count,
    setCount,
  };

  return (
    <CountContext.Provider value={contextValue}>
      <Container />
    </CountContext.Provider>
  );
}
