import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import SavedRecipeLinks from "./SavedRecipeLinks";
import DetailedRecipe from "./DetailedRecipe";

function SavedRecipes({ recipes }) {
  const savedRecipes = recipes.filter((recipe) => recipe.saved === true);

  const match = useRouteMatch();

  return (
    <>
      <SavedRecipeLinks savedRecipes={savedRecipes} />
      <Route exact path={match.url}>
        <h3>Choose a recipe from the list</h3>
      </Route>
      {/* Where is the :id prop coming from? Where is the link for this route? Is there one?
      Why can't you go to this route directly by typing it in the URL bar? */}
      <Route path={`${match.url}/:id`}>
        <DetailedRecipe recipes={savedRecipes} />
      </Route>
    </>
  );
}

export default SavedRecipes;
