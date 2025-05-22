import './css/Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import clubLogo from './img/outspoken_seal.png'

function CustomHeader() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img src={clubLogo} className="headerImg" alt="Club Logo"/>
        <Navbar.Brand href="#home">Outspoken Poetry Club</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Publications" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">2023</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                2024
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">2025</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Pending Work
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomHeader;

/*
function CustomHeader() {
  return (
    <header>
    <Container className="headerStuff">
      <Row>
        <Col>
            <img src={menuIcon} className="headerImg" alt="Hamburger Menu"/>
        </Col>
        <Col>
            <h3>Outspoken Poetry Club</h3>
            <h4><italic>"The wordy ones."</italic></h4>
        </Col>
        <Col>
            <img src={clubLogo} className="headerImg" alt="Club Logo"/>
        </Col>
      </Row>
    </Container>
    </header>
  );
}
*/