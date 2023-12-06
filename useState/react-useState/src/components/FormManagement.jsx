import React, { useState } from "react";

const FormManagement = () => {
  const [FormObj, SetFormObj] = useState({
    fName: "",
    lName: "",
    city: "",
    gender: "",
  });

  const handleOnChange = (key, value) => {
    SetFormObj((prevFormObj) => ({
      ...prevFormObj,
      [key]: value,
    }));
  };

  const FormSubmit = (e) => {
    e.preventDefault();
    console.log(FormObj);
  };

  return (
    <div className="container mt-5">
      <p>{JSON.stringify(FormObj)}</p>
      <form
        onSubmit={FormSubmit}
        className="form-control form-group form-floating"
      >
        <div className="mb-3">
          <input
            onChange={(e) => handleOnChange("fName", e.target.value)}
            value={FormObj.fName}
            type="text"
            id="firstName"
            placeholder="First Name"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <input
            onChange={(e) => handleOnChange("lName", e.target.value)}
            value={FormObj.lName}
            type="text"
            id="lastName"
            placeholder="Last Name"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <select
            value={FormObj.city}
            onChange={(e) => handleOnChange("city", e.target.value)}
            id="city"
            className="form-select"
          >
            <option value="" disabled>
              Select City
            </option>
            <option value="Dhaka">Dhaka</option>
            <option value="Rangpur">Rangpur</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-check-label">Gender</label>
          <div className="form-check">
            <input
              type="radio"
              name="gender"
              id="male"
              onChange={(e) => handleOnChange("gender", "Male")}
              checked={FormObj.gender === "Male"}
              className="form-check-input"
            />
            <label htmlFor="male" className="form-check-label">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              name="gender"
              id="female"
              onChange={(e) => handleOnChange("gender", "Female")}
              checked={FormObj.gender === "Female"}
              className="form-check-input"
            />
            <label htmlFor="female" className="form-check-label">
              Female
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-success btn-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormManagement;
