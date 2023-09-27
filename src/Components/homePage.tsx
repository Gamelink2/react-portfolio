import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import icon from "../Assets/Images/home-icon.svg";
 
const Home = () => {
    return (
        <section className='banner' id="home">
        <Container>
            <Row >
                <Col xs={12} md={6} xl={7}>
                    
                    <span className='tagline'>Welcome to my Portfolio</span>
                    <h2>{'What do you want to see:'}<span className='wrap'></span></h2>
                   
                    <Row>
                        <Col>
                        <Container>
                        <h2>test1</h2>
                        </Container>
                        </Col>
                        <Col>
                        <h2>test2</h2>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={6} xl={5} className="align-items-center">
                    <img src={icon} height={500} alt="Header img" />
                </Col>
            </Row>
        </Container>

    </section>
    );
};
 
export default Home;
