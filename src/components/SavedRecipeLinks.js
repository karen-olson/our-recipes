import React from "react";

function SavedRecipeLinks({ recipes }) {
  const recipeLinks = recipes.map((recipe) => (
    <li key={recipe.id}>{recipe.name}</li>
  ));
  return (
    <div>
      <h1>Recipe List</h1>
      <ul>Saved Recipes{recipeLinks}</ul>
    </div>
  );
}

export default SavedRecipeLinks;
