import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import SavedRecipeLinks from "./SavedRecipeLinks";
import DetailedRecipe from "./DetailedRecipe";

function SavedRecipes({ recipes, onButtonClick }) {
  const savedRecipes = recipes.filter((recipe) => recipe.saved === true);

  const match = useRouteMatch();

  return (
    <>
      <SavedRecipeLinks savedRecipes={savedRecipes} />
      <Route exact path={match.url}>
        <h3>Choose a recipe from the list</h3>
      </Route>
      <Route path={`${match.url}/:id`}>
        <DetailedRecipe recipes={savedRecipes} onButtonClick={onButtonClick} />
      </Route>
    </>
  );
}

export default SavedRecipes;
