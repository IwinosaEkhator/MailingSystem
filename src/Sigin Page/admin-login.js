import React, { useState } from "react";
import "../Sigin Page/signin.css";

const LoginForm = () => {
  return (
    <>
      <div className="form-container">
        <div className="login-container">
          <div className={`login form`}>
            {/* <img src={nnpcLogo} className="w-75 mb-5"></img> */}
            <header>Login</header>
            <form action="#">
              <input type="text" placeholder="Enter your email" />
              <input type="password" placeholder="Enter your password" />
              <a href="#">Forgot password?</a>
              <input type="button" className="button" value="Login" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
