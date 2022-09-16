import React from 'react'
import TechnologyPageStructure from './TechnologyPageStructure';
import landsImg from "../../assets/technology/image-space-capsule-landscape.jpg"
import portsImg from "../../assets/technology/image-space-capsule-portrait.jpg"

const SpaceCapsule = () => {
  return (
    <TechnologyPageStructure

        title={"Space capsule"}
        portsImg={portsImg}
        landsImg={landsImg}
        info={"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."}

    />
  )
}

export default SpaceCapsule
