import React from "react";

import { FaRegCheckCircle } from "react-icons/fa";

export const Success = () => {
  return (
    <>
      <div className="request-list text-center">
        <FaRegCheckCircle style={{ fontSize: "70px" }} className="mb-4 text-success" />
        <h1 class="text-body-emphasis">Request Successful</h1>
        <p class="col-lg-6 mx-auto mb-4">
          Please kindly check your mail for more information.
        </p>
      </div>
    </>
  );
};

export default Success;
