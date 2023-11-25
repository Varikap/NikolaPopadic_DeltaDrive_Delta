import React, { useState } from "react";
import { Header, Message, Form, Button, Icon, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../actions/authActions";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e, { name, value }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (e, { name, value }) => {
    setFormData({ ...formData, [name]: value });
  };

  const renderFormMessage = () => {
    return (
      <>
        Already Registered? <Link to="/login">Login</Link>
      </>
    );
  };

  const onFormSubmit = () => {
    dispatch(registerUser(formData));
  };

  return (
    <div className="landing-page">
      <Message className="message-container" size="huge" secondary>
        <Header as="h2" textAlign="center">
          Register
        </Header>
        <Form onSubmit={onFormSubmit}>
          <Form.Input
            icon="user"
            iconPosition="left"
            label="Username"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <Form.Group widths="equal">
            <Form.Input
              icon="user"
              iconPosition="left"
              label="First Name"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <Form.Input
              icon="user"
              iconPosition="left"
              label="Last Name"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Field>
            <label>Birthdate</label>
            <Input
              icon="calendar"
              iconPosition="left"
              name="birthDate"
              type="date"
              value={formData.birthDate}
              onChange={handleDateChange}
            />
          </Form.Field>
          <Form.Input
            icon="envelope"
            iconPosition="left"
            label="Email"
            placeholder="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Form.Input
            icon="lock"
            iconPosition="left"
            label="Password"
            placeholder="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />

          <Button color="black" animated secondary>
            <Button.Content visible>Register</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </Form>

        <Message>{renderFormMessage()}</Message>
      </Message>
    </div>
  );
};

export default Register;
