import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import '../App.css';

function Projects() {
  return (
    <Container className="project-cards">
   
          <Card border="primary" style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://picsum.photos/seed/42/286/180" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
      
          <Card border="danger" style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://picsum.photos/seed/69/286/180" />
            <Card.Body>
              <Card.Title>Card title2</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
       
          <Card border="success" style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://picsum.photos/seed/11/286/180" />
            <Card.Body>
              <Card.Title>Card title3</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://picsum.photos/seed/420/286/180" />
            <Card.Body>
              <Card.Title>Card title4</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://picsum.photos/seed/666/286/180" />
            <Card.Body>
              <Card.Title>Card title5</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        
    </Container>
  );
}

export default Projects;
export {}
