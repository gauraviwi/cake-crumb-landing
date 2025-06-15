
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import FeaturedCakes from '../components/FeaturedCakes';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedCakes />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
