import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function index() {
  return (
    <div className="technology-container">
      <p className="technology-container__indicator">
        <span className="technology-container__num">03</span>
        space launch 101
      </p>

      <nav className="technology-container__nav nav">
 
          <NavLink  to={"launch-vehicle"} className="technology-container__link nav__link">1</NavLink>
          <NavLink  to={"spaceport"} className="technology-container__link nav__link">2</NavLink>
          <NavLink  to={"space-capsule"} className="technology-container__link nav__link">3</NavLink>
          
     
      </nav>

      <Outlet />
    </div>
  );
}

export default index;
