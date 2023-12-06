import { useState } from "react";
const Map = () => {
  const [city, SetCity] = useState([
    "Dhaka",
    "Khulna",
    "Chittagong",
    "Rangpur",
    "Khulna",
  ]);

  return (
    <div>
      <ul>
        {city.map((item, i) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Map;
