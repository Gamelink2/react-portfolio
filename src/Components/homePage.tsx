import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from "../Assets/Images/header-img.svg"
import { ArrowRightCircle } from 'react-bootstrap-icons';;
 
const Home = () => {
    return (
        <section className='banner' id="home">
        <Container>
            <Row className="align-items-center my-5">
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to my Portfolio</span>
                    <h1>{'Hi im a web developer'}<span className='wrap'></span></h1>
                    <p>Meow</p>
                    <button onClick={() => console.log('connect')}>Lets connect <ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={Header} height={500} alt="Header img" />
                </Col>
            </Row>
        </Container>

    </section>
    );
};
 
export default Home;
