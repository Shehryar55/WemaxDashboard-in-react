import React from 'react'
import { Link } from 'react-router-dom'
import {MdOutlineSpaceDashboard} from 'react-icons/md'
import {BsBorderBottom} from 'react-icons/bs'
import {CgExport} from 'react-icons/cg'
import {MdOutlineProductionQuantityLimits} from 'react-icons/md'
import {TbDiscount2} from 'react-icons/tb'
import {FaExchangeAlt} from 'react-icons/fa'
import {IoTvSharp} from 'react-icons/io5'
import {FiUser} from 'react-icons/fi'
import {BiMessageRoundedMinus} from 'react-icons/bi'
import {AiFillSetting} from 'react-icons/ai'
import "../assets/css/Sidebar.css"
const Sidebar = () => {
  return (
    <React.Fragment>
        <div id="sidebar">
          <Link to="/" className="sidebarElement">
            <div className="sidebarIcon">
              <MdOutlineSpaceDashboard />
            </div>
            Dashboard
          </Link>
          <Link to="order" className="sidebarElement">
            <div className="sidebarIcon">
              <BsBorderBottom />
            </div>
            Order
          </Link>
          <Link to="exportData" className="sidebarElement">
            <div className="sidebarIcon">
              <CgExport />
            </div>
            Export Data
          </Link>
          <Link to="products" className="sidebarElement">
            <div className="sidebarIcon">
              <MdOutlineProductionQuantityLimits />
            </div>
            Products
          </Link>
          <Link to="discountPrice" className="sidebarElement">
            <div className="sidebarIcon">
              <TbDiscount2 />
            </div>
            Discount Price
          </Link>
          <Link to="changeImages" className="sidebarElement">
            <div className="sidebarIcon">
              <FaExchangeAlt />
            </div>
            Change Images
          </Link>
          <Link to="wemaxTv" className="sidebarElement">
            <div className="sidebarIcon">
              <IoTvSharp />
            </div>
            Wemax Tv
          </Link>
          <Link to="customer" className="sidebarElement">
            <div className="sidebarIcon">
              <FiUser />
            </div>
            Customer
          </Link>
          <Link to="messages" className="sidebarElement">
            <div className="sidebarIcon">
              <BiMessageRoundedMinus />
            </div>
            Messages
          </Link>
          <Link to="settings" className="sidebarElement">
            <div className="sidebarIcon">
              <AiFillSetting />
            </div>
            Settings
          </Link>
        </div>
    </React.Fragment>
  )
}

export default Sidebar