import Navigation from '../components/Navigation/Navigation';
import Hero from '../components/Hero/Hero';
import Welcome from '../components/Welcome/Welcome';
import Features from '../components/Features/Features';
import Gallery from '../components/Gallery/Gallery';
import Events from '../components/Events/Events';
import Admission from '../components/Admission/Admission';
import Footer from '../components/Footer/Footer';

const home = () => {
  return (
    <section>
      <Navigation />
      <Hero />
      <Welcome />
      <Features />
      <Gallery />
      <Events />
      <Admission />
      <Footer />
    </section>
  );
};

export default home;
