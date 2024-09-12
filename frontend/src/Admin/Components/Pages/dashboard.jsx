import React, { useContext, useEffect, useState } from "react";
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
import { AppContext } from "../../../Context/AppContext.jsx";
import { useNavigate } from "react-router-dom";

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

  const [requests, setRequests] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [approvedRequests, setApprovedRequests] = useState([]);
  const [declinedRequests, setDeclinedRequests] = useState([]);
  const [deliveredRequests, setDeliveryRequests] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { token } = useContext(AppContext);
  const navigate = useNavigate();

  function createdAt(createdAtDate) {
    return new Date(createdAtDate).toLocaleString();
  }

  async function getRequests() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/requests");
      const data = await res.json();

      if (res.ok) {
        // Filter requests based on their status
        const pending = data.filter((request) => request.status === "pending");
        const approved = data.filter((request) => request.status === "approved");
        const declined = data.filter((request) => request.status === "declined");
        const delivered = data.filter(
          (request) => request.status === "delivered"
        );

        // Update state with filtered requests
        setRequests(data);
        setPendingRequests(pending);
        setApprovedRequests(approved);
        setDeclinedRequests(declined);
        setDeliveryRequests(delivered);
      } else {
        setError(data.message || "Failed to fetch requests.");
      }
    } catch (error) {
      setError("An error occurred while fetching requests.");
      console.error("Error fetching requests:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleEdit(requestId) {
    console.log("Checking deliveries for request ID:", requestId);
    setError("");
    try {
      // Make API call to check if delivery exists for the request
      const res = await fetch(`/api/delivery`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          delivery_request_id: requestId,
        }),
      });

      const data = await res.json();
      console.log("Response data:", data);

      if (res.status === 409 && data.existing_delivery) {
        const confirmEdit = window.confirm(data.message);

        if (confirmEdit) {
          // Proceed to edit delivery
          const editRes = await fetch(`/api/delivery/${requestId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              status: "edited", // Example payload
              // Add other fields for edit if necessary
            }),
          });

          if (editRes.ok) {
            console.log("Delivery edited successfully");
            navigate(`/admin/delivery/${requestId}`, {
              state: { message: "Delivery edited successfully" },
            });
          } else {
            setError("Failed to edit delivery.");
          }
        }
      } else if (res.ok) {
        console.log("New delivery created successfully");
        navigate(`/admin/delivery/${requestId}`, {
          state: { message: "New delivery created successfully" },
        });
      } else {
        setError(data.message || "Failed to create delivery.");
      }
    } catch (error) {
      setError("An error occurred while handling the delivery.");
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    getRequests();
  }, []);

  return (
    <>
      <div className="main-inside px-3">
        {loading && <p>Loading requests...</p>}
        {error && <p className="text-danger">{error}</p>}
        <div className="cardBox">
          <Card aName="Pending" aNum={pendingRequests.length} aLink="pending">
            <MdOutlinePendingActions style={{ fontSize: "3.5rem" }} />
          </Card>
          <Card aName="Approved" aNum={approvedRequests.length} aLink="approved">
            <FaRegThumbsUp style={{ fontSize: "3.5rem" }} />
          </Card>
          <Card aName="Declined" aNum={declinedRequests.length} aLink="declined">
            <FaRegThumbsDown style={{ fontSize: "3.5rem" }} />
          </Card>
          <Card
            aName="Delivered"
            aNum={deliveredRequests.length}
            aLink="pending"
          >
            <AiOutlineDeliveredProcedure style={{ fontSize: "3.5rem" }} />
          </Card>
          <Card aName="Requests" aNum={requests.length} aLink="requests">
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
              requests.map((request) => (
                <div key={request.id}>
                  <Ordertable
                    idNum={request.user.username}
                    tName={request.user.full_name}
                    tItems={request.request_items}
                    tStatus={request.status}
                    tDate={createdAt(request.created_at)}
                    tEdit={() => handleEdit(request.id)} // Pass the request ID
                  />
                </div>
              ))
            ) : (
              <p>No request available</p>
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
                {/* Repeat for other products */}
              </Adminorder>
            </div>
            <div className="chart1 p-5">
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
                {/* Repeat for other added products */}
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
