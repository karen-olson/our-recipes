import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/recipes">Recipes</NavLink>
      <NavLink to="/recipes/saved">Saved Recipes</NavLink>
      <NavLink to="/recipes/new">Add a Recipe</NavLink>
    </div>
  );
}

export default NavBar;
