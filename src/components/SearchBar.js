import React, { useState } from "react";
import { Input, Select, Button } from "semantic-ui-react";

function SearchBar({ onSearch }) {
  const [currentSearch, setCurrentSearch] = useState({
    search: "",
    category: "all",
  });

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

  function handleSearchChange(e, { name, value }) {
    setCurrentSearch({ ...currentSearch, [name]: value });
  }

  return (
    <>
      <form
        className="search-bar"
        onSubmit={handleSubmit}
        style={{ margin: "15px" }}
      >
        <Input
          type="text"
          placeholder="Search..."
          action
          id="search"
          name="search"
          value={currentSearch.search}
          onChange={handleSearchChange}
        >
          <input />
          <Select
            compact
            options={options}
            id="category"
            name="category"
            value={currentSearch.category}
            onChange={handleSearchChange}
          />
          <Button type="submit">Search</Button>
        </Input>
      </form>
    </>
  );
}

export default SearchBar;
