import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function About() {
  return (
    <section className='banner' id="home">
      <Container>
        <Row className="align-items-center my-5">
            <Col xs={12} md={6} xl={7}>
                <span>Welcome to my about page</span>
                <h1>{'Here i will tell a few things about myself'}<span className='wrap'></span></h1>
                <p></p>
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
