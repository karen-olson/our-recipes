import React, { useState } from "react";
import { Card, Grid } from "semantic-ui-react";
import SearchBar from "./SearchBar";
import RecipeCard from "./RecipeCard";

function RecipesContainer({ recipes, onSaveClick }) {
  const [search, setSearch] = useState({ search: "", category: "all" });

  console.log(search);

  let filteredRecipes;

  if (search.category === "all") {
    filteredRecipes = recipes;
  } else {
    filteredRecipes = recipes.filter(
      (recipe) => recipe.category === search.category
    );
  }

  const recipeCards = filteredRecipes
    .filter((recipe) =>
      recipe.name.toLowerCase().includes(search.search.toLowerCase())
    )
    .map((recipe) => (
      <RecipeCard recipe={recipe} key={recipe.id} onSaveClick={onSaveClick} />
    ));

  return (
    <>
      <SearchBar onSearch={setSearch} />
      <Card.Group
        centered
        itemsPerRow="3"
        textAlign="center"
        className="card-group"
      >
        {recipeCards}
      </Card.Group>
    </>
  );
}

export default RecipesContainer;
