import React, { useState, useEffect } from "react";

function ClockWithControl() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return; // stop updating when paused

    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]); // re-run when isRunning changes

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>⏰ Clock With Start/Stop</h1>
      <h2>{time}</h2>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
    </div>
  );
}

export default ClockWithControl;
