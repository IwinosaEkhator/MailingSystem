import React, { useState } from "react";

import "../Components/Admin/admin.css"
import "../Components/Assets/nnpc-logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Adminorder from "./admin-order.js";
import Ordertable from "./order-table.js";

const Approved = () => {


    return (

        <>
            <div className="details">
                <Adminorder  header="Approved">
                    <Ordertable
                        idNum="npdc.b0000"
                        tName="Ekhator Iwinosa"
                        tItems="Laptop"
                        tStatus="Denied"
                    />
                    <Ordertable
                        idNum="npdc.b0001"
                        tName="Osunbor Favour"
                        tItems="Laptop"
                        tStatus="Approved"
                    />
                    <Ordertable
                        idNum="npdc.b0000"
                        tName="Edwin Ezue"
                        tItems="Laptop"
                        tStatus="Approved"
                    />
                    <Ordertable
                        idNum="npdc.b0000"
                        tName="Ugheoke Amhanosi"
                        tItems="Laptop"
                        tStatus="Pending"
                    />
                    <Ordertable
                        idNum="npdc.b0011"
                        tName="Ugiagbe Francess"
                        tItems="Laptop"
                        tStatus="Pending"
                    />
                </Adminorder>
            </div>
        </>
    )
};

export default Approved;