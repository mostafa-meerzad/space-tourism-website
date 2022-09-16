import { useState } from "react";
import Home from "./pages/Home";
import Crew from "./pages/crew";
import Destination from "./pages/destination";
import Technology from "./pages/technology";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Moon from "./pages/destination/Moon";
import Mars from "./pages/destination/Mars";
import Europa from './pages/destination/Europa';
import Titan from './pages/destination/Titan';
import Commander from './pages/crew/Commander';
import MissionSpecialist from './pages/crew/MissionSpecialist';
import Pilot from './pages/crew/Pilot';
import Engineer from './pages/crew/Engineer';
import LaunchVehicle from './pages/technology/LaunchVehicle';
import SpacePort from './pages/technology/SpacePort';
import SpaceCapsule from './pages/technology/SpaceCapsule';

function App() {
  return (
    <BrowserRouter className="main">
      <header className="main__header">
        <div className="main__logo" />
        <hr className="main__hr" />
        <nav className="main__nav nav">
          <NavLink className="main__link nav__link" to={"/"}>
            <span className="main__link-num">00</span>home
          </NavLink>
          <NavLink className="main__link nav__link" to={"/destination/moon"}>
            <span className="main__link-num">01</span>destination
          </NavLink>
          <NavLink className="main__link nav__link" to={"/crew/commander"}>
            <span className="main__link-num">02</span>crew
          </NavLink>
          <NavLink className="main__link nav__link" to={"/technology/launch-vehicle"}>
            <span className="main__link-num">03</span>technology
          </NavLink>
        </nav>
      </header>

 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />}>
          <Route path="moon" element={<Moon/>}/>
          <Route path="mars" element={<Mars />} />
          <Route path="europa" element={<Europa />} />
          <Route path="titan" element={<Titan />} />
        </Route>
        <Route path="/crew" element={<Crew />}>

          <Route path={"commander"} element={<Commander/>}/>
          <Route path="mission-specialist" element={<MissionSpecialist/>}/>
          <Route path="pilot" element={<Pilot/>}/>
          <Route path="flight-engineer" element={<Engineer/>}/>
        </Route>
        <Route path="/technology" element={<Technology />}>

          <Route path="launch-vehicle" element={<LaunchVehicle/>}/>
          <Route path="spaceport" element={<SpacePort/>}/>
          <Route path="space-capsule" element={<SpaceCapsule/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
