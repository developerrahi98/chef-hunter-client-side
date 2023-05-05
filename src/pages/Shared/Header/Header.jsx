import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const Header = () => {

    const navLinkStyles = ({isActive}) =>{
        return {
            fontWeight: isActive ? "bold" : "normal",
        }
    }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-1">
          Chef's Cusine
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink
              href="#home"
              to='/'
              className="ms-3 fs-4 text-decoration-none text-dark "
              style={navLinkStyles}
            >
              Home
            </NavLink>
            <NavLink
              href="#link"
              to="/contact"
              className="ms-3 fs-4 text-decoration-none text-dark "
              style={navLinkStyles}
            >
              Contacts
            </NavLink>
            <NavLink
              href="#blogs"
              to="/blogs"
              className="ms-3 fs-4 text-decoration-none text-dark"
              style={navLinkStyles}
            >
              Blogs
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <div className="d-fle">
          <Nav.Link
            href="#blogs"
            className="fw-bold fs-4 text-decoration-none text-dark"
          >
            <UserCircleIcon style={{fontSize:'1.5rem'}}></UserCircleIcon>
          </Nav.Link>
          <Button variant="secondary" className="fw-bold py-2 px-4">
            Login
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
