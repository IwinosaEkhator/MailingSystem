import React from "react";

const FormComponents = (props) => {
    return(
        <>
            <div className="list-group-n">
                <label htmlFor={props.fElement}>
                    {props.fName} <span>*</span>
                </label>
                <input
                    type={props.fType}
                    id={props.fElement}
                    name={props.fElement}
                    placeholder={props.fPlaceholder}
                    required=""
                />
            </div>
        </>
    )
}

export default FormComponents;