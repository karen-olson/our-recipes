import React from "react";
import RecipeDetails from "./RecipeDetails";

function RecipeThumbnail({ recipe, onRecipeClick }) {
  return (
    <>
      {/* <h3 onClick={onRecipeClick}>{recipe.name}</h3> */}
      {/* <img src={recipe.image} alt={recipe.name}></img> */}
      {/* conditionally render recipe details based on _________ */}
      <RecipeDetails />
    </>
  );
}

export default RecipeThumbnail;
