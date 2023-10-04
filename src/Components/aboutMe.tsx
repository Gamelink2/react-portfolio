import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function About() {
  return (
    <section className='homepage' id="home">
      <Container>
        <Row className="align-items-center my-5">
            <Col xs={12} md={6} xl={7}>
                <span>Student at the HU</span>
                <h1>Nick Klaassen</h1>
                <p>I got into coding quite early on in my life, at the time it was just changing bits of code to alter websites and games to be more to my liking but after a while i started writing my own programs which you can see on my projects page. </p>
                <Container>
                  <span>My skills:</span>
                  
                </Container>
            </Col>
            <Col xs={12} md={6} xl={5}>
            <p>can put an image here</p>
            </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
