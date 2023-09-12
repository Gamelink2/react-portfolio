import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Portfolio Nick Klaassen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">About me</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">3D-printing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Coding</NavDropdown.Item>
              <NavDropdown.Divider /><NavDropdown.Item href="#action/3.4">Contact me</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

/*function App(): JSX.Element {
  return (
      <div>sup fucker</div>
  );
}

export default App;
*/