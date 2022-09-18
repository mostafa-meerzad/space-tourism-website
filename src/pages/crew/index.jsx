import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function index() {
  return (
    <div className="crew page">
    {/* // <div className="crew-container"> */}
      <p className="page__indicator">
        <span className="page__indicator-num">02</span>
        meet your crew
      </p>

      <nav className="crew__nav nav">
   
          <NavLink  to={"commander"} className="crew__link nav__link"></NavLink>
          <NavLink  to={"mission-specialist"} className="crew__link nav__link"></NavLink>
          <NavLink  to={"pilot"} className="crew__link nav__link"></NavLink>
          <NavLink  to={"flight-engineer"} className="crew__link nav__link"></NavLink>
    
      </nav>

      <Outlet />
    {/* // </div> */}
    </div>
  );
}

export default index;
