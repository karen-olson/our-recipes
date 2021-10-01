import React from "react";
import RecipeCard from "./RecipeCard";
import { useParams } from "react-router-dom";
import { Container, Segment } from "semantic-ui-react";
import RecipeDetails from "./RecipeDetails";

function DetailedRecipe({ recipes, onSaveClick }) {
  const id = parseInt(useParams().id);
  const recipe = recipes.filter((recipe) => recipe.id === id)[0];

  if (recipe) {
    return (
      <Container>
        <Segment className="centered">
          <RecipeCard recipe={recipe} onSaveClick={onSaveClick} />
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
