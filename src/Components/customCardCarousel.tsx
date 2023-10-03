import React from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

interface Image {
  src: string;
  caption: string;
  description: string;
}

interface CustomCardProps {
  title: string;
  text: string;
  images: Image[];
}

function CustomCardCarousel({ title, text, images }: CustomCardProps) {
  return (
    <Card border="primary" style={{ width: '22rem' }} >
      <Carousel interval={null} >
        {images.map((image, index) => (
          <Carousel.Item key={index} >
            <img src={image.src} alt={`Slide ${index + 1}`} className='card-image' />
            <Carousel.Caption>
              <h3>{image.caption}</h3>
              <p>{image.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CustomCardCarousel;