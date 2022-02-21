import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import {Container, Row, Col, Form, Button} from "react-bootstrap";

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
          <h1 className="mt-5 mb-5 text-left rounded text-color">Login</h1>
            <form onSubmit={handleFormSubmit}>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="mb-2">Email address</Form.Label>

                  <Form.Control className="mb-2" name="email" type="email" id="email" placeholder="Enter email" onChange={handleChange} />
                </Form.Group>

                
                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="mb-2">Password</Form.Label>

                    <Form.Control className="mb-2" name="password" type="password" id="pwd" placeholder="Password" onChange={handleChange} />
                </Form.Group>

                {error ? (
                  <Form.Group>
                  <Form.Text className="mb-2">The provided credentials are incorrect.</Form.Text>
                  </Form.Group> 
                ) : null}
                
                <br />
                <Button variant="success btn-block button-class" type="submit">
                    Login
                </Button>
                
            </form>
            
            <div className="mt-5 text-left">Don't have an account? <Link to={'/signup'}> Register here</Link></div>
          </Col>

          <Col lg={7} md={6} sm={12} className="rounded-lg">
          <div className="text-center">
                <img
                  src="/images/login-img03.png"
                  alt=""
                  className="img-fluid"
                  
                />
                
              </div>
          </Col>
      </Row>
    </Container>
    
  );
}

export default Login;
