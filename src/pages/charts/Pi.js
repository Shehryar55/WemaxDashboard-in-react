import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
   
    datasets: [
      {
        label: '# of Votes',
        data: [20, 15, 15, 25],
        backgroundColor: [
          'cyan',
          'yellow',
          'lime',
          'pink',
         
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
function Pi() {
  return (
    <React.Fragment>

        <div className="container  m-auto w-50" >
<div className='w-50 m-auto'>
<Doughnut data={data}  />
</div>
       
        </div>

    </React.Fragment>
  )
}

export default Pi