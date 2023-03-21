import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let intervalID = null;

    if (isRunning) {
      intervalID = setInterval(() => {
        setCount((count) => count + 1);
      }, 100);
    }

    return () => clearInterval(intervalID);
  }, [isRunning]);

  const handleToggle = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={handleToggle}>{isRunning ? "pause" : "play"}</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
