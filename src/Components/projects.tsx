import React from 'react';
import Container from 'react-bootstrap/Container';
import '../App.css';
import Card1 from './Cards/card1';
import CustomCard from './customCard';
import Footer from './footer'
import articulatedFrog from "../Assets/Images/articulated-frog.jpg";
import sentinelOrb from "../Assets/Images/sentinel-orb.jpg";

function Projects() {
  return (
    <div>
      <Container className="project-header">
        <h1> Here is a collection of my current and previous projects:</h1>
      </Container>
        <Container className="project-cards">
          
          <Card1 />

          <CustomCard
          title="Articulated frog"
          text="This small 3D-printed articulated frog was designed to be printed without any supports. No post-processing needed."
          image={articulatedFrog}/>

          <CustomCard
          title="Sentinel orb"
          text='A loot orb from the game "league of legends". Designed, printed and painted by myself.'
          image={sentinelOrb}/>

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
