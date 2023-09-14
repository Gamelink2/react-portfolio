import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import Contact from './Pages/contactMe';
import About from './Pages/aboutMe';
import Home from './Pages/homePage';
import Projects from './Pages/projects';

function NavBar() {
  return (
    <BrowserRouter>
    <Navbar sticky="top" expand="sm" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/Home">Portfolio Nick Klaassen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/About">About me</Nav.Link>
            <Nav.Link as={Link} to="/Projects">Projects</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Services/3D-printing">3D-printing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Services/Coding">Coding</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/Contact">Contact me</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      <Routes>
        <Route path="/About" element={<About/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Projects" element={<Projects/>}/>
      </Routes>
    </div>
   </BrowserRouter>
  );
}
export default NavBar;