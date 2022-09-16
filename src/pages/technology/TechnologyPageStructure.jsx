import React from 'react'

function TechnologyPageStructure({title, info, img}) {
  return (
    <div className='technology'>
    <section className="technology__img-section">
        <img src={img} alt={title} />
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