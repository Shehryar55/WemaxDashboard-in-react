import React from "react";
import Button from "react-bootstrap/Button";
const WeMaxTv = () => {
  return (
    <>
    <div className="d-flex flex-column w-75 mx-auto Wm1">
      <div className="container mt-5  ">
        <div className="container  border border-1 p-2">
          <Button variant="primary" active>
            Add Video Links
          </Button>
        </div>
      </div>

      <div className="container mt-4 ">
        <h4>WeMax TV Links</h4>
        <table className="table ">
          <thead className=" border border-1">
            <tr className="table-info">
            
              <th scope="col">Name</th>
              <th scope="col">Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-1">
              
              <td>Discount Bazar</td>
              <td>https://www.youtube.com</td>
              <td>:</td>
            </tr>
            <tr className="border border-1">
             
              <td>Hassan Ali Interview</td>
              <td>https://www.youtube.com</td>
              <td>:</td>
            </tr>
            <tr className="border border-1" >
              
              <td>Adobe</td>
              <td>https://www.youtube.com</td>
              <td className="">:</td>
            </tr>
            <tr className="border border-1">
              
              <td>Ladirs Garments</td>
              <td>https://www.youtube.com</td>
              <td>:</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
};

export default WeMaxTv;
