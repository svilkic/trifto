import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function CheckoutSteps({ step1, step2, step3, step4 }) {
  return (
    <Nav className="justified-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <Link className="nav-link" to="/login">
            Sign In
          </Link>
        ) : (
          <Nav.Link disabled>Sign In</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <Link className="nav-link" to="/shipping">
            Shipping
          </Link>
        ) : (
          <Nav.Link disabled>Shipping</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <Link className="nav-link" to="/payment">
            Payment
          </Link>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <Link className="nav-link" to="/placeorder">
            Place Order
          </Link>
        ) : (
          <Nav.Link disabled>Place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
}

export default CheckoutSteps;
