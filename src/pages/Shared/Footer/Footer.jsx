import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-light p-5">
        <Container className="mx-auto">
          <Row>
            <Col md={6}>
              <h4>Contact Us</h4>
              <ul className="list-unstyled">
                <li>123 Main St.</li>
                <li>New York, NY 10001</li>
                <li>(123) 456-7890</li>
                <li>info@restaurant.com</li>
              </ul>
            </Col>
            <Col md={6}>
              <h4>Follow Us</h4>
              <ul className="list-inline">
                <li>
                  <a href="#" className="text-decoration-none fw-bold">Facebook</a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none fw-bold">Twitter</a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none fw-bold">Instagram</a>
                </li>
              </ul>
            </Col>
          </Row>
          <hr className="bg-light" />
          <Row>
            <Col md={12}>
              <p className="text-center">
                &copy; 2023 Restaurant. All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
