import React from "react";
import "../Admin/admin.css";
import Adminorder from "../admin-order.js";
import Ordertable, { InventoryProducts } from "../order-table.js";

const Inventory = () => {
  const inventoryHeader = [
    "Serial Number",
    "UPC/Product Name",
    "Available",
    "Inbound Time",
  ];

  return (
    <>
      <div className="main-inside px-3">
        <div className="details">
          <div className="d-flex mt-2 justify-content-between">
            <div className="inventory">
              <Adminorder header="Inventory" headers={inventoryHeader}>
                {/* Inventory Content */}
                <InventoryProducts
                  iSn="123456789"
                  iUPC="123456789"
                  iPName="Dell Latitude"
                  iStocks="100"
                  inbound="2024-07-17 9:50:00"
                />
                <InventoryProducts
                  iSn="123456789"
                  iUPC="123456789"
                  iPName="Dell Latitude"
                  iStocks="100"
                  inbound="2024-07-17 9:50:00"
                />
                <InventoryProducts
                  iSn="123456789"
                  iUPC="123456789"
                  iPName="Dell Latitude"
                  iStocks="100"
                  inbound="2024-07-17 9:50:00"
                />
                <InventoryProducts
                  iSn="123456789"
                  iUPC="123456789"
                  iPName="Dell Latitude"
                  iStocks="100"
                  inbound="2024-07-17 9:50:00"
                />
                <InventoryProducts
                  iSn="123456789"
                  iUPC="123456789"
                  iPName="Dell Latitude"
                  iStocks="100"
                  inbound="2024-07-17 9:50:00"
                />
                <InventoryProducts
                  iSn="123456789"
                  iUPC="123456789"
                  iPName="Dell Latitude"
                  iStocks="100"
                  inbound="2024-07-17 9:50:00"
                />
                <InventoryProducts
                  iSn="123456789"
                  iUPC="123456789"
                  iPName="Dell Latitude"
                  iStocks="100"
                  inbound="2024-07-17 9:50:00"
                />
              </Adminorder>
            </div>
            <div className="overview">
                {/* Overview Content */}
                <h2>Overview</h2>
                <div class="row row-cols-2 pt-5">
                  <p class="col-10">Total Items</p>
                  <p class="col-2 text-end">1000</p>

                  <p class="col-10">Available Items</p>
                  <p class="col-2 text-end">100</p>

                  <p class="col-10">Today Delivery</p>
                  <p class="col-2 text-end">0</p>

                  <p class="col-10">Yesterday Delivery</p>
                  <p class="col-2 text-end">3</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventory;
