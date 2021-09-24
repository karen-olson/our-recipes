import React, { useState } from "react";
import SearchBar from "./SearchBar";
import RecipeCard from "./RecipeCard";

function RecipesContainer({ recipes }) {
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
    .map((recipe) => <RecipeCard recipe={recipe} key={recipe.id} />);

  return (
    <>
      <SearchBar
        onSearch={setSearch}
        onFilterChange={onFilterChange}
        filterBy={filterBy}
      />
      {recipeCards}
    </>
  );
}

export default RecipesContainer;
