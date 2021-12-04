import React from "react";
import AliceCarousel from "react-alice-carousel";

function Home({ recipes }) {
  const images = recipes.map((recipe) => (
    <img
      src={recipe.image}
      className="sliderimg"
      alt={recipe.name}
      key={recipe.id}
    />
  ));

  return (
    <div>
      <h1 style={{ fontSize: "60px" }}>Our Recipes</h1>
      <h2>A community-based recipe hub</h2>
      <hr></hr>
      <br></br>
      <p style={{ fontSize: "large" }}>
        Discover recipes submitted by people around the world. Submit your own
        recipes to contribute to our community. Share the love!
      </p>
      <br></br>
      <AliceCarousel autoPlay autoPlayInterval="3000">
        {images}
      </AliceCarousel>
    </div>
  );
}

export default Home;
