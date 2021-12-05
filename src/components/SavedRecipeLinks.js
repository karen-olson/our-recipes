import React from "react";
import { List } from "semantic-ui-react";
import { Link } from "react-router-dom";

function SavedRecipeLinks({ savedRecipes }) {
  const recipeLinks = savedRecipes.map((recipe) => (
    <List.Item as={Link} key={recipe.id} to={`/recipes/saved/${recipe.id}`}>
      {recipe.name}
    </List.Item>
  ));

  return (
    <List
      link
      floated="left"
      relaxed
      style={{ margin: "30px", marginTop: "40px" }}
    >
      <h3>Select a Recipe</h3>
      <hr />
      {recipeLinks}
    </List>
  );
}

export default SavedRecipeLinks;
