import React from "react";
// import { Link } from "react-router-dom";

import { Container, Row, Col, } from "react-bootstrap";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faEnvelope,
//   faPhone,
//   faMapMarker,
// } from "@fortawesome/free-solid-svg-icons";

function About() {
  
  return (
    <Container fluid>
      <Container>
        <Row className="no-gutters">
          <Col lg={5} md={6} sm={12} className="p-5 m-auto">
            <h1 className="mt-3 mb-5 text-left rounded text-color">
              About us
            </h1>
            <Row>
                <div>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

                </div>
              </Row>
          </Col>

          <Col lg={7} md={6} sm={12} className="rounded-lg">
            <div className="text-center">
              <img src="/images/about-01.png" alt="" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
      {/* <Row className="text-center contact-row">
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
      </Row> */}
    </Container>
  );
}

export default About;
