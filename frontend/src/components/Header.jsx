import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <NavLink to="/">
            <h5 className="text-light mb-0">e-Shop</h5>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink className="text-light mr-3" to="/cart">
                <i className="fas fa-shopping-cart" />
                Cart
              </NavLink>
              <NavLink className="text-light mr-3" to="/login">
                <i className="fas fa-user" />
                Sign In
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
