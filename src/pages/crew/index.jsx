import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function index() {
  return (
    <div className="crew-container">
      <p className="crew-container__indicator">
        <span className="crew-container__num">02</span>
        meet your crew
      </p>

      <nav className="crew-container__nav nav">
   
          <NavLink  to={"commander"} className="crew-container__link nav__link"></NavLink>
          <NavLink  to={"mission-specialist"} className="crew-container__link nav__link"></NavLink>
          <NavLink  to={"pilot"} className="crew-container__link nav__link"></NavLink>
          <NavLink  to={"flight-engineer"} className="crew-container__link nav__link"></NavLink>
    
      </nav>

      <Outlet />
    </div>
  );
}

export default index;
