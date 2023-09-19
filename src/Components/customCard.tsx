import React from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

interface CustomCardProps {
  title: string;
  text: string;
  image: string;
}

function CustomCard({ title, text, image }: CustomCardProps) {
  return (
    <Card border="primary" style={{ width: '22rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;