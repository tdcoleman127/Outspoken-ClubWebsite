import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function FeaturedPoetry() {
  return (
    <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
        <Col xs={12} md={8}>
          xs=12 md=8
        </Col>
      </Row>
    </Container>
  );
}

export default FeaturedPoetry;