import React, { useState } from "react";

function NewRecipeForm({ onRecipeSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    image: "",
    prepTimeInMinutes: "",
    servings: "",
    ingredients: [],
    instructions: [],
    sourceUrl: "",
    likes: 0,
    saved: false,
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "ingredients" || name === "instructions") {
      const parsedValue = value.split("\n");
      setFormData({ ...formData, [name]: parsedValue });
    } else if (name === "prepTimeInMinutes" || name === "servings") {
      const parsedValue = parseInt(value);
      setFormData({ ...formData, [name]: parsedValue });
    } else if (name === "category") {
      const parsedValue = value.toLowerCase();
      setFormData({ ...formData, [name]: parsedValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRecipeSubmit(formData);
    setFormData({
      name: "",
      category: "",
      image: "",
      prepTimeInMinutes: "",
      servings: "",
      ingredients: [],
      instructions: [],
      sourceUrl: "",
      likes: 0,
      saved: false,
    });
  }

  console.log(formData);

  return (
    <div>
      <h1>Add a Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            // placeholder="Recipe name"
            onChange={handleChange}
            value={formData.name}
          ></input>
        </label>
        <label htmlFor="category">
          Category
          <input
            type="text"
            name="category"
            // placeholder="Category"
            onChange={handleChange}
            value={formData.category}
          ></input>
        </label>
        <label htmlFor="image">
          Image
          <input
            type="text"
            name="image"
            // placeholder="Image URL"
            onChange={handleChange}
            value={formData.image}
          ></input>
        </label>
        <label htmlFor="prepTimeInMinutes">
          Prep Time in Minutes
          <input
            type="text"
            name="prepTimeInMinutes"
            placeholder="Enter a number"
            onChange={handleChange}
            value={formData.prepTimeInMinutes}
          ></input>
        </label>
        <label htmlFor="servings">
          Servings
          <input
            type="text"
            name="servings"
            placeholder="Enter a number"
            onChange={handleChange}
            value={formData.servings}
          ></input>
        </label>
        <label htmlFor="ingredients">
          Ingredients
          <textarea
            name="ingredients"
            // placeholder="Paste the ingredients list here."
            onChange={handleChange}
            value={formData.ingredients}
            rows="8"
            cols="50"
          ></textarea>
        </label>
        <label htmlFor="instructions">
          Instructions
          <textarea
            name="instructions"
            // placeholder="Enter the instructions here."
            onChange={handleChange}
            value={formData.instructions}
            rows="8"
            cols="50"
          ></textarea>
        </label>
        <label htmlFor="sourceUrl">
          Source URL
          <input
            type="text"
            name="sourceUrl"
            placeholder="Enter a link to the original recipe"
            onChange={handleChange}
            value={formData.sourceUrl}
          ></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewRecipeForm;
