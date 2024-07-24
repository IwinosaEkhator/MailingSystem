import { render } from "@testing-library/react";
import React from "react";
import LoginPage from "../../Login/Login-page/login";
import FormComponents from "../../formComp";

const NewRequest = () => {
  return (
    <>
      <div className="new-request-page">
        <h1 className="text-center">New Request</h1>
        <div className="">
          <form action="">
            <FormComponents
              fName="Name"
              fPlaceholder="Enter your name.."
              fElement="name"
              fType="text"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default NewRequest;
