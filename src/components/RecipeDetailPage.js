import React from "react";
import RecipeThumbnail from "./RecipeThumbnail";
import { useParams } from "react-router-dom";

function RecipeDetailPage({ recipes }) {
  const id = parseInt(useParams().id);
  const recipe = recipes.filter((recipe) => recipe.id === id)[0];

  // console.log(recipe);

  return (
    <>
      <h1>Recipe Detail Page</h1>
      <RecipeThumbnail recipe={recipe} />
    </>
  );
}

export default RecipeDetailPage;
