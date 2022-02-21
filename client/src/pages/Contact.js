import React, { useState } from "react";
// import { Link } from "react-router-dom";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmitContact = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Container fluid>
      <Container>
        <Row className="no-gutters">
          <Col lg={5} md={6} sm={12} className="p-5 m-auto">
            <h1 className="mt-3 mb-5 text-left rounded text-color">
              Contact us
            </h1>
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmitContact}
            >
              <Row className="mb-3">
                <Form.Group as={Col} lg={6} md={6} sm={12}>
                  <Form.Label>First name</Form.Label>
                  <Form.Control required type="text" placeholder="Your name" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} lg={6} md={6} sm={12}>
                  <Form.Label>Last name</Form.Label>
                  <Form.Control required type="text" placeholder="Last name" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Your email"
                    id="email"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a correct email.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3">
                  <Form.Label>Textarea</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Row>
              <Button className="button-class" type="submit">Submit form</Button>
            </Form>
          </Col>

          <Col lg={7} md={6} sm={12} className="rounded-lg">
            <div className="text-center">
              <img src="/images/contact-01.png" alt="" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
      <Row className="text-center contact-row">
        <Col>
          <Button className="button-class mb-2">
            <FontAwesomeIcon icon={faMapMarker} />
          </Button>
          <p>Broadview, SA 5083</p>
          <p>Australia</p>
        </Col>
        <Col>
          <Button className="button-class mb-2">
            <FontAwesomeIcon icon={faPhone} />
          </Button>
          <p>+61 123456789</p>
          <p>Monday - Friday, 8:00 am - 05:00 pm</p>
        </Col>
        <Col>
          <Button className="button-class mb-2">
            <FontAwesomeIcon icon={faEnvelope} />
          </Button>
          <p>info@ajs-boutique.com.au</p>
          <p>sale@ajs-boutique.com.au</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
