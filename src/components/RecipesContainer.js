import React, { useState } from "react";
import { Card, Grid } from "semantic-ui-react";
import SearchBar from "./SearchBar";
import RecipeCard from "./RecipeCard";

function RecipesContainer({ recipes, onSaveClick }) {
  const [search, setSearch] = useState("");
  const [filterBy, setFilterBy] = useState("all");

  function onFilterChange(currentFilter) {
    setFilterBy(currentFilter);
  }

  let filteredRecipes;

  if (filterBy === "all") {
    filteredRecipes = recipes;
  } else {
    filteredRecipes = recipes.filter((recipe) => recipe.category === filterBy);
  }

  const recipeCards = filteredRecipes
    .filter((recipe) =>
      recipe.name.toLowerCase().includes(search.toLowerCase())
    )
    .map((recipe) => (
      <RecipeCard recipe={recipe} key={recipe.id} onSaveClick={onSaveClick} />
    ));

  return (
    <>
      <SearchBar
        onSearch={setSearch}
        onFilterChange={onFilterChange}
        filterBy={filterBy}
      />
      <Card.Group centered itemsPerRow="3" textAlign="center">
        {recipeCards}
      </Card.Group>
    </>
  );
}

export default RecipesContainer;
