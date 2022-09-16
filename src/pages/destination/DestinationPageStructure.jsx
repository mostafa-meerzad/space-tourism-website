import React from "react";

function DestinationPageStructure({ name, info, img, distance, time }) {
  return (
    <div className="destination ">
      <section className="destination__img-container">
        <img src={img} alt={name} className="destination__img" />
      </section>

      <section className="destination__content-container">
        <h1 className="destination__title page-title">
          {name}
        </h1>
        <p className="destination__info body-text">
          {info}
        </p>
        <hr className="destination__line-break" />
        <div className="destination__travel-info-container">
          <div className="destination__info-container">
            <span className="destination__travel-info">avg. Distance</span>
            <span className="destination__distance">
              {distance}
            </span>
          </div>
          <div className="destination__info-container">
            <span className="destination__travel-info">est. travel time</span>
            <span className="destination__time">
              {time}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DestinationPageStructure;
