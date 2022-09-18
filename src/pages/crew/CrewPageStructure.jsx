import React from "react";

export default function CrewPageStructure({ name, position, info, img }) {
  return (
    <>
      <section className="crew__img-container">
        <img className="crew__img" src={img} alt={name} />
        <hr className="crew__line-break" />
      </section>
      <section className="crew__content-container">
        <h2 className="crew__position">
          {position}
        </h2>
        <h1 className="crew__name page-title ">
          {name}
        </h1>
        <p className="crew__info body-text">
          {info}
        </p>
      </section>
    </>
  );
}
