import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Card, Icon, Image, Button, Label } from "semantic-ui-react";

function RecipeCard({ recipe, onSaveClick }) {
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
    // ERROR: onSaveClick is not a function???

    setSaved(!saved);
    const updatedRecipe = { ...recipe, saved: !saved };

    console.log(onSaveClick);
    onSaveClick(updatedRecipe);
  }

  if (recipe) {
    return (
      <Card>
        <Card.Content>
          <Card.Header>{recipe.name}</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Button as="div" labelPosition="right">
            <Button icon color="instagram" onClick={handleLikeClick}>
              <Icon name="heart" />
              Like
            </Button>
            <Label basic pointing="left">
              {likes}
            </Label>
          </Button>
          <Button as="div" labelPosition="right">
            <Button icon color="instagram" onClick={handleSaveClick}>
              <Icon name="star" />
              {saved ? "Unsave" : "Save"}
            </Button>
          </Button>
        </Card.Content>
        <Image src={recipe.image} alt={recipe.name}></Image>

        {currentUrl === `/recipes` || currentUrl === `/recipes/saved` ? (
          <Button as={Link} to={`/recipes/${recipe.id}`}>
            View Details
          </Button>
        ) : (
          <Button as={Link} to={`/recipes`}>
            Go Back
          </Button>
        )}
      </Card>
    );
  } else {
    return <h3>Loading Recipe</h3>;
  }
}

export default RecipeCard;
