import React from "react";
import RecipeCard from "./RecipeCard";
import { useParams } from "react-router-dom";
import { Container, Segment } from "semantic-ui-react";
import RecipeDetails from "./RecipeDetails";

function DetailedRecipe({ recipes, onButtonClick }) {
  const id = parseInt(useParams().id);
  const recipe = recipes.find((recipe) => recipe.id === id);

  if (recipe) {
    return (
      <Container>
        <Segment className="centered">
          <RecipeCard recipe={recipe} onButtonClick={onButtonClick} />
        </Segment>
        <Segment>
          <RecipeDetails recipe={recipe} />
        </Segment>
      </Container>
    );
  } else if (id) {
    return (
      <div style={{ marginTop: "45px", textAlign: "center" }}>
        <h3>
          Choose a recipe from the list, or visit "Recipes" to save a recipe.
        </h3>
      </div>
    );
  } else {
    return <h2>No recipe found</h2>;
  }
}

export default DetailedRecipe;
