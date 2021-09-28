import React from "react";
import { Header, Icon, Image } from "semantic-ui-react";

function Home() {
  return (
    <div>
      <Header as="h2" icon textAlign="center">
        <Icon name="users" circular />
        <Header.Content>Find a Recipe</Header.Content>
      </Header>
      <Image centered size="small" src="logo192.png" />
    </div>
  );
}

export default Home;
