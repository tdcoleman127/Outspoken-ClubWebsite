import './css/Header.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import clubLogo from './img/outspoken_seal.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomHeader() {
  return (
    <Navbar className="bg-body-tertiary" sticky="top" expand="lg">
      <Container>
        {/* <img src={clubLogo} className="headerImg" alt="Club Logo"/> */}
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