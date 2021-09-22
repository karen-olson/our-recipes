import React from "react";
import RecipeDetails from "./RecipeDetails";

function RecipeThumbnail({ recipe }) {
  console.log("recipe: ", recipe.name);
  return (
    <>
      {/* <h3>{recipe.name}</h3> */}
      {/* <img src={recipe.image} alt={recipe.name}></img> */}
      {/* conditionally render recipe details based on _________ */}
      <RecipeDetails />
    </>
  );
}

export default RecipeThumbnail;
