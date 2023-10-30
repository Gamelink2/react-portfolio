import React from 'react';
import CustomCardCarousel from '../customCardCarousel';

function Card1() {
  const images = [
    {
      src: 'https://picsum.photos/seed/65/286/180',
      caption: 'Slide 1',
      description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    },
    {
      src: 'https://picsum.photos/seed/82/286/180',
      caption: 'Slide 2',
      description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    },
    {
      src: 'https://picsum.photos/seed/81/286/180',
      caption: 'Slide 3',
      description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    },
    // Add more images as needed
  ];

  return (
    <div>
      <CustomCardCarousel
        images={images}
      />
    </div>
  );
}

export default Card1;
