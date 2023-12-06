import React, { useState } from "react";

const ImmutableArrayTODO = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const AddToList = () => {
    list.push(item);
    setList([...list]);
  };

  const RemoveItem = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };

  return (
    <div className="d-flex flex-column gap-2 align-items-center">
      <table className="table table-bordered">
        <tbody>
          {list.length !== 0 ? (
            list.map((element, index) => {
              return (
                <tr>
                  <td>{element}</td>
                  <td>
                    <button
                      onClick={() => RemoveItem(index)}
                      className="btn btn-danger"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
      <div className="d-flex gap-2">
        <input
          className="form-control"
          type="text"
          placeholder="Item"
          onChange={(e) => setItem(e.target.value)}
        />
        <button className="btn btn-primary" onClick={AddToList}>
          Add
        </button>
      </div>
    </div>
  );
};

export default ImmutableArrayTODO;
