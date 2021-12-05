import React from "react";
import RecipeCard from "./RecipeCard";
import { useParams } from "react-router-dom";
import { Container, Segment } from "semantic-ui-react";
import RecipeDetails from "./RecipeDetails";

function DetailedRecipe({ recipes, onButtonClick }) {
  const id = parseInt(useParams().id);
  const recipe = recipes.find((recipe) => recipe.id === id);
  // debugger;

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
  } else {
    return <h1>No recipe found</h1>;
  }
}

export default DetailedRecipe;
