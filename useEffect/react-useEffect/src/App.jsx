import React, { useState } from "react";
import BasicUseEffect from "./components/Counter.jsx";
import CallingApi from "./components/CallingApi.jsx";
import counterImage from "../src/assets/img/counter.png";
import ApiImage from "../src/assets/img/api.png";
import Image from "react-bootstrap/Image";

const App = () => {
  const [show, setShow] = useState(false);
  const [btnText, setBtnText] = useState("View Source Code");

  const sourceCodeHandler = () => {
    setShow(!show);
    setBtnText(show ? "View Source Code" : "Hide Source Code");
  };

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center gap-2">
      <BasicUseEffect />
      <CallingApi />
      <button className="btn btn-dark my-3 fw-bold" onClick={sourceCodeHandler}>
        {btnText}
      </button>
      {show && (
        <>
          <Image src={counterImage} className="w-50 shadow" alt="" />
          <Image src={ApiImage} className="w-50 shadow" alt="" />
        </>
      )}
    </div>
  );
};

export default App;
