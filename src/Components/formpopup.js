import React, { useState } from 'react';
import './style.css'; // Importing CSS

const FormPopup = ({ isVisible, onClose }) => {
    const [showSignup, setShowSignup] = useState(false);

    if (!isVisible) return null;

    return (
        <div className="show-popup">
            <div className="blur-bg-overlay" onClick={onClose}></div>
            <div className={`form-popup ${showSignup ? 'show-signup' : ''}`}>
                <span className="close-btn material-symbols-rounded" onClick={onClose}>close</span>
                <div className="form-box login">
                    <div className="form-details">
                        <h2>Welcome Back</h2>
                        <p>Please log in using your personal information to stay connected with us.</p>
                    </div>
                    <div className="form-content">
                        <h2>LOGIN</h2>
                        <form action="#">
                            <div className="input-field">
                                <input type="text" required />
                                <label>Email</label>
                            </div>
                            <div className="input-field">
                                <input type="password" required />
                                <label>Password</label>
                            </div>
                            <a href="#" className="forgot-pass-link">Forgot password?</a>
                            <button type="submit">Log In</button>
                        </form>
                        <div className="bottom-link">
                            Don't have an account?
                            <a href="#" onClick={() => setShowSignup(true)}>Signup</a>
                        </div>
                    </div>
                </div>
                <div className="form-box signup">
                    <div className="form-details">
                        <h2>Create Account</h2>
                        <p>To become a part of our community, please sign up using your personal information.</p>
                    </div>
                    <div className="form-content">
                        <h2>SIGNUP</h2>
                        <form action="#">
                            <div className="input-field">
                                <input type="text" required />
                                <label>Enter your email</label>
                            </div>
                            <div className="input-field">
                                <input type="password" required />
                                <label>Create password</label>
                            </div>
                            <div className="policy-text">
                                <input type="checkbox" id="policy" />
                                <label htmlFor="policy">
                                    I agree to the
                                    <a href="#" className="option">Terms & Conditions</a>
                                </label>
                            </div>
                            <button type="submit">Sign Up</button>
                        </form>
                        <div className="bottom-link">
                            Already have an account?
                            <a href="#" onClick={() => setShowSignup(false)}>Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormPopup;