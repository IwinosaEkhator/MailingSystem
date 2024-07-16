import React from "react";
import "../Admin/admin.css";
import {
  RiArchiveStackLine,
  RiArrowTurnBackFill,
  RiArrowTurnForwardFill,
} from "react-icons/ri";
import { AiOutlineProduct } from "react-icons/ai";
import Adminorder from "../admin-order.js";
import { Link } from "react-router-dom";
import Card from "../admin-card";

const Inventory = () => {
  return (
    <>
      <div className="main-inside px-3">
        <div className="cardBox">
          <Card aName="Available" aNum="10">
            <RiArchiveStackLine
              style={{ fontSize: "27px", fontSize: "3.5rem" }}
            />
          </Card>
          <Card aName="Categories" aNum="5" aLink="/categories">
            <AiOutlineProduct
              style={{ fontSize: "27px", fontSize: "3.5rem" }}
            />
          </Card>
          <Card aName="Inbound" aNum="30" aLink="/inbound">
            <RiArrowTurnBackFill
              style={{ fontSize: "27px", fontSize: "3.5rem" }}
            />
          </Card>
          <Card aName="Outbound" aNum="20" aLink="/outbound">
            <RiArrowTurnForwardFill
              style={{ fontSize: "27px", fontSize: "3.5rem" }}
            />
          </Card>
        </div>
        <div className="details">
          <div className="d-flex mt-2 justify-content-between">
            <div className="inventory">
              <Adminorder header="Inventory">

              </Adminorder>
            </div>
            <div className="overview">
                <Adminorder header="Overview">

                </Adminorder>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventory;
