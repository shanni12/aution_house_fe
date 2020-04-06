import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          {/* <Nav.Link href="/login">Login</Nav.Link> */}
          <Nav.Link href="/my-products">My Products</Nav.Link>
          <Nav.Link href="/my-bids">My Bids</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/add-product">Add Product</Nav.Link>
          <Nav.Link href="/login">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavBar;
