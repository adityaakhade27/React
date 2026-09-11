import React from "react";
import { useEffect } from "react";

const Addition = () => {
  function add() {
    let a = 10;
    let b = 40;
    let c = parseInt(a) + parseInt(b);
    console.log(c);
  }

  useEffect(() => {
    add();
  });

  return (
    <>
      <h1 style={{ backgroundColor: "AccentColor" }}>Additon Page</h1>
    </>
  );
};

export default Addition;
