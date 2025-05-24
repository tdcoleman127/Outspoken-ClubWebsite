import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function FeaturedPoetry() {
  const featuredItems = [
    {
      id: 1,
      image: 'https://picsum.photos/800/400?random=${Math.random()}',
      title: 'Poetry Title',
      description: 'Discover the incredible features of Product A. It will revolutionize your daily routine!',
      link: '#product-a-details'
    }
  ];

  return (
    <section className="my-5 py-5 bg-light" id="featured-section"> {/* Added bg-light for a subtle background */}
      <Container>
        <h2 className="text-center mb-5">Our Featured Poetry</h2> {/* Centered heading with margin-bottom */}

        <Row className="g-4 justify-content-center"> {/* g-4 for gutter spacing, justify-content-center for centering cards */}
          {featuredItems.map(item => (
            <Col key={item.id} xs={12} md={6} lg={4} className="d-flex"> {/* d-flex makes columns equal height */}
              <Card className="shadow-sm w-100"> {/* shadow-sm for subtle shadow, w-100 makes card take full column width */}
                <Card.Img variant="top" src={item.image} alt={item.title} />
                <Card.Body className="d-flex flex-column"> {/* flex-column to stack body content, push button to bottom */}
                  <Card.Title className="text-center">{item.title}</Card.Title>

                  <Card.Text className="text-muted text-center flex-grow-1"> {/* flex-grow-1 to take available space */}
                    <h5>By FirstName LastName</h5>
                    <p>
                      The sea is wide,<br></br>
                      And deep and vast,<br></br>
                      A hidden world,<br></br>
                      To hold forever fast.
                    </p>
                  </Card.Text>
                  <div className="text-center mt-auto"> {/* mt-auto pushes the button to the bottom */}
                    <Button variant="primary" href={item.link}>Learn More</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default FeaturedPoetry;