import React from 'react';
import CustomCardCarousel from '../customCardCarousel';

function Card1() {
  const images = [
    {
      src: 'https://picsum.photos/seed/41/286/180',
      caption: 'Slide 1',
      description: 'Description for Slide 1',
    },
    {
      src: 'https://picsum.photos/seed/42/286/180',
      caption: 'Slide 2',
      description: 'Description for Slide 2',
    },
    {
      src: 'https://picsum.photos/seed/43/286/180',
      caption: 'Slide 3',
      description: 'Description for Slide 3',
    },
    // Add more images as needed
  ];

  return (
    <div>
      <CustomCardCarousel
        title="Card title carousel"
        text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        images={images}
      />
    </div>
  );
}

export default Card1;
