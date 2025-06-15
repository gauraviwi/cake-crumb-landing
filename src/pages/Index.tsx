
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedCakes from '../components/FeaturedCakes';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <FeaturedCakes />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
