import React from 'react';
import { Container } from 'react-bootstrap';

function CenteredImageFlexbox() {
  return (
    <Container className="my-5">
      <div 
        className="d-flex justify-content-center align-items-center" 
        style={{ width: '100%', height: '200px', border: '2px dashed #ccc' }} // Added for visual demonstration
      >
        <img 
          src="https://picsum.photos/800/400?random=${Math.random()}" // Replace with your image path
          alt="Centered Image" 
          style={{ backgroundColor: 'black', scale: 2, textAlign: 'center', marginBottom: -50}}
          className="img-fluid" // Ensures image scales down within its parent
        />
      </div>
    </Container>
  );
}

export default CenteredImageFlexbox;