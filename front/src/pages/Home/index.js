import React from "react";
import { Header, Message, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Home = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const showLoginBtn = () => {
    if (!isAuthenticated) {
      return (
        <Link to="/login">
          <Button color="black" animated secondary>
            <Button.Content visible>Login</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </Link>
      );
    } else {
      return (
        <Link to="/find-ride">
          <Button color="black" animated secondary>
            <Button.Content visible>Find ride</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </Link>
      );
    }
  };

  return (
    <div className="landing-page">
      <Message className="message-container" size="huge" secondary="true">
        <Header size="huge">Delta Drive</Header>
        <p>Your journey, our responsibility.</p>
        {showLoginBtn()}
      </Message>
    </div>
  );
};

export default Home;
