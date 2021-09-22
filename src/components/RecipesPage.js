import React from "react";
import SearchBar from "./SearchBar";
import RecipeThumbnail from "./RecipeThumbnail";

function RecipesPage({ recipes }) {
  const recipeThumbnails = recipes.map((recipe) => (
    <RecipeThumbnail recipe={recipe} key={recipe.id} />
  ));

  return (
    <>
      <h1>Recipes Page</h1>
      <SearchBar />
      {recipeThumbnails}
    </>
  );
}

export default RecipesPage;
