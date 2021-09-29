import React from "react";
import { nanoid } from "nanoid";
import { Segment } from "semantic-ui-react";

function RecipeDetails({ recipe }) {
  const {
    category,
    prepTimeInMinutes,
    servings,
    ingredients,
    instructions,
    sourceUrl,
  } = recipe;

  const ingredientsList = ingredients.map((ingredient) => (
    <li key={nanoid()}>{ingredient}</li>
  ));

  const instructionsList = instructions.map((instruction) => (
    <li key={nanoid()}>{instruction}</li>
  ));

  const formattedCategory = category[0].toUpperCase() + category.slice(1);

  return (
    <Segment.Group>
      <Segment>
        <p>Category: {formattedCategory}</p>
        <p>Prep Time: {prepTimeInMinutes} minutes</p>
        <p>Servings: {servings}</p>
      </Segment>
      <Segment textAlign="left">
        <h3>Ingredients</h3>
        <ul>{ingredientsList}</ul>
      </Segment>
      <Segment textAlign="left">
        <h3>Instructions</h3>
        <ol>{instructionsList}</ol>
      </Segment>
      <Segment>
        <a href={sourceUrl}>See Original Recipe</a>
      </Segment>
    </Segment.Group>
  );
}

export default RecipeDetails;
