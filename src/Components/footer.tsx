import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/Container";
//import { MailchimpForm } from "./MailchimpForm";
import logo from "../Assets/Images/logo.svg";
import navIcon1 from "../Assets/Images/nav-icon1.svg";
import navIcon3 from "../Assets/Images/nav-icon3.svg";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <span className="navbar-text">
            <div className="social-icon">
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUjcmljayBhc3RsZXkgbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"><img src={navIcon1} alt= "" /></a>
              <a href="/"><img src={navIcon3} alt= "" /></a>
            </div>
            </span>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer;