import React, { useEffect } from "react";

function GrandChild() {
  useEffect(() => {
    console.count("GRANDCHILD MOUNTED");

    return () => {
      console.count("GRANDCHILD UNMOUNT");
    };
  }, []);

  console.count("GRANDCHILD RENDERED");

  return (
    <div style={{ border: "1px solid red", margin: "8px" }}>
      <h1>Grand Child</h1>
    </div>
  );
}

export default GrandChild;
