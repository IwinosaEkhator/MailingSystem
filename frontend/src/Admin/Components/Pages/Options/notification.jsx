import React from "react";
import AdminOrder from "../../../../Components/admin-order";
import { AdminAccess } from "../../../../Components/order-table";

function Notification() {
  const adminAccess = ["User", "Access Type", "Actions"];

  return (
    <>
      <div className="option-notification">
        <div className="row notification">
          <div className="col-5">
            <h3>Email Option</h3>
            <p>
              By default, administrators have access to all functions. Use the
              edit link on the right to set individual access rights.
            </p>
          </div>
          <div className="col-7" style={{ padding: "3% 0 0 5%" }}>
            <form action="">
              <span>
                <label htmlFor="from-address">From address:</label>
                <input type="text" className="form-control me-3 mb-4" />
              </span>

              <span>
                <label htmlFor="from-address">Default mail subject:</label>
                <input type="text" className="form-control me-3" />
              </span>
            </form>
          </div>
        </div>
        <div className="row notification">
          <div className="col-5">
            <h3>Winpopup Option</h3>
            <p>
              Send notification via winpopup, You can choose to enable or
              disable it for users.
            </p>
          </div>
          <div className="col-7" style={{ padding: "3% 0 0 5%" }}>
            <form action="" className="d-flex">
              <input type="checkbox" name="winpopup" id="winpopup" />
              <label htmlFor="winpopup">
                Enable winpopup notifications for all users.
              </label>
            </form>
          </div>
        </div>
        <div className="row notification">
          <div className="col-5">
            <h3>Low stock Notification</h3>
            <p>
              When an item stock in the inventory drops below a certain level a
              notification is sent to the administrator so they know that item
              is low.
            </p>
          </div>
          <div className="col-7" style={{ padding: "3% 0 0 5%" }}>
            <form action="">
              <label htmlFor="low-stock">
                Notify admin when the stocks are low.
              </label>
              <input type="text" className="form-control mt-2 w-25" />

              <span className="d-flex mt-4">
                <input
                  type="checkbox"
                  name="low-stock-btn"
                  id="low-stock-btn"
                />
                <label htmlFor="low-stock-btn">Enable notifications.</label>
              </span>
            </form>
          </div>
        </div>

        <span className=" d-flex justify-content-end">
          <button className="btn btn-success py-2 mx-5 mb-4">Apply</button>
        </span>

        <div className="row notification">
          <div className="col-5">
            <h3>Test Notification</h3>
            <p>
              To test your notification settings, enter a username and select
              the notification method to use. To send to the user client, the
              user needs to be running the user client on their laptop or pc.
            </p>
          </div>
          <div className="col-7" style={{ padding: "3% 0 0 5%" }}>
            <form action="">
              <label htmlFor="test-message-user">
                User to send test message to.
              </label>
              <input
                type="text"
                className="form-control mt-2 mb-4"
                name="test-message-user"
              />

              <span>
                <label htmlFor="test-message-option">
                  Send the test message using
                </label>
                <select
                  name="test-message-option"
                  id="test-message-option"
                  className="form-select select1 mb-4"
                  style={{ width: "35%" }}
                >
                  <option value="test-message"></option>
                </select>
              </span>

              <span>
                <label htmlFor="test-message">Test message</label>
                <textarea
                  name="test-message"
                  id="test-message"
                  rows="5 "
                  cols="77"
                  className="form-control"
                  placeholder="This is a test message delivered to user --user-- at --date--."
                ></textarea>
              </span>
            </form>
          </div>
        </div>

        <span className=" d-flex justify-content-end">
          <button className="btn btn-success py-2 mx-5 mb-4">Send Test Notification</button>
        </span>
      </div>
    </>
  );
}

export default Notification;
