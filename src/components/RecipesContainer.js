import React, { useState } from "react";
import { Card } from "semantic-ui-react";
import SearchBar from "./SearchBar";
import RecipeCard from "./RecipeCard";

function RecipesContainer({ recipes, onButtonClick }) {
  const [search, setSearch] = useState({ search: "", category: "all" });

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
      <RecipeCard
        recipe={recipe}
        key={recipe.id}
        onButtonClick={onButtonClick}
      />
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
