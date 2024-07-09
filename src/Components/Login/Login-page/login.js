import React from "react";

import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import nnpcLogo from '../../Assets/nnpc-logo.png'
import "../../Login/login.css"
import FormComponents from "../../formComp"
import LoginBtn from "../loginbtn";

const LoginPage = () => {

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
                <div className="form-me">
                    <form
                        action=""
                        method="post"
                    >
                        <FormComponents 
                            fName="Name" 
                            fPlaceholder="Enter your name.." 
                            fElement="name" 
                            fType="text"
                        />
                        <div id="li" className="li-group">
                            <FormComponents 
                                fName="ID Number" 
                                fPlaceholder="Enter your ID Number.." 
                                fElement="id-num" 
                                fType="text"
                            />

                            <FormComponents 
                                fName="Department" 
                                fPlaceholder="Enter your department.." 
                                fElement="department" 
                                fType="text"
                            />

                        </div>
                        <FormComponents 
                            fName="Work E-mail" 
                            fPlaceholder="Enter your work e-mail.." 
                            fElement="email" 
                            fType="email"
                        />
                        <FormComponents 
                            fName="Rank" 
                            fPlaceholder="Enter your rank.." 
                            fElement="rank" 
                            fType="text"
                        />


                    </form>
                        <LoginBtn/>
                </div> 
            </div>
        </>

    );
}

export default LoginPage;