import React from "react";

function Home() {
  return (
    <div className="home page">
      <section className="home__content">
        <h2 className="home__subheading subheading"> So, you want to travel to </h2>
        <h1 className="home__heading">Space</h1>
        <p className="home__body-text body-text">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>

      <div className="home__explore-container">
        <span className="home__explore">Explore</span>
      </div>
    </div>
  );
}

export default Home;
