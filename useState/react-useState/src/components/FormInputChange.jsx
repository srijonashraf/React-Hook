import React from "react";
import { useState } from "react";
const Object = () => {
  const [person, setPerson] = useState({
    name: "Rahul",
    age: 30,
    city: "Dhaka",
  });

  const inputOnChange = (key, value) => {
    setPerson((person) => ({
      ...person,
      [key]: value,
    }));
  };

  return (
    <div className="container mt-4">
      <div className="fw-bold">
        <p>Name: {person["name"]}</p>
        <p>Age: {person["age"]}</p>
        <p>City: {person["city"]}</p>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            className="form-control"
            onChange={(e) => {
              inputOnChange("name", e.target.value);
            }}
            type="text"
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            className="form-control"
            onChange={(e) => {
              inputOnChange("age", e.target.value);
            }}
            type="number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            id="city"
            className="form-control"
            onChange={(e) => {
              inputOnChange("city", e.target.value);
            }}
            type="text"
          />
        </div>
      </form>
    </div>
  );
};

export default Object;
