import React from "react";
import RecipeList from "./RecipeList";
import RecipeThumbnail from "./RecipeThumbnail";

function SavedRecipesPage({ recipes }) {
  return (
    <>
      <h1>Saved Recipes Page</h1>
      <RecipeList />
      <RecipeThumbnail />
    </>
  );
}

export default SavedRecipesPage;
