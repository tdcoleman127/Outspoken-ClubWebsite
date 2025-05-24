import './css/HomePage.css';
import ContactsContainer from './Contacts';
import CustomHeader from './Header';
import ControlledCarousel from './Carousel';
import FeaturedPoetry from './Featured';
import 'bootstrap/dist/css/bootstrap.min.css';
import clubLogo from './img/outspoken_seal.png';
import AboutPage from './About';
import { Routes, Route } from 'react-router-dom';

function HomePage() {
  return (
    <div id="pageBody">
    <head>
    <link rel="icon" href={clubLogo} />
    </head>
      <CustomHeader pageTitle="Outspoken Poetry Club"></CustomHeader>
      <br></br>
      <h2 className='sectionTitle'>Check out our latest club news!</h2>
      <br></br>
      <ControlledCarousel></ControlledCarousel>
      <br></br>
      <br></br>
      <FeaturedPoetry></FeaturedPoetry>

      <br></br>
      <h2 className='sectionTitle'>Feeling wordy? Contact us!</h2>
      <br></br>
      <ContactsContainer></ContactsContainer>
    </div>
  );
}

export default HomePage;
