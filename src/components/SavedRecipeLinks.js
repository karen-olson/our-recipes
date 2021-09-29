import React from "react";
import { Link } from "react-router-dom";

function SavedRecipeLinks({ savedRecipes }) {
  const recipeLinks = savedRecipes.map((recipe) => (
    // <li key={recipe.id}>
    <Link key={recipe.id} to={`/recipes/saved/${recipe.id}`}>
      {recipe.name}
    </Link>
    // {recipe.name}
    // </li>
  ));

  console.log("recipe links: ", recipeLinks);

  return <ul>Saved Recipes{recipeLinks}</ul>;
}

export default SavedRecipeLinks;
