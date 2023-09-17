import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import Contact from './contactMe';
import About from './aboutMe';
import Home from './homePage';
import Projects from './projects';
import {useState, useEffect} from "react";
const D20 = require("../Assets/Images/D20.png") as string;
const navIcon1 = require("../Assets/Images/nav-icon1.svg") as string;
const navIcon2 = require("../Assets/Images/nav-icon2.svg") as string;
const navIcon3 = require("../Assets/Images/nav-icon3.svg") as string;

function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, seeScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50){
      seeScrolled(true);
      } else {
        seeScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  return (
    <BrowserRouter>
    <Navbar className={scrolled ? "scrolled": ""} sticky="top" expand="sm" bg="dark" data-bs-theme="dark" text-color="white" >
      <Container>
        <Navbar.Brand as={Link} to="/"><img src={D20} height={100} alt="Logo" />Portfolio Nick Klaassen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/About">About me</Nav.Link>
            <Nav.Link as={Link} to="/Projects">Skills</Nav.Link>
            <Nav.Link as={Link} to="/Projects">Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="/"><img src={D20 } height={30} alt= "" /></a>
              <a href="/"><img src={D20 } height={30} alt= "" /></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      <Routes>
        <Route path="/About" element={<About/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Projects" element={<Projects/>}/>
      </Routes>
    </div>
   </BrowserRouter>
  );
}
export default NavBar;