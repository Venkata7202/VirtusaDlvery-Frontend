import React from "react";
import { Link } from "react-router-dom";

function Logo({ parentClassName }) {
  return (
    <Link to="/" className={parentClassName}>
      <div className="logo-container">
        <div className={"major-mono display-regular first-part-logo "}>
          D<span className={"mandali-regular second-part-logo"}>lvry</span>
        </div>
      </div>
    </Link>
  );
}

export default Logo;
