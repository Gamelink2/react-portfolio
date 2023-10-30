import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CPP from '../Assets/Images/Skills/C++_Logo.svg';
import F360 from '../Assets/Images/Skills/Fusion-360.png';
import SW from '../Assets/Images/Skills/SW-logo.png';

function About() {
  return (
    <section className='about'>
      <Container>
        <Row className="my-5">
            <Col xs={12} md={9} xl={7}>
                <span className='readable-text'>Student at the HU</span>
                <Row><span className='readable-text name'>Nick Klaassen</span></Row>
                <Row><span className='readable-text main-text'>I got into coding quite early on in my life, at the time it was just
                 bits of code to alter websites and games to be more to my liking but after a while i started writing my own programs
                 for myself and my friends.</span></Row>
                <Row><span className='readable-text main-text'>One of my other hobbies has been fixing things and creating things from
                 scraps that were laying around. This hobby has transformed into 3D-printing. I've had a printer since about 2019 and have
                 been using it to repair and modify all sorts of things round my room for a fraction of the cost it would be if i were to
                 buy spare parts.</span></Row>
                <Row><span className='readable-text main-text'>The results of both of these hobbies can be found in my projects page with some explanation
                 about them.</span></Row>
                <Container className='skills-container'>
                  <span className='readable-text skills-text'>My skills: </span>
                  <a className='skills-logos'><img src={CPP} alt= "" title="C++" /></a>
                  <a className='skills-logos'><img src={F360} alt= "" title="Fusion 360"/></a>
                  <a className='skills-logos'><img src={SW} alt= "" title="SolidWorks"/></a>
                </Container>
            </Col>
            <Col xs={12} md={3} xl={5}>
            
            </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
