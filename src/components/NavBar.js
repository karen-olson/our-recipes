import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

function NavBar() {
  return (
    <Menu attached={true} size="huge" position="right">
      <Menu.Item as={NavLink} exact to="/">
        Home
      </Menu.Item>
      <Menu.Item as={NavLink} exact to="/recipes">
        Recipes
      </Menu.Item>
      <Menu.Item as={NavLink} exact to="/recipes/saved">
        Saved Recipes
      </Menu.Item>
      <Menu.Item as={NavLink} exact to="/recipes/new">
        Add a Recipe
      </Menu.Item>
    </Menu>
  );
}

export default NavBar;
