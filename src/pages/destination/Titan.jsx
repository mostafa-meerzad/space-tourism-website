import React from 'react'
import DestinationPageStructure from './DestinationPageStructure';
import img from "../../assets/destination/image-titan.png"
const Titan = () => {
  return (
    <DestinationPageStructure
    name={"Titan"}
    img={img}
    info={ "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."}
    distance={"1.6 bil. km"}
    time={"7 years"}
     />
  )
}

export default Titan
