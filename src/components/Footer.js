import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const footer = () => {
  return (
    <Container fluid className="footer">
      <Row>
        <Col lg={12}>
          <p>Designed by Bianka Korban</p>
        </Col>
      </Row>
    </Container>
  );
};
export default footer;
