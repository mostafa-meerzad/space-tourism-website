import React from 'react'
import CrewPageStructure from './CrewPageStructure';
import img from "../../assets/crew/image-anousheh-ansari.png"

const Engineer = () => {
  return (
    <CrewPageStructure

        name={ "Anousheh Ansari"}
        img={img}
        position={"Flight Engineer"}
        info={"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."}
    />
  )
}

export default Engineer

