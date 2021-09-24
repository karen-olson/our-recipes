import React from "react";
import SavedRecipeLinks from "./SavedRecipeLinks";
import RecipesContainer from "./RecipesContainer";

function SavedRecipes({ recipes }) {
  const savedRecipes = recipes.filter((recipe) => recipe.saved === true);
  console.log("recipes in saved: ", recipes);
  // console.log("saved recipes: ", savedRecipes);

  return (
    <>
      <h1>Saved Recipes</h1>
      <SavedRecipeLinks savedRecipes={savedRecipes} />
      <RecipesContainer recipes={savedRecipes} />
    </>
  );
}

export default SavedRecipes;
