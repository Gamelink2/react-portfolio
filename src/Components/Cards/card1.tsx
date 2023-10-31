import React from 'react';
import CustomCardCarousel from '../customCardCarousel';

function Card1() {
  const images = [
    {
      src: require('../../Assets/Images/Projects/Articulated-Toys.jpg'),
      caption: 'Articulated Toys',
      description: 'This small 3D-printed articulated toys were designed to be printed without any supports. No post-processing needed.',
    },
    {
      src: require('../../Assets/Images/Projects/Mushroom-Frog.jpg'),
      caption: 'Mushroom Frog',
      description: 'This small 3D-printed articulated frog was designed to be printed without any supports. No post-processing needed.',
    },
    {
      src: require('../../Assets/Images/Projects/Autumn-Tadling.jpg'),
      caption: 'Autumn Tadling',
      description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    },
    {
      src: require('../../Assets/Images/Projects/Gemstone-Tadling.jpg'),
      caption: 'Gemstone Tadling',
      description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    },
    {
      src: require('../../Assets/Images/Projects/Wicked-Tadling.jpg'),
      caption: 'Wicked Tadling',
      description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    },
    {
      src: require('../../Assets/Images/Projects/Wicked-Tadling-Glow.jpg'),
      caption: 'Wicked Tadling Glow in the dark',
      description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    },
    {
      src: require('../../Assets/Images/Projects/Hollow-Wyvern.jpg'),
      caption: 'Hollow Wyvern',
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
