import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";

const CallingApi = () => {
  const [Data, setData] = useState([]);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    if (isButtonClicked) {
      (async () => {
        try {
          let response = await fetch(
            "https://crud-backend-srijonashraf.vercel.app/api/v1/ReadProduct"
          );
          let data = await response.json();
          setData(data);
          toast.success("Data Fetched Successfully!");
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      })();
    }
  }, [isButtonClicked]);

  const handleClick = () => {
    setIsButtonClicked(true);
  };


  const renderTableHeaders = () => {
    try {
      if (isButtonClicked && Data["data"].length !== 0) {
        const keys = Object.keys(Data["data"][0]);
        return keys.map((key) => (
          <th key={key}>{key.replace(/_/g, "").toLocaleUpperCase()}</th>
        ));
      } else {
        <th>No Data Found!</th>;
      }
    } catch (error) {
      return null;
    }
  };

  const renderTableBody = () => {
    try {
      if (isButtonClicked && Data["data"].length !== 0) {
        return Data["data"].map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((value, subIndex) => (
              <td key={subIndex}>{value}</td>
            ))}
          </tr>
        ));
      } else {
        return (
          <tr>
            <td
              colSpan={
                Data["data"][0] ? Object.keys(Data["data"][0]).length : 1
              }
            >
              No Data found!
            </td>
          </tr>
        );
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <Button variant="outline-success" className="my-3 btn-lg" onClick={handleClick}>
        Fetch Data!
      </Button>
      <table className="table table-bordered w-50">
        <thead>
          <tr>{renderTableHeaders()}</tr>
        </thead>
        <tbody>{renderTableBody()}</tbody>
      </table>
      <Toaster position="top-right" />
    </div>
  );
};

export default CallingApi;
