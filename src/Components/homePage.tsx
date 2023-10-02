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
                    <span ref={targetRef} className='tagline'>This is Cercope</span>
                    <span className='wrap'>A company focused on making software and 3D-printing</span>
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
