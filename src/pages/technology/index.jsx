import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function index() {
  return (
    <div className="technology page">
      <p className="page__indicator">
        <span className="page__indicator-num">03</span>
        space launch 101
      </p>

      <nav className="technology__nav nav">
 
          <NavLink  to={"launch-vehicle"} className="technology__link nav__link">1</NavLink>
          <NavLink  to={"spaceport"} className="technology__link nav__link">2</NavLink>
          <NavLink  to={"space-capsule"} className="technology__link nav__link">3</NavLink>
          
     
      </nav>

      <Outlet />
    </div>
  );
}

export default index;
