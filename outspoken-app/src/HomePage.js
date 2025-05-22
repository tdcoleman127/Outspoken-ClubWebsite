import './css/HomePage.css';
import ContactsContainer from './Contacts';
import CustomHeader from './Header';
import ControlledCarousel from './Carousel';
import FeaturedPoetry from './Featured';
import 'bootstrap/dist/css/bootstrap.min.css';
import clubLogo from './img/outspoken_seal.png';

function HomePage() {
  return (
    <div>
    <head>
    <link rel="icon" href={clubLogo} />
    </head>
      <CustomHeader></CustomHeader>
      <h2>Poetry Work Carousel</h2>
      <ControlledCarousel></ControlledCarousel>

      <h2>Featured Poetry</h2>
      <FeaturedPoetry></FeaturedPoetry>

      <h2>Follow Us Section</h2>
      <ContactsContainer></ContactsContainer>
    </div>
  );
}

export default HomePage;
