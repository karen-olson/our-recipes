import React from "react";
import RecipeCard from "./RecipeCard";
import { useParams } from "react-router-dom";
import { Container, Segment } from "semantic-ui-react";
import RecipeDetails from "./RecipeDetails";

function DetailedRecipe({ recipes }) {
  // This works if you're getting to DetailedRecipe by clicking on the "view details" link
  // If you're getting to DetailedRecipe from SavedRecipes, where is the id coming from?
  const id = parseInt(useParams().id);
  const recipe = recipes.filter((recipe) => recipe.id === id)[0];

  console.log("params: ", useParams());
  return (
    <Container>
      <Segment className="centered">
        <RecipeCard recipe={recipe} />
      </Segment>
      <Segment>
        <RecipeDetails recipe={recipe} />
      </Segment>
    </Container>
  );
}

export default DetailedRecipe;
