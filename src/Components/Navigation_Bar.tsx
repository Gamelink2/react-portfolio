 import Logo from "../Assets/Images/logo.svg";
import IconLinkedIn from "../Assets/Images/Icon-Linked-In.svg";
import IconInsta from "../Assets/Images/Icon-Insta.svg";
import IconShop from "../Assets/Images/Icon-Shop.svg";
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Routes, Route, Link, BrowserRouter, useLocation} from 'react-router-dom';
import About from './aboutMe';
import Home from './homePage';
import Projects from './projects';
import Contact from './contact';
import {useState, useEffect, useRef} from "react";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

function NavBar() {
  const [activeLink, setActiveLink] = useState('/');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const scrollableNodeRef = useRef<HTMLDivElement | null>(null); 
  const onUpdateActiveLink = (value:any) => {setActiveLink(value);}
  const handleToggle = () => {setExpanded(!expanded);};
  const isActive = (path: string) => window.location.pathname === path;
  
  useEffect(() => {
    const onScroll = () => {

      if (scrollableNodeRef.current && scrollableNodeRef.current.scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    if (scrollableNodeRef.current) {
      scrollableNodeRef.current.addEventListener("scroll", onScroll);
    }
  
    return () => {
      if (scrollableNodeRef.current) {
        scrollableNodeRef.current.removeEventListener("scroll", onScroll);
      }
    };
  }, []);

  return (
    <BrowserRouter>
    <SimpleBar style={{ maxHeight: '100%', height: '100vh' }} scrollableNodeProps={{ ref: scrollableNodeRef }}>
    <Navbar expanded={expanded} className={`navbar ${scrolled ? 'scrolled' : ''} ${expanded ? 'expanded' : ''}`} sticky="top" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/"><img className="logo" src={Logo} alt="Portfolio Nick Klaassen" /> </Navbar.Brand>
        <Navbar.Toggle className="navbar-toggler" aria-controls="basic-navbar-nav" onClick={handleToggle}> <span className="navbar-toggler-icon"></span> </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto">
          <Nav.Link className={isActive('/') ? 'active navbar-link' : 'navbar-link'} onClick={() => {onUpdateActiveLink('/');setExpanded(false);}} as={Link} to="/">Home</Nav.Link>
            <Nav.Link className={isActive('/About') ? 'active navbar-link' : 'navbar-link'} as={Link} onClick={() => {onUpdateActiveLink('/About');setExpanded(false);}} to="/About">About me</Nav.Link>
            <Nav.Link className={isActive('/Projects') ? 'active navbar-link' : 'navbar-link'}as={Link} onClick={() => {onUpdateActiveLink('/Projects');setExpanded(false);}} to="/Projects">Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUjcmljayBhc3RsZXkgbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D" target="_blank"><img src={IconLinkedIn} alt= "" /></a>
              <a href="https://www.instagram.com/" target="_blank"><img src={IconInsta} alt= "" /></a>
              <a href="https://www.etsy.com" target="_blank"><img src={IconShop} alt= "" /></a>
            </div>
            <div className="connect-button">      
            <Nav.Link onClick={() => {onUpdateActiveLink('/Contact');setExpanded(false);}} as={Link} to="/Contact" ><span className="text">Contact me</span></Nav.Link>
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
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
    </SimpleBar>
   </BrowserRouter>
  );
}
export default NavBar;