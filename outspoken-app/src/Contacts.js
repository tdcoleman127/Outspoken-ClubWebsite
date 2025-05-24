import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/Contacts.css';
import instaIcon from './img/Instagram Logo.webp';
import GroupMeIcon from './img/GroupMe Logo.png';
import DiscordIcon from './img/Discord Logo.png';
import emailIcon from './img/emailIcon.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactsContainer() {
  return (
    // Remember to link club contacts!
    <Container>
      <Row xs={1} md={4} className="justify-content-center">
        <Col>
        <img src={instaIcon} className="contactItem" alt="img1"/>
        <h2>@outspoken-uic</h2>
        </Col>
        <Col>
        <img src={GroupMeIcon} className="contactItem" alt="img1"/>
        <h2>Outspoken GroupMe</h2>
        </Col>
        <Col>
        <img src={DiscordIcon} className="contactItem" alt="img1"/>
        <h2>Outspoken Discord Server</h2>
        </Col>
        <Col>
        <img src={emailIcon} className="contactItem" alt="img1"/>
        <h2>outspokenuic@gmail.com</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactsContainer;