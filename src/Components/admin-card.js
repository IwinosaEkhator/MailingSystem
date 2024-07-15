import React from "react";

import "../Components/Admin/admin.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <Link to={props.aLink}>
        <div>
          <div className="numbers">{props.aNum}</div>
          <div className="cardName">{props.aName}</div>
        </div>

        <div className="iconBx">{props.children}</div>
      </Link>
    </>
  );
};

export default Card;
