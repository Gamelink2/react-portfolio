import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap'
import { Route, Link } from 'react-router-dom';

<LinkContainer to="/service">
    <Nav.Link>Service</Nav.Link>
</LinkContainer>

function NavBar() {
  return (
    <Navbar sticky="top" expand="sm" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/Home">Portfolio Nick Klaassen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link as={Link} to="/About" >About me</Nav.Link>
            <Nav.Link href="/Projects">Projects</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Services/3D-printing">3D-printing</NavDropdown.Item>
              <NavDropdown.Item href="/Services/Coding">Coding</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Contact">Contact me</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;