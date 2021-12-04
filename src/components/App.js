import "../App.css";
import React, { useEffect, useState } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import NavBar from "./NavBar";
import Home from "./Home";
import RecipesContainer from "./RecipesContainer";
import DetailedRecipe from "./DetailedRecipe";
import SavedRecipes from "./SavedRecipes";
import NewRecipeForm from "./NewRecipeForm";
import { Switch, Route } from "react-router-dom";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://our-recipes-backend.herokuapp.com/recipes")
      .then((resp) => resp.json())
      .then((recipes) => setRecipes(recipes));
  }, []);

  function onRecipeSubmit(newRecipeObject) {
    fetch("https://our-recipes-backend.herokuapp.com/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipeObject),
    })
      .then((response) => response.json())
      .then((newRecipeObject) => setRecipes([...recipes, newRecipeObject]));
  }

  function onButtonClick(updatedRecipe) {
    const updatedRecipes = recipes.map((recipe) => {
      if (recipe.id === updatedRecipe.id) {
        return updatedRecipe;
      } else {
        return recipe;
      }
    });

    fetch(
      `https://our-recipes-backend.herokuapp.com/recipes/${updatedRecipe.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedRecipe),
      }
    )
      .then((response) => response.json())
      .then(() => setRecipes(updatedRecipes));
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/recipes/saved">
          <SavedRecipes recipes={recipes} onButtonClick={onButtonClick} />
        </Route>
        <Route path="/recipes/new">
          <NewRecipeForm onRecipeSubmit={onRecipeSubmit} />
        </Route>
        <Route exact path="/recipes/:id">
          <DetailedRecipe recipes={recipes} onButtonClick={onButtonClick} />
        </Route>
        <Route exact path="/recipes">
          <RecipesContainer recipes={recipes} onButtonClick={onButtonClick} />
        </Route>
        <Route exact path="/">
          <Home recipes={recipes} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
