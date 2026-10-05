import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  useEffect(() => {
    setMessage(`update Count - ${count}`);
  }, [count]);

  return (
    <>
      <div className="counter">
        <button onClick={increment}>+</button>

        <div>{count}</div>

        <button onClick={decrement}>-</button>
      </div>

      <div>{message}</div>
    </>
  );
}

export default Counter;
