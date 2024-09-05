import React, { useEffect, useState } from "react";
import "../../admin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import Card from "../../../Components/admin-card.jsx";
import { VscRequestChanges } from "react-icons/vsc";
import { MdOutlinePendingActions } from "react-icons/md";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa6";
import Adminorder from "../../../Components/admin-order.jsx";
import Ordertable, {
  AddedProducts,
  TopProducts,
} from "../../../Components/order-table.jsx";
import LineGraph from "../Charts/Line.jsx";
import PieGraph from "../Charts/Pie.jsx";

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

  const myRequestHeaders = ["Request Items", "Request Time"];
  const [requests, setRequests] = useState([]);
  function createdAt(createdAtDate) {
    return new Date(createdAtDate).toLocaleString();
  }

  async function getRequests() {
    const res = await fetch("/api/requests");
    const data = await res.json();

    if (res.ok) {
      setRequests(data);
    }
  }

  useEffect(() => {
    getRequests();
  }, []);

  return (
    <>
      <div className="main-inside px-3">
        <div className="cardBox">
          <Card aName="Pending" aNum="50" aLink="pending">
            <MdOutlinePendingActions style={{ fontSize: "3.5rem" }} />
          </Card>
          <Card aName="Approved" aNum="30" aLink="approved">
            <FaRegThumbsUp style={{ fontSize: "3.5rem" }} />
          </Card>
          <Card aName="Declined" aNum="20" aLink="declined">
            <FaRegThumbsDown style={{ fontSize: "3.5rem" }} />
          </Card>
          <Card aName="Delivered" aNum="30" aLink="pending">
            <AiOutlineDeliveredProcedure style={{ fontSize: "3.5rem" }} />
          </Card>
          <Card aName="Requests" aNum="100" aLink="requests">
            <VscRequestChanges style={{ fontSize: "3.5rem" }} />
          </Card>
        </div>
        <div className="details">
          <Adminorder
            header="Recent Orders"
            headers={recentOrdersHeaders}
            hLink="requests"
            hName="View All"
          >
            {requests.length > 0 ? (
              requests.map((requests) => (
                <div key={requests.id}>
                  <Ordertable
                    idNum={requests.user.username}
                    tName={requests.user.full_name}
                    tItems={requests.request_items}
                    tStatus={requests.status}
                    tDate={createdAt(requests.created_at)}
                    tEdit={`/admin/delivery/${requests.id}`}
                  />
                </div>
              ))
            ) : (
              <p>You have made no request</p>
            )}
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
