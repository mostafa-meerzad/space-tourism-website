import React from "react";
import DestinationPageStructure from "./DestinationPageStructure";
import img from "../../assets/destination/image-moon.png"

function Moon() {
  return <DestinationPageStructure name={"Moon"}
    img={img}
    info={"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."}
    distance={"384,400 km"}
    time={ "3 days"}
  />;
}

export default Moon;

