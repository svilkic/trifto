import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { logout } from "../actions/userActions";

const Header = (props) => {
  const { userInfo } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
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
              <div className="nav-link">
                <NavLink className="text-light mr-3" to="/cart">
                  <i className="fas fa-shopping-cart" />
                  Cart
                </NavLink>
              </div>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                  <div className="dropdown-item">
                    <NavLink to="/profile">Profile</NavLink>
                  </div>
                  <div className="dropdown-item" onClick={logoutHandler}>
                    Logout
                  </div>
                </NavDropdown>
              ) : (
                <div className="nav-link">
                  <NavLink className="text-light mr-3" to="/login">
                    <i className="fas fa-user" />
                    Sign In
                  </NavLink>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
