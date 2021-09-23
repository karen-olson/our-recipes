import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/recipes">
        Recipes
      </NavLink>
      <NavLink exact to="/recipes/saved">
        Saved Recipes
      </NavLink>
      <NavLink exact to="/recipes/new">
        Add a Recipe
      </NavLink>
    </div>
  );
}

export default NavBar;
