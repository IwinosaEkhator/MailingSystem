import React from "react";
import AdminOrder from "../../../../Components/admin-order";
import { AdminAccess } from "../../../../Components/order-table";

function AdminRight() {
  const adminAccess = ["User", "Access Type", "Actions"];

  return (
    <>
      <div className="">
        <div className="row admin-right">
          <div className="col-5">
            <h3>Assign administrator access</h3>
            <p>
              By default, administrators have access to all functions. Use the
              edit link on the right to set individual access rights.
            </p>
          </div>
          <div className="col-7" style={{ padding: "3% 0 0 5%" }}>
            <form action="">
              <label htmlFor="assign-access">
                Assign administrator access to this user:
              </label>
              <span className="d-flex mt-2">
                <input type="text" className="form-control me-3 w-50" />
                <button className="btn btn-success py-2">Add User</button>
              </span>
            </form>

            <div className="details p-0 mt-5">
              <AdminOrder headers={adminAccess}>
                <AdminAccess idNumber="npdc.b0056" username="Ekhator Iwinosa " accessType="Limited Access" />
                <AdminAccess idNumber="npdc.b0056" username="Ekhator Iwinosa " accessType="Limited Access" />
                <AdminAccess idNumber="npdc.b0056" username="Ekhator Iwinosa " accessType="Limited Access" />
                <AdminAccess idNumber="npdc.b0056" username="Ekhator Iwinosa " accessType="Limited Access" />
              </AdminOrder>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminRight;
