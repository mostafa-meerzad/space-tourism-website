import React from "react";
import { Outlet, NavLink} from "react-router-dom";

function index() {
  return (
    <div className="destination-container">
      <p className="destination-container__indicator">
        <span className="destination-container__num">01</span>
        pick your destination
      </p>

      <nav className="destination-container__nav nav">
  
          <NavLink  to={"moon"} className="destination-container__link nav__link">moon</NavLink>
          <NavLink  to={"mars"} className="destination-container__link nav__link">mars</NavLink>
          <NavLink to={"europa"}  className="destination-container__link nav__link">europa</NavLink>
          <NavLink  to={"titan"} className="destination-container__link nav__link">titan</NavLink>
   
      </nav>



      <Outlet />
    </div>
  );
}

export default index;
