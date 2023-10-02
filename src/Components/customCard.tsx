import React from 'react';
import Card from 'react-bootstrap/Card';

interface CustomCardProps {
  title: string;
  text: string;
  image: string;
}

function CustomCard({ title, text, image }: CustomCardProps) {
  return (
    <Card border="primary" style={{ width: '22rem', height:'22rem'}}>
      <Card.Img variant="top" src={image} alt='#image not found' className='card-image'/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
