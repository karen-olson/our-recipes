import React, { useState } from "react";
import SearchBar from "./SearchBar";
import RecipeThumbnail from "./RecipeThumbnail";

function RecipesPage({ recipes }) {
  const [search, setSearch] = useState("");
  const [filterBy, setFilterBy] = useState("all");

  function onSearch(currentSearch) {
    setSearch(currentSearch);
  }

  function onFilterChange(currentFilter) {
    setFilterBy(currentFilter);
  }

  const recipeThumbnails = recipes.map((recipe) => (
    <RecipeThumbnail recipe={recipe} key={recipe.id} />
  ));

  return (
    <>
      <h1>Recipes Page</h1>
      <SearchBar onSearch={onSearch} onFilterChange={onFilterChange} />
      {recipeThumbnails}
    </>
  );
}

export default RecipesPage;
