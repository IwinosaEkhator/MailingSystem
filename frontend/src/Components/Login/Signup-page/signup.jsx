import React from "react";

import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import nnpcLogo from '../../Assets/nnpc-logo.png'
import "../../Login/login.css"
import FormComponents from "../../formComp"
import LoginBtn from "../loginbtn";

const SignupPage = () => {

    return (
        <>
            <div className="mail-box">
            <div className="contact">
                <div className="con">
                    <img
                        src={nnpcLogo}
                        className="logo"
                        alt=""
                    />
                    <div className="email-sec">
                        <FaEnvelope className='me-3 fs-4 email-line' style={{backgroundColor: "none", color: "#06AD50"}} />
                        <a href="mailto:">
                            <p>npdc_helpdesk@nnpcgroup.com</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="form-me" style={{ margin : "6% 5% 0" }}>
                <form
                    action=""
                    method="post"

                >
                    <FormComponents 
                        fName="Username" 
                        fPlaceholder="Enter your E-mail or ID Number.." 
                        fElement="name" 
                        fType="text"
                    />

                    <FormComponents 
                        fName="Password" 
                        fPlaceholder="Enter your password.." 
                        fElement="password" 
                        fType="text"
                    />
                    

                
                </form>
                <LoginBtn/>
            </div> 
            </div>
        </>

    );
}

export default SignupPage;