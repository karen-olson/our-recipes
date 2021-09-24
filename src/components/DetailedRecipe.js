import React from "react";
import RecipeCard from "./RecipeCard";
import { useParams } from "react-router-dom";
import RecipeDetails from "./RecipeDetails";

function DetailedRecipe({ recipes }) {
  const id = parseInt(useParams().id);
  const recipe = recipes.filter((recipe) => recipe.id === id)[0];

  return (
    <>
      <h1>Recipe Detail Page</h1>
      <RecipeCard recipe={recipe} />
      <RecipeDetails recipe={recipe} />
    </>
  );
}

export default DetailedRecipe;
