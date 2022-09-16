import React from 'react'

function TechnologyPageStructure({title, info, portsImg, landsImg}) {
  return (
    <div className='technology'>
    <section className="technology__img-section">
        <img className='technology__lands-img' src={landsImg} alt={title} />
        <img className='technology__ports-img' src={portsImg} alt={title} />
    </section>
    <section className="technology__content-section">
    <p className="body-text">THE TERMINOLOGY...</p>
<h1 className='technology__title'>{title}</h1>
<p className="technology__content body-text">{info}</p>
    </section>

    </div>
  )
}

export default TechnologyPageStructure