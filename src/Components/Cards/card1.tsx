import React from 'react';
import CustomCardCarousel from '../customCardCarousel';

function Card1() {
  const images = [
    {
      src: 'https://picsum.photos/seed/41/286/180',
      caption: 'Slide 1',
      description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    },
    {
      src: 'https://picsum.photos/seed/42/286/180',
      caption: 'Slide 2',
      description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    },
    {
      src: 'https://picsum.photos/seed/43/286/180',
      caption: 'Slide 3',
      description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    },
    {
      src: 'https://picsum.photos/seed/44/360/220',
      caption: 'Slide 4',
      description: 'This is some text.',
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
