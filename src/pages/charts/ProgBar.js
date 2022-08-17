import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
export default function ProgBar() {
    const now = 30;
    const x=60;
    const y=70;
  return (
   <React.Fragment>
    <div className='w-50 mt-5 TotalOr p-5'>
  <h3>Store Visitors</h3>
<p>Detail about your store visits</p>
<label htmlFor="">Men</label>
<ProgressBar variant="warning" now={30} label={`${now}%`}  />
<br />
<label htmlFor="">Women</label>
<ProgressBar variant="info" now={70} label={`${y}%`}  />
<br />
<label htmlFor="">Visit/Day</label>
<ProgressBar variant="success" now={60} label={`${x}%`}  />
  </div>
   </React.Fragment>
  )
}
