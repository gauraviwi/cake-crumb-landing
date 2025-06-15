
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedCakes from '../components/FeaturedCakes';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <FeaturedCakes />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
