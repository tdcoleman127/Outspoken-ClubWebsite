import './css/Header.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import clubLogo from './img/outspoken_seal.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomHeader(props) {
  return (
    <Navbar className="headerBack px-3 py-3" sticky="top" expand="lg">
      <Container>
        <img src={clubLogo} className="headerImg" alt="Club Logo" />
        <Navbar.Brand href="/" className="headerLink">{props.pageTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="headerLink">Home</Nav.Link>
            <Nav.Link href="/about" className="headerLink">About</Nav.Link>
            <NavDropdown title="Publications" id="basic-nav-dropdown" className="headerDropdown">
              <NavDropdown.Item href="#action/3.1">Spring 2025</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Fall 2025</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Spring 2026</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Pending Work</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomHeader;