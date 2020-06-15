import React from "react";
import "./App.css";

import SocialCard from "./components/SocialCard";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="mb-4 contentContainer">
        <Row>
          <Col lg={12}>
            <SocialCard />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
