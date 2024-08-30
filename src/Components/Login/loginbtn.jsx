import React from "react";

const LoginBtn = (props) => {
    return(
        <>
            <div className="btn-me">
                <button 
                    id="button" 
                    type="submit" 
                    value="Submit"
                    className="form-btn"
                >
                    Submit
                </button>
            </div>
        </>
    )
}

export default LoginBtn;
