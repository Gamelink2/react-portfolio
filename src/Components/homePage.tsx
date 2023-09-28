import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import icon from "../Assets/Images/home-icon.svg";
import Spline from '@splinetool/react-spline';

const Home = () => {
    return (
        <section className='homepage' id="home">
        <Container>
            <Row >
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to my Portfolio</span>
                    <h2>{'What do you want to see:'}<span className='wrap'></span></h2>
                    <Row>
                    </Row>
                </Col>
                <Col xs={12} md={6} xl={5} className="align-items-center">
                    <img src={icon} height={500} alt="Cool dragon" />
                </Col>
            </Row>
        </Container>

    </section>
    );
};
 
export default Home;
