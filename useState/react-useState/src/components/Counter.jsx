import { useState } from "react";

const Counter = () => {
  const [population, SetPopulation] = useState(0);

  return (
    <div className="d-flex flex-column align-items-center">
      <h1>{population}</h1>
      <div className="d-flex gap-2">
        <button
          className="btn btn-outline-success btn-lg"
          onClick={() => SetPopulation((population) => population + 1)}
        >
          ➕
        </button>
        <button
          className="btn btn-outline-danger btn-lg"
          onClick={() =>
            SetPopulation((population) =>
              population > 0 ? population - 1 : population
            )
          }
        >
          ➖
        </button>

        <button
          className="btn btn-lg btn-outline-warning"
          onClick={() => SetPopulation((population) => (population = 0))}
        >
          🔃
        </button>
      </div>
    </div>
  );
};

export default Counter;
