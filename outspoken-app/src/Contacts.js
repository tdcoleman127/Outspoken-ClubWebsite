import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/Contacts.css';
import instaIcon from './img/Instagram Logo.webp';
import GroupMeIcon from './img/GroupMe Logo.png';
import DiscordIcon from './img/Discord Logo.png';
import emailIcon from './img/emailIcon.png';

function ContactsContainer() {
  return (
    <Container>
      <Row xs={1} md={2}>
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
        <h2>outspokenPoetryClub@uic.edu</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactsContainer;