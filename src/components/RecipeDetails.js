import React from "react";
import { nanoid } from "nanoid";

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
    <>
      <p>Category: {formattedCategory}</p>
      <p>Prep time: {prepTimeInMinutes} minutes</p>
      <p>Servings: {servings}</p>
      <h3>Ingredients</h3>
      <ul>{ingredientsList}</ul>
      <h3>Instructions</h3>
      <ol>{instructionsList}</ol>
      <a href={sourceUrl}>See Original Recipe</a>
    </>
  );
}

export default RecipeDetails;
