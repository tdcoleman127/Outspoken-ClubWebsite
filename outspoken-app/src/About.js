import './css/HomePage.css';
import CustomHeader from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import clubLogo from './img/outspoken_seal.png';
import ProfileCard from './Profiles';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutPage() {
  return (
    <div id="pageBody">
      <head>
        <link rel="icon" href={clubLogo} />
      </head>
      <CustomHeader pageTitle="Meet the Team!"></CustomHeader>
      <br></br>
      <h2 className='sectionTitle'>Our Club Officers and Faculty</h2>
      <br></br>
      <Container>
        <Row lg={4} md={2} sm={1} className="justify-content-center g-4">
          {/* Try to map Profile Card data via an array
          to display */}
          <Col xs={12} sm={12} md={6} lg={3}
      className="d-flex justify-content-center">
            <ProfileCard></ProfileCard>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3}
      className="d-flex justify-content-center">
            <ProfileCard></ProfileCard>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3}
      className="d-flex justify-content-center">
            <ProfileCard></ProfileCard>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3}
      className="d-flex justify-content-center">
            <ProfileCard></ProfileCard>
          </Col>
        </Row>
        <br></br>
        <Row lg={4} md={2} sm={1} className="justify-content-center g-4">
          <Col xs={12} sm={12} md={6} lg={3}
      className="d-flex justify-content-center">
            <ProfileCard></ProfileCard>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3}
      className="d-flex justify-content-center">
            <ProfileCard></ProfileCard>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3}
      className="d-flex justify-content-center">
            <ProfileCard></ProfileCard>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3}
      className="d-flex justify-content-center">
            <ProfileCard></ProfileCard>
          </Col>
        </Row>
      </Container>
      <br></br>
    </div>
  );
}

export default AboutPage;