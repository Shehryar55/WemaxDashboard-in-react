import React from "react";

import "../index.css";
import { TotalOrder } from "./charts/TotalOrder";
import { TotalProduct } from "./charts/TotalProducts";
import TotalIncome from "./charts/TotalIncome";
import Revenue from "./charts/Revenue";

import ProgBar from "./charts/ProgBar";
import Pi from "./charts/Pi";


function Dashboard() {
  return (
    <React.Fragment>
    
        <div className="container pt-5 d-flex flex-column mb-5">
          <div className="row">
            <div className="col-md-4">
              <TotalIncome />
            </div>
            <div className="col-md-4">
              <TotalOrder />
            </div>
            <div className="col-md-4">
              <TotalProduct />
            </div>
          </div>
         <div className="d-flex">
         <ProgBar/>
         <Pi/>
         </div>
       
       
      
         <Revenue/>
        
             
          </div>
          
            
         
         
      
       
        
  
   
    </React.Fragment>
  );
}

export default Dashboard;
