import React, { useState } from "react";

function SearchBar({ onSearch, onFilterChange, filterBy }) {
  const [currentSearch, setCurrentSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(currentSearch);
  }

  function handleFilterChange(e) {
    onFilterChange(e.target.value);
  }

  return (
    <>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          placeholder="Search for a recipe"
          value={currentSearch}
          onChange={(e) => setCurrentSearch(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <label>
        Filter recipes:
        <select
          name="categories"
          onChange={handleFilterChange}
          value={filterBy}
        >
          <option value="all">Select a Category</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snacks">Snacks</option>
          <option value="dessert">Dessert</option>
        </select>
      </label>
    </>
  );
}

export default SearchBar;
