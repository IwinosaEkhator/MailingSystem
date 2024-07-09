import React from 'react';
import "../Components/Admin/admin.css";

import { FaBell } from "@react-icons/all-files/fa/FaBell";
import { BsTrash3 } from "react-icons/bs";



const Navbar = () => {

    return (
        <>
            <header className="pb-3 mb-4 border-bottom pt-4 dashboard-navbar">
                <div className="container d-flex flex-wrap justify-content-center">
                    <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
                        <span className="fs-4 welcome">Welcome Back, Admin👏</span>
                    </a>
                    <div className="d-flex align-items-center">
                        <div className="dropdown">
                            <FaBell className='me-3 dropdown-toggle' style={{ backgroundColor: "none" }} data-bs-toggle="dropdown" aria-expanded="false" />
                            <div className="dropdown-menu pt-0 mx-0 mt-4 rounded-3 shadow overflow-hidden w-300px" data-bs-theme="light">
                                <form className="p-2 mb-2 bg-body-tertiary border-bottom">
                                    <input type="search" className="form-control" autocomplete="false" placeholder="Type to filter..." />
                                </form>
                                <ul className="list-unstyled mb-0">
                                    <li><a className="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                                        <span className="d-inline-block bg-warning rounded-circle p-1"></span>
                                        Action
                                    </a></li>
                                    <li><a className="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                                        <span className="d-inline-block bg-warning rounded-circle p-1"></span>
                                        Another action
                                    </a></li>
                                    <li><a className="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                                        <span className="d-inline-block bg-warning rounded-circle p-1"></span>
                                        Something else here
                                    </a></li>
                                    <li><a className="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                                        <span className="d-inline-block bg-warning rounded-circle p-1"></span>
                                        Separated link
                                    </a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <a className="dropdown-item dropdown-item-danger d-flex gap-2 align-items-center" href="#">
                                            <BsTrash3 style={{fontSize: "18px"}}/>
                                            Clear
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-4" role="search">
                            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                        </form>

                        <div className="dropdown text-end">
                            <a href="#" className="d-flex justify-content-center align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle me-1" />
                            </a>
                            <ul className="dropdown-menu text-small">
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </div>

                    </div>

                </div>
            </header>
        </>
    )


}

export default Navbar;