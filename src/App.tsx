import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function BasicExample() {
  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Portfolio Nick Klaassen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">About me</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Services/3D-printing">3D-printing</NavDropdown.Item>
              <NavDropdown.Item href="#Services/Coding">Coding</NavDropdown.Item>
              <NavDropdown.Divider /><NavDropdown.Item href="#Contact">Contact me</NavDropdown.Item>
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