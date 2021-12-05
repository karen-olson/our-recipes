import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import SavedRecipeLinks from "./SavedRecipeLinks";
import DetailedRecipe from "./DetailedRecipe";
import { Grid } from "semantic-ui-react";

function SavedRecipes({ recipes, onButtonClick }) {
  const savedRecipes = recipes.filter((recipe) => recipe.saved === true);

  const match = useRouteMatch();

  return (
    <>
      <SavedRecipeLinks savedRecipes={savedRecipes} />
      <Route exact path={match.url}>
        <div style={{ marginTop: "45px", textAlign: "center" }}>
          <h3>
            Choose a recipe from the list, or visit "Recipes" to save a recipe.
          </h3>
        </div>
      </Route>
      <Route exact path={`${match.url}/:id`}>
        <Grid centered columns={1}>
          <Grid.Column>
            <DetailedRecipe
              recipes={savedRecipes}
              onButtonClick={onButtonClick}
            />
          </Grid.Column>
        </Grid>
      </Route>
    </>
  );
}

export default SavedRecipes;
