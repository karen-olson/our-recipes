import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import SavedRecipeLinks from "./SavedRecipeLinks";
import DetailedRecipe from "./DetailedRecipe";

function SavedRecipes({ recipes }) {
  const savedRecipes = recipes.filter((recipe) => recipe.saved === true);

  const match = useRouteMatch();
  console.log("match: ", match);

  return (
    <>
      <h1>Saved Recipes</h1>
      <SavedRecipeLinks savedRecipes={savedRecipes} />
      <Route path={`${match.url}/:id`}>
        <DetailedRecipe recipes={savedRecipes} />
      </Route>
    </>
  );
}

export default SavedRecipes;
