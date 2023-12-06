import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap"; 
import toast, { Toaster } from "react-hot-toast";

const BasicUseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    toast.success("UseEffect Triggered!");
  }, [count]);

  return (
    <div className="text-center mt-5">
      <Toaster position="top-right" />
      <h1>{`|-------> Use Effect <-------|`}</h1>
      <Button className="btn-lg mt-3" onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click!
      </Button>
      <p className="fw-bold lead">Count: {count}</p>
    </div>
  );
};

export default BasicUseEffect;
