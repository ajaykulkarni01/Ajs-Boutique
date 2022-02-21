import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

import {Container, Row, Col, Form, Button} from "react-bootstrap";

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Container>
       
        <Row className="no-gutters">
          <Col lg={5} md={6} sm={12} className="p-5 m-auto">
          <h1 className="mt-5 mb-5 text-left rounded text-color">Signup</h1>
            <form onSubmit={handleFormSubmit}>

                <Form.Group>
                  <Form.Label className="mb-2">First Name:</Form.Label>

                  <Form.Control className="mb-2" name="firstName" type="firstName" id="firstName" placeholder="First name" onChange={handleChange} />
                </Form.Group>

                <Form.Group>
                  <Form.Label className="mb-2">Last Name:</Form.Label>

                  <Form.Control className="mb-2" name="lastName" type="lastName" id="lastName" placeholder="Last name" onChange={handleChange} />
                </Form.Group>

                <Form.Group>
                  <Form.Label className="mb-2">Email address</Form.Label>

                  <Form.Control className="mb-2" name="email" type="email" id="email" placeholder="Enter email" onChange={handleChange} />
                </Form.Group>

                
                <Form.Group>
                    <Form.Label className="mb-2">Password</Form.Label>

                    <Form.Control className="mb-2" name="password" type="password" id="pwd" placeholder="Password" onChange={handleChange} />
                </Form.Group>

                <br />
                <Button variant="success btn-block button-class" type="submit">
                    Signup
                </Button>
                
            </form>
            
            <div className="mt-5 text-left">Already registered? <Link to={'/login'}> Login here</Link></div>
          </Col>

          <Col lg={7} md={6} sm={12} className="rounded-lg">
          <div className="text-center">
                <img
                  src="/images/signup-03.png"
                  alt=""
                  className="img-fluid"
                  
                />
                
              </div>
          </Col>
      </Row>
    </Container>
  );
}

export default Signup;

