import React from 'react'
import TechnologyPageStructure from './TechnologyPageStructure';
import landsImg from "../../assets/technology/image-spaceport-landscape.jpg"
import portsImg from "../../assets/technology/image-spaceport-portrait.jpg"

const SpacePort = () => {
  return (
    <TechnologyPageStructure

        title={ "Spaceport"}
        portsImg={portsImg}
        landsImg={landsImg}
        info={"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."}
    />
  )
}

export default SpacePort


