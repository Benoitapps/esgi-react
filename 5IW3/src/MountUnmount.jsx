import { useState } from "react";
import { useEffect } from "react";

export default function MountUnmount() {
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    console.log("MountUnmount mounted");
    return () => {
      console.log("will unmounted");
    };
  }, []);
  useEffect(() => {
    console.log("update", display);
    return () => {
      console.log("will update", display);
    };
  }, [display]);

  return (
    <div>
      MountUnmount
      <span>Display : {display.toString()}</span>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
    </div>
  );
}
