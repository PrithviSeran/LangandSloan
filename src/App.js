import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceCards from './components/ServiceCards';
import HowItWorks from './components/HowItWorks';
import ContactForm from './components/ContactForm';
import Reviews from './components/Reviews';
import Credentials from './components/Credentials';
import FAQ from './components/FAQ';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ServiceCards />
      <HowItWorks />
      <ContactForm />
      <Reviews />
      <Credentials />
      <FAQ />
      <MapSection />
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
