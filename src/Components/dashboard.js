import React from "react";
import "../Components/Admin/admin.css"
import "../Components/Assets/nnpc-logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./admin-card.js";
import { VscRequestChanges } from "react-icons/vsc";
import { MdOutlinePendingActions } from "react-icons/md";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa6";
import { AiOutlineEdit } from "react-icons/ai";
import { FaCheck, FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Adminorder from "./admin-order.js";
import Ordertable from "./order-table.js";

const Dashboard = () => {
    const recentOrdersHeaders = ["ID-No", "Name", "Items", "Status", "Actions"];
    const completedOrdersHeaders = ["Product name", "Supplier", "Stocks", "Amount Delivered"];

    // Define Actions component separately
    const Actions = ({ onApprove, onDecline }) => {
        return (
            <>
                <Link to="/add-form" style={{ fontSize: "22px" }} className="btn"><AiOutlineEdit /></Link>
                <button style={{ fontSize: "22px" }} className="btn" onClick={onDecline}><FaXmark /></button>
                <button style={{ fontSize: "22px" }} className="btn" onClick={onApprove}><FaCheck /></button>
            </>
        );
    };

    return (
        <>
            <div className="cardBox">
                <Card
                    aName="Requests"
                    aNum="100"
                >
                    <VscRequestChanges style={{ fontSize: "27px", fontSize: "3.5rem" }} />
                </Card>
                <Card
                    aName="Pending"
                    aNum="50"
                >
                    <MdOutlinePendingActions style={{ fontSize: "27px", fontSize: "3.5rem" }} />
                </Card>
                <Card
                    aName="Approved"
                    aNum="30"
                >
                    <FaRegThumbsUp style={{ fontSize: "27px", fontSize: "3.5rem" }} />
                </Card>
                <Card
                    aName="Declined"
                    aNum="20"
                >
                    <FaRegThumbsDown style={{ fontSize: "27px", fontSize: "3.5rem" }} />
                </Card>
            </div>
            <div className="details">
                <Adminorder header="Recent Orders" headers={recentOrdersHeaders}>
                    <Ordertable
                        idNum="npdc.b0000"
                        tName="Ekhator Iwinosa"
                        tItems="Laptop"
                        tStatus="Denied"
                        Actions={Actions}
                    />
                    <Ordertable
                        idNum="npdc.b0001"
                        tName="Osunbor Favour"
                        tItems="Laptop"
                        tStatus="Approved"
                        Actions={Actions}
                    />
                    <Ordertable
                        idNum="npdc.b0000"
                        tName="Edwin Ezue"
                        tItems="Laptop"
                        tStatus="Approved"
                        Actions={Actions}
                    />
                    <Ordertable
                        idNum="npdc.b0000"
                        tName="Ugheoke Amhanosi"
                        tItems="Laptop"
                        tStatus="Pending"
                        Actions={Actions}
                    />
                    <Ordertable
                        idNum="npdc.b0011"
                        tName="Ugiagbe Francess"
                        tItems="Laptop"
                        tStatus="Pending"
                        Actions={Actions}
                    />
                </Adminorder>
                <div className="top-products">
                    <Adminorder header="Top Products" headers={completedOrdersHeaders}>
                        <Ordertable />
                    </Adminorder>
                </div>
            </div>
        </>
    );
};

export default Dashboard;