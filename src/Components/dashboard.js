import React from "react";
import "../Components/Admin/admin.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./admin-card.js";
import { VscRequestChanges } from "react-icons/vsc";
import { MdOutlinePendingActions } from "react-icons/md";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa6";
import Adminorder from "./admin-order.js";
import Ordertable, { AddedProducts, TopProducts } from "./order-table.js";
import AreaChartComponent from "./AreaChart.js";

const Dashboard = () => {

    const recentOrdersHeaders = ["ID-No", "Name", "Items", "Status", "Actions"];
    const topProductsHeaders = ["Product name", "Supplier", "Stocks", "Amount Delivered"];
    const addedProductHeaders = ["Product name", "Stocks", "Supplier"];

    return (
        <>
            <div className="main-inside px-3">
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
                    <Adminorder header="Recent Orders" headers={recentOrdersHeaders} hLink="/requests" hName="View All">
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
                    <div className="d-flex mt-5 justify-content-between">
                        <div className="top-products">
                            <Adminorder header="Top Products" headers={topProductsHeaders}>
                                <TopProducts
                                    pName="DELL LATITUDE"
                                    pSupplier="Iwinosa"
                                    pStocks="100"
                                    pAmount="36"
                                />
                                <TopProducts
                                    pName="DELL LATITUDE"
                                    pSupplier="Iwinosa"
                                    pStocks="100"
                                    pAmount="36"
                                />
                                <TopProducts
                                    pName="DELL LATITUDE"
                                    pSupplier="Iwinosa"
                                    pStocks="100"
                                    pAmount="36"
                                />
                                <TopProducts
                                    pName="DELL LATITUDE"
                                    pSupplier="Iwinosa"
                                    pStocks="100"
                                    pAmount="36"
                                />
                                <TopProducts
                                    pName="DELL LATITUDE"
                                    pSupplier="Iwinosa"
                                    pStocks="100"
                                    pAmount="36"
                                />
                                <TopProducts
                                    pName="DELL LATITUDE"
                                    pSupplier="Iwinosa"
                                    pStocks="100"
                                    pAmount="36"
                                />
                            </Adminorder>
                        </div>
                        <div className="chart1">
                            <Adminorder header="">
                                {/* Chart content goes here */}
                                <AreaChartComponent/>
                            </Adminorder>
                        </div>
                    </div>

                    <div className="added-product mt-5">
                        <Adminorder header="Added Products" headers={addedProductHeaders} hName="+">
                            <AddedProducts
                                aName="DELL LATITUDE"
                                aStocks="100"
                                aSupplier="Iwinosa"
                            />
                        </Adminorder>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;