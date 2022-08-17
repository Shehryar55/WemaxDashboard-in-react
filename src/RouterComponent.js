import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./assets/css/Router.css"
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Order from './pages/Order'
import ExportData from './pages/ExportData'
import Products from './pages/Products'
import DiscountPrice from './pages/DiscountPrice'
import ChangeImages from './pages/ChangeImages'
import WemaxTv from './pages/WemaxTv'
import Customer from './pages/Customer'
import Messages from './pages/Messages'
import Settings from './pages/Settings'
const RouterComponent = () => {
  return (
    <div id='routerComponent'>
        <Router>
            <Sidebar/>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/order' element={<Order />} />
                <Route path='/exportData' element={<ExportData />} />
                <Route path='/products' element={<Products />} />
                <Route path='/discountPrice' element={<DiscountPrice />} />
                <Route path='/changeImages' element={<ChangeImages />} />
                <Route path='/wemaxTv' element={<WemaxTv />} />
                <Route path='/customer' element={<Customer />} />
                <Route path='/messages' element={<Messages />} />
                <Route path='/settings' element={<Settings />} />
            </Routes>
        </Router>
    </div>
  )
}

export default RouterComponent