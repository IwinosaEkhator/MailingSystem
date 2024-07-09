import React from "react";
import ReactDOM from 'react-dom/client';


import LoginPage from "./Components/Login/Login-page/login";
import SignupPage from "./Components/Login/Signup-page/signup";
import Admin from "./Components/Admin/admin";

const MailingSystem = () => {
    return (
        <>
            <Admin/>
        </>

    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <MailingSystem />
    </React.StrictMode>
);