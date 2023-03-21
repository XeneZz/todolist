import React, { useState } from "react";

const Incrementer = () => {
  const [n, setN] = useState(0);

  return (
    <div>
      <div>{n}</div>
      <input
        type="button"
        value="Increase"
        onClick={() => {
          setN(n + 1);
        }}
      />
      <input
        type="button"
        value="Decrease"
        onClick={() => {
          setN(n - 1);
        }}
      />
    </div>
  );
};

export default Incrementer;
