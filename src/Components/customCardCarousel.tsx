import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

interface Image {
  src: any;
  caption: string;
  description: string;
}

interface CustomCardProps {
  images: Image[];
}

function CustomCardCarousel({ images }: CustomCardProps) {
  const [index, setIndex] = useState(0);
  const image = images[index];
  
  return (
    <Card className='card-outline'>
      <Carousel interval={null} onSelect={(selectedIndex) => setIndex(selectedIndex)}>
        {images.map((image) => (
          <Carousel.Item>
            <img src={image.src} alt={`Slide ${index + 1}`} className='card-image' />
          </Carousel.Item>
        ))}
      </Carousel>
      <Card.Body>
        <Card.Title>{image.caption}</Card.Title>
        <Card.Text>{image.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CustomCardCarousel;