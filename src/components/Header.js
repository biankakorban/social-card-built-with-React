import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const header = () => {
  return (
    <Container fluid className="header">
      <Row>
        <Col lg={12}>
          <h3>Simple social card built with React</h3>
        </Col>
      </Row>
    </Container>
  );
};
export default header;
