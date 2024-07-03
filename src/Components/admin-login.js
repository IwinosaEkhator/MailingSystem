import React, { useState } from 'react';
import "../Components/Admin/admin.css";

const LoginForm = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleChecked = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="login-container">
            {/* <input 
                type="checkbox" 
                id="check" 
                checked={isChecked} 
                onChange={toggleChecked} 
            /> */}
            <div className={`login form ${isChecked ? 'hide' : ''}`}>
                <header>Login</header>
                <form action="#">
                    <input type="text" placeholder="Enter your email" />
                    <input type="password" placeholder="Enter your password" />
                    <a href="#">Forgot password?</a>
                    <input type="button" className="button" value="Login" />
                </form>
                {/* <div className="signup">
                    <span>Don't have an account?
                        <label htmlFor="check" onClick={toggleChecked}>Signup</label>
                    </span>
                </div> */}
            </div>
            {/* <div className={`registration form ${isChecked ? '' : 'hide'}`}>
                <header>Signup</header>
                <form action="#">
                    <input type="text" placeholder="Enter your email" />
                    <input type="password" placeholder="Create a password" />
                    <input type="password" placeholder="Confirm your password" />
                    <input type="button" className="button" value="Signup" />
                </form>
                <div className="signup">
                    <span>Already have an account?
                        <label htmlFor="check" onClick={toggleChecked}>Login</label>
                    </span>
                </div>
            </div> */}
        </div>
    );
};

export default LoginForm;