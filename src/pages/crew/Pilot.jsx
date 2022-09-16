import React from 'react'
import CrewPageStructure from './CrewPageStructure';
import img from  "../../assets/crew/image-victor-glover.png"

const Pilot = () => {
  return (
    <CrewPageStructure

        name={ "Victor Glover"}
        img={img}
        position={"Pilot"}
        info={ "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."}
    />
  )
}

export default Pilot

