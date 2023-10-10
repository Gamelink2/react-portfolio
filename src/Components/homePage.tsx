import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import textAnimation from './textAnimation';

const Home = () => {
    const targetRef = textAnimation();
    return (
        <section className='homepage' id="home">
        <Container>
            <Row >
                <Col className='intro'>
                    <span className='tagline'>Hello, this is <span ref={targetRef} className="name">Cercope</span></span>
                    <div className='text'>
                    <Row>
                    <span className='wrap readable-text '>A 3D-printing and software company based in the Netherlands.</span>
                    </Row>
                    <Row>
                        <span className='readable-text'>If you would like to know more about me or my work then use the links
                         at the top.</span>
                    </Row>
                    </div>
                </Col>
                
            </Row>
        </Container>
    </section>
    );
};
 
export default Home;