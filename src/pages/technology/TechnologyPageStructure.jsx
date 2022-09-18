import React from 'react'

function TechnologyPageStructure({title, info, portsImg, landsImg}) {
  return (
    <>
    <section className="technology__img-container">
        <img className='technology__lands-img' src={landsImg} alt={title} />
        <img className='technology__ports-img' src={portsImg} alt={title} />
    </section>
    <section className="technology__content-container">
    <p className="body-text">THE TERMINOLOGY...</p>
<h1 className='technology__title'>{title}</h1>
<p className="technology__content body-text">{info}</p>
    </section>

    </>
  )
}

export default TechnologyPageStructure