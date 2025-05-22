// components/ExampleCarouselImage.js
import React from 'react';

const ExampleCarouselImage = ({ text }) => {
  // You could vary the image source to get different images
  const imageUrl = `https://picsum.photos/800/400?random=${Math.random()}`; // Random image for variety

  return (
    <div
      style={{
        width: '100%',
        height: '400px', // Or whatever height makes sense for your carousel
        backgroundColor: '#f0f0f0', // A fallback background color
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#333',
        fontSize: '2em',
        position: 'relative',
        overflow: 'hidden' // Important for image scaling
      }}
    >
      <img
        src={imageUrl}
        alt={text}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover' // Ensures the image covers the container
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px'
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default ExampleCarouselImage;