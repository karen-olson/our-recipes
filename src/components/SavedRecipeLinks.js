import React from "react";

function SavedRecipeLinks({ savedRecipes }) {
  const recipeLinks = savedRecipes.map((recipe) => (
    <li key={recipe.id}>{recipe.name}</li>
  ));
  return (
    <div>
      <ul>Saved Recipes{recipeLinks}</ul>
    </div>
  );
}

export default SavedRecipeLinks;
