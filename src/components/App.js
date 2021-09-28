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

  console.log("recipes in app: ", recipes);

  return (
    <div className="App">
      <NavBar />
      <Button>Example Button</Button>
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
          <RecipesContainer recipes={recipes} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
