import React, { useState } from "react";
import { Input, Select, Button } from "semantic-ui-react";

function SearchBar({ onSearch, onFilterChange, filterBy }) {
  const [currentSearch, setCurrentSearch] = useState("");

  const options = [
    { key: "all", text: "Select a category", value: "all" },
    { key: "breakfast", text: "Breakfast", value: "breakfast" },
    { key: "lunch", text: "Lunch", value: "lunch" },
    { key: "dinner", text: "Dinner", value: "dinner" },
    { key: "snacks", text: "Snacks", value: "snacks" },
    { key: "dessert", text: "Dessert", value: "dessert" },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    console.log("currentSearch in handleSubmit: ", currentSearch);
    onSearch(currentSearch);
  }

  function handleFilterChange(e, { value }) {
    console.log("value in handleFilterChange: ", value);
    onFilterChange(value);
  }

  return (
    <>
      <form className="search-bar" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Search..."
          action
          id="search"
          name="search"
          value={currentSearch}
          onChange={(e) => setCurrentSearch(e.target.value)}
        >
          <input />
          <Select
            compact
            options={options}
            id="categories"
            name="categories"
            value={filterBy}
            onChange={handleFilterChange}
          />
          <Button type="submit">Search</Button>
        </Input>
      </form>
    </>
  );
}

export default SearchBar;
