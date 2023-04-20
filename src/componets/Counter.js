import { animate } from "framer-motion";
import React, { useEffect, useRef } from "react";

export default function Counter({ from, to }) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 4,
      onUpdate(value) {
        node.textContent = value.toFixed(0);
      }
    });

    return () => controls.stop();
  }, [from, to]);

  return <p ref={nodeRef} />;
}

function App() {
  return <Counter from={0} to={100} />;
}