import './css/HomePage.css';
import ContactsContainer from './Contacts';
import CustomHeader from './Header';
import ControlledCarousel from './Carousel';
import FeaturedPoetry from './Featured';
import 'bootstrap/dist/css/bootstrap.min.css';


function HomePage() {
  return (
    <div>
      <CustomHeader></CustomHeader>

      <h2>Poetry Work Carousel</h2>
      <ControlledCarousel></ControlledCarousel>
      <h2>Featured Poetry</h2>
      <p>Content Content Content</p>
      <h2>Follow Us Section</h2>
      <p>Content Content Content</p>


      {/* <PoetryCarousel></PoetryCarousel> */}
      <FeaturedPoetry></FeaturedPoetry>
      <ContactsContainer></ContactsContainer>
    </div>
  );
}

export default HomePage;
