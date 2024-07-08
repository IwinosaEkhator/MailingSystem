import React, { useState } from 'react'

import nnpcLogo from "./Assets/nnpc-logo.png"
import { MdOutlineDashboard, MdOutlineInventory2, MdOutlinePendingActions, MdOutlineQrCodeScanner} from "react-icons/md";
import { VscRequestChanges } from "react-icons/vsc";
import { FaRegThumbsDown, FaRegThumbsUp, FaChartLine } from "react-icons/fa6";
import { GiEntryDoor } from "react-icons/gi";
import { RiArrowTurnBackFill } from "react-icons/ri";
import { AiOutlineProduct, AiOutlineLineChart } from "react-icons/ai";
import { BiReceipt } from "react-icons/bi";
import { TbReportAnalytics, TbReport } from "react-icons/tb";
import { Link } from 'react-router-dom';


const Sidebar = (props) => {


    // const modeSwitch = body.querySelector(".toggle-switch");
    // const modeText = body.querySelector(".mode-text");



    // modeSwitch.addEventListener("click", () => {
    //     body.classList.toggle("dark");

    //     if (body.classList.contains("dark")) {
    //         modeText.innerText = "Light mode";
    //     } else {
    //         modeText.innerText = "Dark mode";

    //     }
    // });

    // const [isDarkMode, setIsDarkMode] = useState(false);

    // const toggleMode = () => {
    //     setIsDarkMode(!isDarkMode);
    // };








    return (
        <>
            <header>
                <div className="image-text">
                    <span className="image">
                        <img src={nnpcLogo} style={{ minWidth: "120px" }} />
                    </span>

                    {/* <div className="text logo-text">
                            <span className="name">Codinglab</span>
                            <span className="profession">Web developer</span>
                        </div> */}
                </div>

            </header>
            <div className="menu-bar">
                <div className="menu">

                    {/* <li className="search-box" onClick={searchBar}>
                            <i className='bx bx-search icon'></i>
                            <input type="text" placeholder="Search..." />
                        </li> */}

                    <ul className="menu-links list-unstyled">


                        <li className="nav-link m-link">
                            <Link to='/'>
                                <span className='icon'><MdOutlineDashboard style={{ fontSize: "33px" }} /></span>
                                <span className="text nav-text">Dashboard</span>
                            </Link>

                        </li>

                        <li class="my-2 nav-link d-flex flex-column">
                            <Link to='/requests' class="btn btn-toggle align-items-center rounded border-0 collapsed drop" data-bs-toggle="collapse" data-bs-target="#request-collapse" aria-expanded="false">
                                <span className='icon'><VscRequestChanges style={{ fontSize: "33px" }} /></span>
                                <span className="text nav-text">Requests</span>
                            </Link>
                            <div class="collapse" id="request-collapse">
                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 ms-3">
                                    <li class="nav-link m-link">
                                        <Link to="/pending" class="nav-link m-link link-body-emphasis text-decoration-none rounded">
                                            <span className='icon'><MdOutlinePendingActions style={{ fontSize: "33px" }} /></span>
                                            <span className="text nav-text">Pending</span>
                                        </Link>
                                    </li>
                                    <li class="nav-link m-link">
                                        <Link to="/approved" class="nav-link link-body-emphasis text-decoration-none rounded">
                                            <span className='icon'><FaRegThumbsUp style={{ fontSize: "33px" }} /></span>
                                            <span className="text nav-text">Approved</span>
                                        </Link>
                                    </li>
                                    <li class="nav-link m-link">
                                        <Link to="/declined" class="nav-link link-body-emphasis text-decoration-none rounded">
                                            <span className='icon'><FaRegThumbsDown style={{ fontSize: "33px" }} /></span>
                                            <span className="text nav-text">Declined</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="my-2 nav-link d-flex flex-column">
                            <Link to='/requests' class="btn btn-toggle align-items-center rounded border-0 collapsed drop" data-bs-toggle="collapse" data-bs-target="#inventory-collapse" aria-expanded="true">
                                <span className='icon'><MdOutlineInventory2 style={{ fontSize: "33px" }} /></span>
                                <span className="text nav-text">Inventory</span>
                            </Link>
                            <div class="collapse" id="inventory-collapse">
                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 ms-3">
                                    <li class="nav-link m-link">
                                        <Link to="/pending" class="nav-link m-link link-body-emphasis text-decoration-none rounded">
                                            <span className='icon'><RiArrowTurnBackFill style={{ fontSize: "33px" }} /></span>
                                            <span className="text nav-text">Inbound</span>
                                        </Link>
                                    </li>
                                    <li class="nav-link m-link">
                                        <Link to="/declined" class="nav-link link-body-emphasis text-decoration-none rounded">
                                            <span className='icon'><MdOutlineQrCodeScanner style={{ fontSize: "33px" }} /></span>
                                            <span className="text nav-text">Scan Items</span>
                                        </Link>
                                    </li>
                                    <li class="nav-link m-link">
                                        <Link to="/declined" class="nav-link link-body-emphasis text-decoration-none rounded">
                                            <span className='icon'><AiOutlineProduct style={{ fontSize: "33px" }} /></span>
                                            <span className="text nav-text">Categories</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="my-2 nav-link d-flex flex-column">
                            <Link to='/requests' class="btn btn-toggle align-items-center rounded border-0 collapsed drop" data-bs-toggle="collapse" data-bs-target="#report-collapse" aria-expanded="false">
                                <span className='icon'><TbReportAnalytics style={{ fontSize: "33px" }} /></span>
                                <span className="text nav-text">Report Analytics</span>
                            </Link>
                            <div class="collapse" id="report-collapse">
                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 ms-3">
                                    <li class="nav-link m-link">
                                        <Link to="/pending" class="nav-link m-link link-body-emphasis text-decoration-none rounded">
                                            <span className='icon'><TbReport style={{ fontSize: "33px" }} /></span>
                                            <span className="text nav-text">Delivery Report</span>
                                        </Link>
                                    </li>
                                    <li class="nav-link m-link">
                                        <Link to="/approved" class="nav-link link-body-emphasis text-decoration-none rounded">
                                            <span className='icon'><AiOutlineLineChart style={{ fontSize: "33px" }} /></span>
                                            <span className="text nav-text">Growth</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-link m-link">
                            <Link to='/'>
                                <span className='icon'><BiReceipt style={{ fontSize: "33px" }} /></span>
                                <span className="text nav-text">Receipts</span>
                            </Link>

                        </li>
                    </ul>
                </div>

                <div className="bottom-content">
                    <li className="m-link">
                        <Link to="#" style={{ padding: "0 30px 0 0" }}>
                            <GiEntryDoor className='icon' style={{ fontSize: "27px" }} />
                            <span className="text nav-text">Logout</span>
                        </Link>
                    </li>

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

    )
}

export default Sidebar;