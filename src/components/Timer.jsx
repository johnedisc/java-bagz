import { useState, useEffect } from "react";

export const Timer = () => {
  const [isActive, setIsActive] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setTimer(timerState => timerState + 1)
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <>
      {isActive ? <h1>{timer}</h1> : <h1>timer stopped</h1>}
      <button onClick={() => setIsActive(!isActive)}>start/stop</button>
    </>
  );
};





