import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
import Table from 'react-bootstrap/Table';
import img from "../images/sm.png"
const Products = () => {
  return (
    <>
<div  className="container mt-5 ">
  
        <h2 className='Pd1 pt-5 pb-5 m-0'>&nbsp;&nbsp;&nbsp;Product List</h2>
       
        
        <Table bordered striped hover>
      <thead className='Pd1'>
        <tr>
          <th>Images</th>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Product Description</th>
          <th>Main Category</th>
          <th>Size</th>
          <th>Inventory</th>
          <th>Sub-Category</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img src={img} alt="" className='img-fluid PdImg' /></td>
          <td>001</td>
          <td>Jeans</td>
          <td>Description</td>
          <td>Category</td>
          <td>Large</td>
          <td>Inventory</td>
          <td>Sub-Category</td>
        </tr>
        <tr>
          <td><img src={img} alt="" className='img-fluid PdImg' /></td>
          <td>001</td>
          <td>Jeans</td>
          <td>Description</td>
          <td>Category</td>
          <td>Large</td>
          <td>Inventory</td>
          <td>Sub-Category</td>
        </tr>
        <tr>
          <td><img src={img} alt="" className='img-fluid PdImg' /></td>
          <td>001</td>
          <td>Jeans</td>
          <td>Description</td>
          <td>Category</td>
          <td>Large</td>
          <td>Inventory</td>
          <td>Sub-Category</td>
        </tr>
        <tr>
          <td><img src={img} alt="" className='img-fluid PdImg' /></td>
          <td>001</td>
          <td>Jeans</td>
          <td>Description</td>
          <td>Category</td>
          <td>Large</td>
          <td>Inventory</td>
          <td>Sub-Category</td>
        </tr>
        <tr>
          <td><img src={img} alt="" className='img-fluid PdImg' /></td>
          <td>001</td>
          <td>Jeans</td>
          <td>Description</td>
          <td>Category</td>
          <td>Large</td>
          <td>Inventory</td>
          <td>Sub-Category</td>
        </tr>
        <tr>
          <td><img src={img} alt="" className='img-fluid PdImg' /></td>
          <td>001</td>
          <td>Jeans</td>
          <td>Description</td>
          <td>Category</td>
          <td>Large</td>
          <td>Inventory</td>
          <td>Sub-Category</td>
        </tr>
        <tr>
          <td><img src={img} alt="" className='img-fluid PdImg' /></td>
          <td>001</td>
          <td>Jeans</td>
          <td>Description</td>
          <td>Category</td>
          <td>Large</td>
          <td>Inventory</td>
          <td>Sub-Category</td>
        </tr>
        <tr>
          <td><img src={img} alt="" className='img-fluid PdImg' /></td>
          <td>001</td>
          <td>Jeans</td>
          <td>Description</td>
          <td>Category</td>
          <td>Large</td>
          <td>Inventory</td>
          <td>Sub-Category</td>
        </tr>
        <tr>
          <td><img src={img} alt="" className='img-fluid PdImg' /></td>
          <td>001</td>
          <td>Jeans</td>
          <td>Description</td>
          <td>Category</td>
          <td>Large</td>
          <td>Inventory</td>
          <td>Sub-Category</td>
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
    </>
  )
}

export default Products