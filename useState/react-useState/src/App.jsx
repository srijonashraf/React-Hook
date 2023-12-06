/*
1. State Stores View Value/Object
2. Auto Refresh View when value changes

--Mutibility -> Change the old one.
--Immulity -> Deleteing the old one and then add the new one.

--React Redux, Justang to manage state globally
*/

import React from "react";
import Counter from "./components/Counter";
import Map from "./components/UseMapToListData";
import Object from "./components/FormInputChange";
import ImmutableArrayTODO from "./components/ImmutableArrayTODO";
import Pratice from './components/Practice';
import FormManagement from './components/FormManagement';

const App = () => {
  return (
    <div className="container d-flex flex-column align-items-center gap-5">
      {/* <h1><u>Counter</u></h1>
      <Counter />
      <h1><u>Input Form</u></h1>
      <Object />
      <h1><u>Basic TODO</u></h1>
      <ImmutableArrayTODO/>
      <h1><u>Practice</u></h1>
      <Pratice/> */}
      <h1><u>Form Manage Like a Pro</u></h1>
      <FormManagement/>
    </div>
  );
};

export default App;
