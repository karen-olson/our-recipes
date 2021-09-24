import React from "react";
import SavedRecipeLinks from "./SavedRecipeLinks";
import DetailedRecipe from "./DetailedRecipe";

function SavedRecipes({ recipes }) {
  // const savedRecipes = recipes.filter((recipe) => recipe.saved === true)[0];
  console.log("recipes in saved: ", recipes);
  // console.log("saved recipes: ", savedRecipes);
  if (recipes) {
    return (
      <>
        <h1>Saved Recipes Page</h1>
        <SavedRecipeLinks recipes={recipes} />
        <DetailedRecipe recipes={recipes} />
      </>
    );
  } else {
    return null;
  }
}

export default SavedRecipes;
