import React from 'react'
import "../index.css";
import Table from 'react-bootstrap/Table';
const Order = () => {
  return (
    <div className="container  w-100 m-auto ">
      <h1>All Orders</h1>
    <div className="container  border border-1 p-2">
    <select  aria-label="Default select example">
  <option selected>Category</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
<select  aria-label="Default select example">
  <option selected>Status</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
<select  aria-label="Default select example">
  <option selected>Price</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
<input type="date" name="" id="" />
    </div>


    <div className="mt-4 ">
        
        
        <Table striped bordered hover>
      <thead>
        <tr>
        
          <th>#Order ID</th>
          <th>Date</th>
          <th>Customer Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Category</th>
          <th>Status</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>012556</td>
          <td>5-2-2022</td>
          <td>Ali</td>
          <td>123@gmail.com</td>
          <td>0309-0078001</td>
          <td>Men Shoes</td>
          <td>2000</td>
          <td>Pending</td>
          <td>:</td>
        </tr>
        <tr>
          <td>012556</td>
          <td>5-2-2022</td>
          <td>Ali</td>
          <td>123@gmail.com</td>
          <td>0309-0078001</td>
          <td>Men Shoes</td>
          <td>2000</td>
          <td>Pending</td>
          <td>:</td>
        </tr>
        <tr>
          <td>012556</td>
          <td>5-2-2022</td>
          <td>Ali</td>
          <td>123@gmail.com</td>
          <td>0309-0078001</td>
          <td>Men Shoes</td>
          <td>2000</td>
          <td>Pending</td>
          <td>:</td>
        </tr>
        <tr>
          <td>012556</td>
          <td>5-2-2022</td>
          <td>Ali</td>
          <td>123@gmail.com</td>
          <td>0309-0078001</td>
          <td>Men Shoes</td>
          <td>2000</td>
          <td>Pending</td>
          <td>:</td>
        </tr>
        <tr>
          <td>012556</td>
          <td>5-2-2022</td>
          <td>Ali</td>
          <td>123@gmail.com</td>
          <td>0309-0078001</td>
          <td>Men Shoes</td>
          <td>2000</td>
          <td>Pending</td>
          <td>:</td>
        </tr>
        <tr>
          <td>012556</td>
          <td>5-2-2022</td>
          <td>Ali</td>
          <td>123@gmail.com</td>
          <td>0309-0078001</td>
          <td>Men Shoes</td>
          <td>2000</td>
          <td>Pending</td>
          <td>:</td>
        </tr>
        <tr>
          <td>012556</td>
          <td>5-2-2022</td>
          <td>Ali</td>
          <td>123@gmail.com</td>
          <td>0309-0078001</td>
          <td>Men Shoes</td>
          <td>2000</td>
          <td>Pending</td>
          <td>:</td>
        </tr>
        <tr>
          <td>012556</td>
          <td>5-2-2022</td>
          <td>Ali</td>
          <td>123@gmail.com</td>
          <td>0309-0078001</td>
          <td>Men Shoes</td>
          <td>2000</td>
          <td>Pending</td>
          <td>:</td>
        </tr>
        <tr>
          <td>012556</td>
          <td>5-2-2022</td>
          <td>Ali</td>
          <td>123@gmail.com</td>
          <td>0309-0078001</td>
          <td>Men Shoes</td>
          <td>2000</td>
          <td>Pending</td>
          <td>:</td>
        </tr>
        <tr>
          <td>012556</td>
          <td>5-2-2022</td>
          <td>Ali</td>
          <td>123@gmail.com</td>
          <td>0309-0078001</td>
          <td>Men Shoes</td>
          <td>2000</td>
          <td>Pending</td>
          <td>:</td>
        </tr>
        <tr>
          <td>012556</td>
          <td>5-2-2022</td>
          <td>Ali</td>
          <td>123@gmail.com</td>
          <td>0309-0078001</td>
          <td>Men Shoes</td>
          <td>2000</td>
          <td>Pending</td>
          <td>:</td>
        </tr>
        <tr>
          <td>012556</td>
          <td>5-2-2022</td>
          <td>Ali</td>
          <td>123@gmail.com</td>
          <td>0309-0078001</td>
          <td>Men Shoes</td>
          <td>2000</td>
          <td>Pending</td>
          <td>:</td>
        </tr>
       
      </tbody>
    </Table>
   <div className="OrderExp ">
 
      <a href="/">Export Date to Excel Sheet</a>
   
   </div>
    </div>
        </div>



  
  )
}

export default Order