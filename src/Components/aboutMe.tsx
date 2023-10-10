import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function About() {
  return (
    <section className='about' id="home">
      <Container>
        <Row className="align-items-center my-5">
            <Col xs={12} md={6} xl={7}>
                <span className='readable-text'>Student at the HU</span>
                <Row><span className='readable-text name'>Nick Klaassen</span></Row>
                <Row><span className='readable-text main-text'>I got into coding quite early on in my life, at the time it was just
                 bits of code to alter websites and games to be more to my liking but after a while i started writing my own programs
                 for myself and my friends.</span></Row>
                <Row><span className='readable-text main-text'>One of my other hobbies has been fixing things and creating things
                 scraps that were laying around. This hobby has transformed into 3D-printing. I've had a printer since 2019 and have
                 been using it to repair and modify all sorts of things round my room for a fraction of the cost it would be if i were to
                 buy spare parts and such.</span></Row>
                <Row><span className='readable-text main-text'>The results of both of these hobbies can be found in my projects page with some explanation
                 about them</span></Row>
                <Container className='skills-container'>
                  <span className='readable-text'>My skills: f360, cpp, solidworks, </span>
                  
                </Container>
            </Col>
            <Col xs={12} md={6} xl={5}>
            
            </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
