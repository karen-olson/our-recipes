import React from "react";
import SearchBar from "./SearchBar";
import RecipeThumbnail from "./RecipeThumbnail";

function RecipesPage({ recipes, onRecipeClick }) {
  // const recipeThumbnails = recipes.map((recipe) => (
  //   <RecipeThumbnail
  //     recipe={recipe}
  //     key={recipe.id}
  //     onRecipeClick={onRecipeClick}
  //   />
  // ));

  return (
    <>
      <h1>Recipes Page</h1>
      <SearchBar />
      {/* {recipeThumbnails} */}
    </>
  );
}

export default RecipesPage;
