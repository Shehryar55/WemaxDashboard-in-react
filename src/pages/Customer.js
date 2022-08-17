import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
import Table from 'react-bootstrap/Table';
const Customer = () => {
  return (
    <div className="container mt-5 w-75 m-auto ">
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
        <h2 className='mb-4'>Customers</h2>
        
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Customer Name</th>
          <th>#Order ID</th>
          <th>Price</th>
          <th>Date</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ali</td>
          <td>001</td>
          <td>2000</td>
          <td>5-2-2022</td>
          <td>123@gmail.com</td>
          <td>01234567891</td>
          <td>:</td>
        </tr>
        <tr>
          <td>Ali</td>
          <td>001</td>
          <td>2000</td>
          <td>5-2-2022</td>
          <td>123@gmail.com</td>
          <td>01234567891</td>
          <td>:</td>
        </tr>
        <tr>
          <td>Ali</td>
          <td>001</td>
          <td>2000</td>
          <td>5-2-2022</td>
          <td>123@gmail.com</td>
          <td>01234567891</td>
          <td>:</td>
        </tr>
        <tr>
          <td>Ali</td>
          <td>001</td>
          <td>2000</td>
          <td>5-2-2022</td>
          <td>123@gmail.com</td>
          <td>01234567891</td>
          <td>:</td>
        </tr>
        <tr>
          <td>Ali</td>
          <td>001</td>
          <td>2000</td>
          <td>5-2-2022</td>
          <td>123@gmail.com</td>
          <td>01234567891</td>
          <td>:</td>
        </tr>
        <tr>
          <td>Ali</td>
          <td>001</td>
          <td>2000</td>
          <td>5-2-2022</td>
          <td>123@gmail.com</td>
          <td>01234567891</td>
          <td>:</td>
        </tr>
        <tr>
          <td>Ali</td>
          <td>001</td>
          <td>2000</td>
          <td>5-2-2022</td>
          <td>123@gmail.com</td>
          <td>01234567891</td>
          <td>:</td>
        </tr>
        <tr>
          <td>Ali</td>
          <td>001</td>
          <td>2000</td>
          <td>5-2-2022</td>
          <td>123@gmail.com</td>
          <td>01234567891</td>
          <td>:</td>
        </tr>
        <tr>
          <td>Ali</td>
          <td>001</td>
          <td>2000</td>
          <td>5-2-2022</td>
          <td>123@gmail.com</td>
          <td>01234567891</td>
          <td>:</td>
        </tr>
       
      </tbody>
    </Table>
    <div className='d-flex justify-content-between'>
   <div> 
    <select name="" id="">

    <option value="">Show 10</option>
    <option value="">Show 09</option>
      </select>
    </div>
    <div>
    <Pagination>
      <Pagination.First />
     
      <Pagination.Item active>{1}</Pagination.Item>
     

      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
    
   
      <Pagination.Last />
     
    </Pagination>
    </div>
    </div>
    </div>
        </div>



  
  )
}

export default Customer