import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../index.css";
const Settings = () => {
  return (
  <>
  <div className="container">
       <div className="container fw-bold pb-2 dSetting" >
    <h4 className='m-auto w-75 pt-1'>Edit Profile</h4>
 
    <Form>
      

      <Form.Group className="mb-1 w-75 m-auto " controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-1 w-75 m-auto" controlId="formBasicPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-1 w-75 m-auto" controlId="formBasicPassword">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="text" placeholder="Mobile Number" />
      </Form.Group>
      <Form.Group className="mb-1 w-75 m-auto" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-1 w-75 m-auto" controlId="formBasicPassword">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="City" />
      </Form.Group>
      <Form.Group className="mb-1 w-75 m-auto" controlId="formBasicPassword">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Address" />
      </Form.Group>
      <Form.Group className="mb-1 w-75 m-auto" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-1 w-75 m-auto" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>
      <Form.Group className="mb-1 w-75 m-auto " controlId="formBasicCheckbox">
        <div className='d-flex justify-content-between mt-2' >
        <Button className="SettingButton">
        Update
      </Button>
      <Button className="SettingButton" >
        Cancel
      </Button>
        </div>
       
      </Form.Group>
   
    </Form>
    </div>
    
    
  </div></>
  )
}

export default Settings