import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

function RecipeCard({ recipe }) {
  const [likes, setLikes] = useState(recipe.likes);
  const [saved, setSaved] = useState(recipe.saved);

  const currentUrl = useRouteMatch().url;

  function handleLikeClick(e) {
    fetch(`http://localhost:3001/recipes/${recipe.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: likes + 1 }),
    })
      .then((response) => response.json())
      .then((updatedRecipe) => setLikes(updatedRecipe.likes));
  }

  // Why is this only updating after a refresh? State is being reset.
  // Is it because state would need to be updated in the parent to re-render the whole page?
  // But this should at least re-render the component which would change the text from "Remove from saved..." to "Add to saved..."
  // Changed the ternary for displaying "Remove from..." to "Add to..." so that it's based on state rather than the recipe object's saved property
  // Now the RecipeCard component is rerendering after a state change
  // Just need the parent to rerender instead (SavedRecipes)
  // Add state in the parent component --> how?
  function handleSaveClick(e) {
    setSaved(!saved);
    fetch(`http://localhost:3001/recipes/${recipe.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ saved: !saved }),
    })
      .then((response) => response.json())
      .then((updatedRecipe) => setSaved(updatedRecipe.saved));
  }

  if (recipe) {
    return (
      <>
        <h3>{recipe.name}</h3>
        <button onClick={handleLikeClick}>👍</button>
        <span>
          {likes} {likes === 1 ? "like" : "likes"}
        </span>
        <button onClick={handleSaveClick}>⭐</button>
        <span>
          {saved ? "Remove from saved recipes" : "Add to saved recipes"}
        </span>
        <img src={recipe.image} alt={recipe.name}></img>
        {currentUrl === `/recipes` ? (
          <Link to={`/recipes/${recipe.id}`}>View Details</Link>
        ) : (
          <Link to={`/recipes`}>Go Back</Link>
        )}
      </>
    );
  } else {
    return <h3>Loading Recipe</h3>;
  }
}

export default RecipeCard;
