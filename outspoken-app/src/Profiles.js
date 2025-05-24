import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import instaLogo from './img/Instagram Logo.webp';

function ProfileCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={instaLogo} />
      <Card.Body>
        <Card.Title>First Last - President</Card.Title>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Major: Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Year: Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Fun Fact: Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <hr></hr>
        <Card.Text>
          Bio: Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Email</Card.Link>
        <Card.Link href="#">LinkedIn</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;