import React, { useState } from "react";
import { Form, Grid, Select } from "semantic-ui-react";

function NewRecipeForm({ onRecipeSubmit }) {
  const defaultFormData = {
    name: "",
    category: "",
    image: "",
    prepTimeInMinutes: "",
    servings: "",
    ingredients: "",
    instructions: "",
    sourceUrl: "",
    likes: 0,
    saved: false,
  };

  const [formData, setFormData] = useState(defaultFormData);

  function handleChange(e, { name, value }) {
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const recipeObject = {
      ...formData,
      ingredients: formData.ingredients.split("\n"),
      instructions: formData.instructions.split("\n"),
      prepTimeInMinutes: parseInt(formData.prepTimeInMinutes),
      servings: parseInt(formData.servings),
      category: formData.category.toLowerCase(),
    };

    onRecipeSubmit(recipeObject);

    setFormData(defaultFormData);
  }

  const options = [
    { key: "all", text: "Select a category", value: "all" },
    { key: "breakfast", text: "Breakfast", value: "breakfast" },
    { key: "lunch", text: "Lunch", value: "lunch" },
    { key: "dinner", text: "Dinner", value: "dinner" },
    { key: "sides", text: "Sides", value: "sides" },
    { key: "snacks", text: "Snacks", value: "snacks" },
    { key: "dessert", text: "Dessert", value: "dessert" },
  ];

  return (
    <>
      <br />
      <div>
        <h1>Add a Recipe</h1>
      </div>
      <br />
      <br />
      <div>
        <Grid centered columns={2}>
          <Grid.Column>
            <Form onSubmit={handleSubmit}>
              <Form.Field>
                <label htmlFor="name">Name</label>
                <Form.Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  value={formData.name}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor="category">Category</label>
                <Select
                  compact
                  options={options}
                  id="category"
                  name="category"
                  placeholder="Category"
                  value={formData.category}
                  onChange={handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor="image">Image</label>
                <Form.Input
                  type="text"
                  name="image"
                  placeholder="Image URL"
                  onChange={handleChange}
                  value={formData.image}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor="prepTimeInMinutes">Prep Time in Minutes</label>
                <Form.Input
                  type="text"
                  name="prepTimeInMinutes"
                  placeholder="Enter a number"
                  onChange={handleChange}
                  value={formData.prepTimeInMinutes}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor="servings">Servings</label>
                <Form.Input
                  type="text"
                  name="servings"
                  placeholder="Enter a number"
                  onChange={handleChange}
                  value={formData.servings}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor="ingredients">Ingredients</label>
                <Form.TextArea
                  name="ingredients"
                  placeholder="Enter ingredients list. Press enter once between each ingredient. Remove any checkboxes or bullet points before submitting."
                  onChange={handleChange}
                  value={formData.ingredients}
                  rows="8"
                  cols="50"
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor="instructions">Instructions</label>
                <Form.TextArea
                  name="instructions"
                  placeholder="Enter instructions list. Press enter once between each instruction. Remove any step numbers, checkboxes, or bullet points before submitting."
                  onChange={handleChange}
                  value={formData.instructions}
                  rows="8"
                  cols="50"
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor="sourceUrl">Source URL</label>
                <Form.Input
                  type="text"
                  name="sourceUrl"
                  placeholder="Enter a link to the original recipe"
                  onChange={handleChange}
                  value={formData.sourceUrl}
                />
              </Form.Field>
              <Form.Button type="submit" onSubmit={handleSubmit}>
                Submit
              </Form.Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    </>
  );
}

export default NewRecipeForm;
