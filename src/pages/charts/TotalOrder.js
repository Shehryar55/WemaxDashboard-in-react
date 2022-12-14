
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "../../index.css";
const data = [
  {
    name: 'Jan',
    uv: 500,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 2000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    uv: 1000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    uv: 2000,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 800,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    uv: 3000,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    uv: 800,
    pv: 4300,
    amt: 2100,
  },
];

export function TotalOrder() {
  return (
    <React.Fragment>
    <div className='TotalOr'>
    <div className="container text-center ">
     <h4 className='pt-3 '>Today Order</h4>

    </div>
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
       
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#9DCD65" fill="rgb(250, 250, 160)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
      
    </div>


  </React.Fragment>
  )
   
}
