import React from 'react'
import DestinationPageStructure from './DestinationPageStructure';
import img from "../../assets/destination/image-europa.png"

const Europa = () => {
  return (
    <DestinationPageStructure 
        name={"Europa"}
        img={img}
        info={ "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."}
        distance={"628 mil. km"}
        time={"3 years"}
    />
  )
}

export default Europa

