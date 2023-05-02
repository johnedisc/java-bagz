import React from "react";
import { useTimer } from "./../hooks/useTimer";
export const Timer = () => {
    const [isActive, timer, setIsActive] = useTimer();
    return (React.createElement(React.Fragment, null,
        isActive ? React.createElement("h1", null, timer) : React.createElement("h1", null, "timer stopped"),
        React.createElement("button", { onClick: () => setIsActive(!isActive) }, "start/stop")));
};
