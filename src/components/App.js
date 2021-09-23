import "../App.css";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import RecipesPage from "./RecipesPage";
import RecipeDetailPage from "./RecipeDetailPage";
import SavedRecipesPage from "./SavedRecipesPage";
import NewRecipeForm from "./NewRecipeForm";
import { Switch, Route, Link } from "react-router-dom";

// DELIVERABLES:
// 1) Your app should use at least 5 components in a way that keeps your code well organized
// 2) There should be at least 3 client-side routes using react-router
// 3) Use a json-server to create a RESTful API for your backend
//    and make both a GET and a POST request to the json server.
//    Additionally, you may choose to incorporate data from an external API but it is not required.
//    You should keep your json-server data simple: avoid nested data and associations.
//    You'll learn how to work with more complex data in the next two phases. Focus on the frontend for this project.

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/recipes")
      .then((resp) => resp.json())
      .then((recipes) => console.log(recipes));
  }, []);

  // function onRecipeClick(id) {
  //   // changes route to RecipeDetailPage
  //   // renders the RecipeThumbnail and RecipeDetails from matching recipe
  // }

  return (
    <div className="App">
      <NavBar />
      <Home />
      <RecipesPage recipes={recipes} onRecipeClick={onRecipeClick} />
      <RecipeDetailPage />
      <SavedRecipesPage recipes={recipes} />
      <NewRecipeForm />
    </div>
  );
}

export default App;
