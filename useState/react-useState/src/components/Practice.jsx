import React from "react";
import { useState } from "react";

const Pratice = () => {
  // For Counter
  // const [count,setCount] = useState(0);

  // For Object
  //   const [employee, setEmployee] = useState({
  //     name: "Srijon",
  //     age: 23,
  //     id: "201145",
  //     position: "SE",
  //   });

  //   const handleOnChange = (key,value) => {
  //     setEmployee((employee) => ({
  //       ...employee,
  //       [key]: value,
  //     }));
  // };

  // For Array
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const AddToList = () => {
    list.push(item);
    setList([...list]);
  };

  const RemoveElement = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };

  return (
    // Counter
    // <div>
    //     <p>{count}</p>
    //     <button onClick={()=>setCount((count)=>count+1)}>Add</button>
    //     <button onClick={()=>setCount((count)=>(count<=0 ? count = count : count -=1))}>Substract</button>
    //     <button onClick={()=>setCount((count)=>count=0)}>Reset</button>

    // </div>

    //Object
    // <div className="mt-4">
    //   <p>{employee.name}</p>
    //   <form action="" className="from-group form-control">
    //     <label htmlFor="">Name</label>
    //     <input
    //       type="text"
    //       className="form-control"
    //       onChange={(e) => handleOnChange('name',e.target.value)}
    //     />
    //   </form>
    // </div>

    //Array
    <div>
      <table className="table table-bordered mt-4">
        <tbody className="table-body">
          {list.length !== 0 ? (
            list.map((element, index) => {
              return (
                <tr>
                  <td>{element}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => RemoveElement(index)}>Remove</button>
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
          type="text"
          className="form-control"
          onChange={(e) => setItem(e.target.value)}
        />
        <button className="btn btn-success" onClick={() => AddToList()}>AddToList</button>
      </div>
    </div>
  );
};

export default Pratice;
