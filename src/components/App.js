import "../App.css";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import RecipesContainer from "./RecipesContainer";
import DetailedRecipe from "./DetailedRecipe";
import SavedRecipes from "./SavedRecipes";
import NewRecipeForm from "./NewRecipeForm";
import { Switch, Route } from "react-router-dom";
import { Button } from "semantic-ui-react";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/recipes")
      .then((resp) => resp.json())
      .then((recipes) => setRecipes(recipes));
  }, []);

  function onRecipeSubmit(newRecipeObject) {
    fetch("http://localhost:3001/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipeObject),
    })
      .then((response) => response.json())
      .then((newRecipeObject) => setRecipes([...recipes, newRecipeObject]));
  }

  function onSaveClick(updatedRecipe) {
    const updatedRecipes = recipes.map((recipe) => {
      if (recipe.id === updatedRecipe.id) {
        return updatedRecipe;
      } else {
        return recipe;
      }
    });

    // SOLUTION
    // just send a patch request for the one recipe
    // but THEN update state for the entire recipes array

    fetch(`http://localhost:3001/recipes/${updatedRecipe.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRecipe),
    })
      .then((response) => response.json())
      .then(() => setRecipes(updatedRecipes));
  }

  console.log("recipes in app: ", recipes);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/recipes/saved">
          <SavedRecipes recipes={recipes} />
        </Route>
        <Route path="/recipes/new">
          <NewRecipeForm onRecipeSubmit={onRecipeSubmit} />
        </Route>
        <Route exact path="/recipes/:id">
          <DetailedRecipe recipes={recipes} />
        </Route>
        <Route exact path="/recipes">
          <RecipesContainer recipes={recipes} onSaveClick={onSaveClick} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
