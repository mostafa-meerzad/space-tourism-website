import React from 'react'
import CrewPageStructure from './CrewPageStructure';
import img from "../../assets/crew/image-douglas-hurley.png"

const Commander = () => {
  return (
    <CrewPageStructure
    name={"Douglas Hurley"}
    img={img}
    position={ "Commander"}
    info={ "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."}

    />
  )
}

export default Commander

