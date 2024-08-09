import React, { useState } from 'react';
import nnpcLogo from "../.././Components/Assets/nnpc-logo.png";
import { MdOutlineDashboard, MdOutlineInventory2, MdOutlinePendingActions, MdOutlineQrCodeScanner } from "react-icons/md";
import { VscRequestChanges } from "react-icons/vsc";
import { FaRegThumbsDown, FaRegThumbsUp, FaChartLine } from "react-icons/fa6";
import { RiArrowTurnBackFill, RiArrowTurnForwardFill } from "react-icons/ri";
import { AiOutlineProduct, AiOutlineLineChart } from "react-icons/ai";
import { BiReceipt } from "react-icons/bi";
import { TbReportAnalytics, TbReport } from "react-icons/tb";
import { Link, NavLink } from 'react-router-dom';

const Sidebar = (props) => {
  const [collapsedSection, setCollapsedSection] = useState(null);

  const toggleCollapse = (section) => {
    setCollapsedSection(collapsedSection === section ? null : section);
  };

  return (
    <>
      <header>
        <div className="image-text">
          <span className="image">
            <img src={nnpcLogo} style={{ minWidth: "120px" }} alt="NNPC Logo" />
          </span>
        </div>
      </header>
      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links list-unstyled">
            <li className="nav-link m-link">
              <NavLink to='/' className={({ isActive }) => ` ${isActive ? 'active' : ''}`}>
                <span className='icon'><MdOutlineDashboard style={{ fontSize: "33px" }} /></span>
                <span className="text nav-text">Dashboard</span>
              </NavLink>
            </li>

            <li className={`my-2 nav-link d-flex flex-column ${collapsedSection === 'requests' ? 'expanded' : ''}`}>
              <NavLink
                to='/requests'
                className="btn btn-toggle d-flex align-items-center rounded border-0 drop"
                onClick={() => toggleCollapse('requests')}
              >
                <span className='icon'><VscRequestChanges style={{ fontSize: "33px" }} /></span>
                <span className="text nav-text">Requests</span>
              </NavLink>
              {collapsedSection === 'requests' && (
                <div className="collapse show">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 ms-3">
                    <li className="nav-link m-link">
                      <NavLink to="/pending" className="nav-link m-link link-body-emphasis text-decoration-none rounded">
                        <span className='icon'><MdOutlinePendingActions style={{ fontSize: "33px" }} /></span>
                        <span className="text nav-text">Pending</span>
                      </NavLink>
                    </li>
                    <li className="nav-link m-link">
                      <NavLink to="/approved" className="nav-link link-body-emphasis text-decoration-none rounded">
                        <span className='icon'><FaRegThumbsUp style={{ fontSize: "33px" }} /></span>
                        <span className="text nav-text">Approved</span>
                      </NavLink>
                    </li>
                    <li className="nav-link m-link">
                      <NavLink to="/declined" className="nav-link link-body-emphasis text-decoration-none rounded">
                        <span className='icon'><FaRegThumbsDown style={{ fontSize: "33px" }} /></span>
                        <span className="text nav-text">Declined</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li className={`my-2 nav-link d-flex flex-column ${collapsedSection === 'inventory' ? 'expanded' : ''}`}>
              <NavLink
                to='/inventory'
                className="btn btn-toggle d-flex align-items-center rounded border-0 drop"
                onClick={() => toggleCollapse('inventory')}
              >
                <span className='icon'><MdOutlineInventory2 style={{ fontSize: "33px" }} /></span>
                <span className="text nav-text">Inventory</span>
              </NavLink>
              {collapsedSection === 'inventory' && (
                <div className="collapse show">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 ms-3">
                    <li className="nav-link m-link">
                      <NavLink to="/inbound" className="nav-link m-link link-body-emphasis text-decoration-none rounded">
                        <span className='icon'><RiArrowTurnBackFill style={{ fontSize: "33px" }} /></span>
                        <span className="text nav-text">Inbound</span>
                      </NavLink>
                    </li>
                    <li className="nav-link m-link">
                      <NavLink to="/outbound" className="nav-link m-link link-body-emphasis text-decoration-none rounded">
                        <span className='icon'><RiArrowTurnForwardFill style={{ fontSize: "33px" }} /></span>
                        <span className="text nav-text">Outbound</span>
                      </NavLink>
                    </li>
                    <li className="nav-link m-link">
                      <NavLink to="/scan-items" className="nav-link link-body-emphasis text-decoration-none rounded">
                        <span className='icon'><MdOutlineQrCodeScanner style={{ fontSize: "33px" }} /></span>
                        <span className="text nav-text">Scan Items</span>
                      </NavLink>
                    </li>
                    <li className="nav-link m-link">
                      <NavLink to="/categories" className="nav-link link-body-emphasis text-decoration-none rounded">
                        <span className='icon'><AiOutlineProduct style={{ fontSize: "33px" }} /></span>
                        <span className="text nav-text">Categories</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li className="nav-link m-link">
              <NavLink to='/report' className={({ isActive }) => ` ${isActive ? 'active' : ''}`}>
                <span className='icon'><TbReportAnalytics style={{ fontSize: "33px" }} /></span>
                <span className="text nav-text">Report Analytics</span>
              </NavLink>
            </li>

            <li className="nav-link m-link">
              <NavLink to='/receipts'>
                <span className='icon'><BiReceipt style={{ fontSize: "33px" }} /></span>
                <span className="text nav-text">Receipts</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="bottom-content">
          <li className="mode m-link">
            <div className="sun-moon">
              <i className='bx bx-moon icon moon'></i>
              <i className='bx bx-sun icon sun'></i>
            </div>
            <span className="mode-text text">{props.isDarkMode ? 'Light mode' : 'Dark mode'}</span>
            <div className="toggle-switch" onClick={props.toggleMode}>
              <span className="switch"></span>
            </div>
          </li>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
