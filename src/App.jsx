import { useEffect, useState } from "react";
import Parent from "./Parent";

export default function App() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    console.log("APP RENDERED");
  }, []);
  return (
    <div style={{ border: "1px solid green", margin: "8px" }}>
      <h1>App</h1>
      <button
        onClick={() => {
          setShow((prev) => !prev);
        }}
      >
        Show/Hide
      </button>
      {show && <Parent />}
    </div>
  );
}
