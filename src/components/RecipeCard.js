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

  function handleSaveClick(e) {
    setSaved(!saved);
    const updatedRecipe = { ...recipe, saved: !saved };

    onSaveClick(updatedRecipe);
  }

  if (recipe) {
    return (
      <Card>
        <Card.Content>
          <Card.Header style={{ height: "2.5rem", fontSize: "x-large" }}>
            {recipe.name}
          </Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Button as="div" labelPosition="right">
            <Button
              icon
              color="instagram"
              onClick={handleLikeClick}
              size="tiny"
            >
              <Icon name="heart" />
              Like
            </Button>
            <Label basic pointing="left">
              {likes}
            </Label>
          </Button>
          <Button as="div" labelPosition="right">
            <Button
              icon
              color="instagram"
              onClick={handleSaveClick}
              size="tiny"
            >
              <Icon name="star" />
              {saved ? "Unsave" : "Save"}
            </Button>
          </Button>
        </Card.Content>
        <Image
          centered
          className="card-image"
          src={recipe.image}
          alt={recipe.name}
        ></Image>
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
