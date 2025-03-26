import React, { useState } from "react";
import * as styles from "./counter.module.scss";

export default function Counter() {
  const [count, setCounter] = useState(0);

  function increment() {
    setCounter((prev) => prev + 1);
  }

  function decrement() {
    setCounter((prev) => prev - 1);
  }

  return (
    <div className={styles.counter}>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}
