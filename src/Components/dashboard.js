import React from "react";
import "../Components/Admin/admin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import Card from "./admin-card.js";
import { VscRequestChanges } from "react-icons/vsc";
import { MdOutlinePendingActions } from "react-icons/md";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa6";
import Adminorder from "./admin-order.js";
import Ordertable, { AddedProducts, TopProducts } from "./order-table.js";
import LineGraph from "./Charts/Line.js";
import PieGraph from "./Charts/Pie.js";

const Dashboard = () => {
  const recentOrdersHeaders = [
    "ID-No",
    "Name",
    "Items",
    "Requested Time",
    "Status",
    "Actions",
  ];
  const topProductsHeaders = [
    "Product name",
    "Supplier",
    "Stocks",
    "Amount Delivered",
  ];
  const addedProductHeaders = ["Product name", "Stocks", "Supplier"];

  return (
    <>
      <div className="main-inside px-3">
        <div className="cardBox">
          <Card aName="Requests" aNum="100" aLink="/requests">
            <VscRequestChanges
              style={{ fontSize: "27px", fontSize: "3.5rem" }}
            />
          </Card>
          <Card aName="Pending" aNum="50" aLink="/pending">
            <MdOutlinePendingActions
              style={{ fontSize: "27px", fontSize: "3.5rem" }}
            />
          </Card>
          <Card aName="Approved" aNum="30" aLink="/approved">
            <FaRegThumbsUp style={{ fontSize: "27px", fontSize: "3.5rem" }} />
          </Card>
          <Card aName="Declined" aNum="20" aLink="/declined">
            <FaRegThumbsDown style={{ fontSize: "27px", fontSize: "3.5rem" }} />
          </Card>
        </div>
        <div className="details">
          <Adminorder
            header="Recent Orders"
            headers={recentOrdersHeaders}
            hLink="/requests"
            hName="View All"
          >
            <Ordertable
              idNum="npdc.b0000"
              tName="Ekhator Iwinosa"
              tItems="Laptop"
              tStatus="Denied"
              tDate="10-08-2024"
            />
            <Ordertable
              idNum="npdc.b0001"
              tName="Osunbor Favour"
              tItems="Laptop"
              tStatus="Approved"
              tDate="10-08-2024"
            />
            <Ordertable
              idNum="npdc.b0000"
              tName="Edwin Ezue"
              tItems="Laptop"
              tStatus="Approved"
              tDate="10-08-2024"
            />
            <Ordertable
              idNum="npdc.b0000"
              tName="Ugheoke Amhanosi"
              tItems="Laptop"
              tStatus="Pending"
              tDate="10-08-2024"
            />
            <Ordertable
              idNum="npdc.b0011"
              tName="Ugiagbe Francess"
              tItems="Laptop"
              tStatus="Pending"
              tDate="10-08-2024"
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
            <div className="chart1 p-5">
              {/* Chart content goes here */}
              <PieGraph />
            </div>
          </div>

          <div className="d-flex mt-5 justify-content-between">
            <div className="added-product">
              <Adminorder
                header="Added Products"
                headers={addedProductHeaders}
                hName="+"
              >
                <AddedProducts
                  aName="DELL LATITUDE"
                  aStocks="100"
                  aSupplier="Iwinosa"
                />
                <AddedProducts
                  aName="DELL LATITUDE"
                  aStocks="100"
                  aSupplier="Iwinosa"
                />
                <AddedProducts
                  aName="DELL LATITUDE"
                  aStocks="100"
                  aSupplier="Iwinosa"
                />
                <AddedProducts
                  aName="DELL LATITUDE"
                  aStocks="100"
                  aSupplier="Iwinosa"
                />
                <AddedProducts
                  aName="DELL LATITUDE"
                  aStocks="100"
                  aSupplier="Iwinosa"
                />
                <AddedProducts
                  aName="DELL LATITUDE"
                  aStocks="100"
                  aSupplier="Iwinosa"
                />
              </Adminorder>
            </div>

            <div className="chart2 p-4">
              <LineGraph />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
