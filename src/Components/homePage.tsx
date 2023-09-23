import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import icon from "../Assets/Images/home-icon.svg";
 
const Home = () => {
    return (
        <section className='banner' id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to my Portfolio</span>
                    <h1>{'Hi im a web developer'}<span className='wrap'></span></h1>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={icon} height={500} alt="Header img" />
                </Col>
            </Row>
        </Container>

    </section>
    );
};
 
export default Home;
