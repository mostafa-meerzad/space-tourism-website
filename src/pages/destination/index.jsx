import React from "react";
import { Outlet, NavLink} from "react-router-dom";

function index() {
  return (
    <div className="destination page">
      <p className="page__indicator">
        <span className="page__indicator-num">01</span>
        pick your destination
      </p>

      <nav className="destination__nav nav">
  
          <NavLink  to={"moon"} className="destination__link nav__link">moon</NavLink>
          <NavLink  to={"mars"} className="destination__link nav__link">mars</NavLink>
          <NavLink to={"europa"}  className="destination__link nav__link">europa</NavLink>
          <NavLink  to={"titan"} className="destination__link nav__link">titan</NavLink>
   
      </nav>



      <Outlet />
    </div>
  );
}

export default index;
