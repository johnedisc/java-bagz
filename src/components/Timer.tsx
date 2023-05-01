import React from "react";
import { useTimer } from "./../hooks/useTimer";

export const Timer = () => {
  const [isActive, timer, setIsActive] = useTimer();
  return (
    <>
      {isActive ? <h1>{timer}</h1> : <h1>timer stopped</h1>}
      <button onClick={() => setIsActive(!isActive)}>start/stop</button>
    </>
  );
};





