import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProviders";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
    .then()
    .catch(error => console.log(error));
  }

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };

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
              to="/"
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
        <div className="d-flex">
          {user && (
            <Nav.Link
              href="#blogs"
              className="fw-bold fs-4 text-decoration-none text-dark me-3"
            >
              <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
            </Nav.Link>
          )}
          <Nav.Link>
            {user ? (
              <Button onClick={handleLogOut} variant="secondary" className="fw-bold py-2 px-4">
                Logout
              </Button>
            ) : (
              <Link to='/login'>
                <Button variant="secondary" className="fw-bold py-2 px-4">
                  Login
                </Button>
              </Link>
            )}
          </Nav.Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
