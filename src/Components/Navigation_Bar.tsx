import Logo from "../Assets/Images/logo.svg";
import navIcon1 from "../Assets/Images/nav-icon1.svg";
import navIcon3 from "../Assets/Images/nav-icon3.svg";
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

function NavBar() {
  const [activeLink, setActiveLink] = useState('/');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded); // Toggle expanded state when Toggler is clicked
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50){
      setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  const onUpdateActiveLink = (value:any) => {
    setActiveLink(value);
  }

  return (
    <BrowserRouter>
    <Navbar className={`navbar ${scrolled ? 'scrolled' : ''} ${expanded ? 'expanded' : ''}`} sticky="top" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/"><img src={Logo} alt="Portfolio Nick Klaassen" /> </Navbar.Brand>
        <Navbar.Toggle className="navbar-toggler" aria-controls="basic-navbar-nav" onClick={handleToggle}> <span className="navbar-toggler-icon"></span> </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link className={activeLink === '/' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('/')} as={Link} to="/">Home</Nav.Link>
            <Nav.Link className={activeLink === '/About' ? 'active navbar-link' : 'navbar-link'} as={Link} onClick={() => onUpdateActiveLink('/About')} to="/About">About me</Nav.Link>
            <Nav.Link className={activeLink === '/Projects' ? 'active navbar-link' : 'navbar-link'}as={Link} onClick={() => onUpdateActiveLink('/Projects')} to="/Projects">Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUjcmljayBhc3RsZXkgbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"><img src={navIcon1} alt= "" /></a>
              <a href="/"><img src={navIcon3} alt= "" /></a>
              
            </div>
            <div className="connect-button">
            <a href="/About"><span className="text">Let's Connect</span></a>
            </div>
            
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Projects" element={<Projects/>}/>
      </Routes>
    </div>
   </BrowserRouter>
  );
}
export default NavBar;