import React from 'react';
import Container from 'react-bootstrap/Container';
import '../App.css';
import Card1 from './Cards/card1';
import Card2 from './Cards/card2';
import CustomCard from './customCard';
import articulatedFrog from "../Assets/Images/Projects/articulated-frog-stamped.jpg";
import sentinelOrb from "../Assets/Images/Projects/sentinel-orb.jpg";
import website from "../Assets/Images/Projects/Website.png";

function Projects() {
  return (
    <div className='projects-bg'>
      <Container className="project-header">
        <h1> Here is a collection of my current and previous projects:</h1>
      </Container>
        <Container className="project-cards">

          <Card1 />
          
          <Card2 />

          <CustomCard
          title="Articulated frog"
          text="This small 3D-printed articulated frog was designed to be printed without any supports. No post-processing needed."
          image={articulatedFrog}/>

          <CustomCard
          title="Sentinel orb"
          text='A loot orb from the game "league of legends". Designed, printed and painted by myself.'
          image={sentinelOrb}/>

          <CustomCard
          title="This website"
          text="The website that you are looking at is also made by myself. It's made with React-Bootstrap and Typescript."
          image={website}/>

          <CustomCard
          title="Card title normal"
          text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          image="https://picsum.photos/seed/666/286/180"/>

          <CustomCard
          title="Card title normal"
          text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          image="https://picsum.photos/seed/420/286/180"/>          
        
    </Container>
    </div>
  );
}

export default Projects;
export {}
