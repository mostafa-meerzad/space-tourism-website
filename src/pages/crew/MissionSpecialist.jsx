import React from 'react'
import CrewPageStructure from './CrewPageStructure';
import img from "../../assets/crew/image-mark-shuttleworth.png"

const MissionSpecialist = () => {
  return (
    <CrewPageStructure
        name={ "Mark Shuttleworth"}
        img={img}
        position={"Mission Specialist"}
        info={"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."}
    />
  )
}

export default MissionSpecialist

