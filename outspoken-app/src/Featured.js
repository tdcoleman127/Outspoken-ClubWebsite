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
          <p>xs=6 md=4</p>
          <div className="featureBox1">
            Text
          </div>
        </Col>
        <Col xs={12} md={8}>
          <p>xs=12 md=8</p>
          <div className="featureBox2">
            Text
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default FeaturedPoetry;