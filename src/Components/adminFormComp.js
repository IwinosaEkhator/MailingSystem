import React from "react";

const AdminFormComponents = (props) => {
    return (
        <>
            <div className="list-group-n text-center">
                <label htmlFor={props.fElement}>
                    {props.fName}
                </label>
                <input
                    onChange={props.fOnChange}
                    value={props.fValue}
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

export default AdminFormComponents;