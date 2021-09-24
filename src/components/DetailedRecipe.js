import React from "react";
import RecipeCard from "./RecipeCard";
import { useParams } from "react-router-dom";
import RecipeDetails from "./RecipeDetails";

function DetailedRecipe({ recipes }) {
  // This works if you're getting to DetailedRecipe by clicking on the "view details" link
  // If you're getting to DetailedRecipe from SavedRecipes, where is the id coming from?
  const id = parseInt(useParams().id);
  const recipe = recipes.filter((recipe) => recipe.id === id)[0];

  return (
    <>
      <RecipeCard recipe={recipe} />
      <RecipeDetails recipe={recipe} />
    </>
  );
}

export default DetailedRecipe;
