import React from 'react'
import TechnologyPageStructure from './TechnologyPageStructure';
import landsImg from "../../assets/technology/image-launch-vehicle-landscape.jpg"
import portsImg from "../../assets/technology/image-launch-vehicle-portrait.jpg"

const LaunchVehicle = () => {
  return (
    <TechnologyPageStructure

        title={"Launch vehicle"}
        info={"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"}
        portsImg={portsImg}
        landsImg={landsImg}
    />
  )
}

export default LaunchVehicle


