import React, { useState } from "react";
import { useEffect } from "react";

const UseEffectHook = () => {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);

  useEffect(() => {
    alert("useEffect");
  }, [count]);

  return (
    <>
      <h1 style={{ backgroundColor: "darkkhaki" }}>UseEffect Hook Page</h1>
      <h2>Count : {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      {/* <h2>Remove Cart : {count2}</h2>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button> */}
    </>
  );
};

export default UseEffectHook;
