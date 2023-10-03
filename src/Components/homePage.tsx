import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import icon from "../Assets/Images/home-icon.svg";
import textAnimation from './textAnimation';

const Home = () => {
    const targetRef = textAnimation();
    return (
        <section className='homepage' id="home">
        <Container>
            <Row >
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Hello, this is <span ref={targetRef}>Cercope</span></span>
                    <Row>
                    <span className='wrap'>A 3D-printing and software company based in the Netherlands</span>
                    </Row>
                    <Row>
                        <span>If you would like to know more about me or my work then click below or use the links at the top</span>
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
