import React from 'react';
import Container from 'react-bootstrap/Container';
import '../App.css';
import Card1 from './Cards/card1';
import CustomCard from './customCard';
import Footer from '../Components/footer'

function Projects() {
  return (
    <div>
      <Container className="project-header">
        <h1> Here is a collection of my current and previous projects:</h1>
      </Container>
        <Container className="project-cards">
          
          <Card1 />

          <CustomCard
          title="Card title normal"
          text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          image="https://picsum.photos/seed/05062002/286/180"/>

          <CustomCard
          title="Card title normal"
          text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          image="https://picsum.photos/seed/15022005/286/180"/>

          <CustomCard
          title="Card title normal"
          text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          image="https://picsum.photos/seed/69/286/180"/>

          <CustomCard
          title="Card title normal"
          text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          image="https://picsum.photos/seed/666/286/180"/>

          <CustomCard
          title="Card title normal"
          text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          image="https://picsum.photos/seed/420/286/180"/>          
        
    </Container>
    <Footer />
    </div>
  );
}

export default Projects;
export {}
