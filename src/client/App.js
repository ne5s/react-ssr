import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      <div>count : {count}</div>
      <button onClick={handleClick}>Click!</button>
    </div>
  );

  return <div>Test from client</div>;
}
