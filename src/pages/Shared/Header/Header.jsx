import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className='fw-bold fs-1'>Chef's Cusine</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home" className='fw-bold fs-4'>Home</Nav.Link>
              <Nav.Link href="#link" className='fw-bold fs-4'>Contact Us</Nav.Link>
              <Nav.Link href="#blogs" className='fw-bold fs-4'>Blogs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button variant='secondary' className='fw-bold py-2 px-4'>Login</Button>
        </Container>
      </Navbar>
    );
};

export default Header;