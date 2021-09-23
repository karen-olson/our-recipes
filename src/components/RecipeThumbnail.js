import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import RecipeDetails from "./RecipeDetails";

function RecipeThumbnail({ recipe }) {
  const currentUrl = useRouteMatch().url;

  if (recipe) {
    return (
      <>
        <h3>{recipe.name}</h3>
        <img src={recipe.image} alt={recipe.name}></img>
        {currentUrl === `/recipes` ? (
          <Link to={`/recipes/${recipe.id}`}>View Details</Link>
        ) : (
          <Link to={`/recipes`}>Go Back</Link>
        )}
        {currentUrl === `/recipes/${recipe.id}` ? (
          <RecipeDetails recipe={recipe} />
        ) : null}
      </>
    );
  } else {
    return <h3>Loading Recipe</h3>;
  }
}

export default RecipeThumbnail;
