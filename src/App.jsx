import { useEffect, useState, Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/common/header/Header';
import Preloader from './components/loader/Preloader';
import ErrorPage from './components/error/ErrorPage';
import Footer from './components/common/footer/Footer';
import WhatsappButton from './components/whatsapp/WhatsappButton';

const Home = lazy(() => import('./components/home/Home'));
const Appointments = lazy(() => import('./components/appointment/Appointments'));
const AboutUs = lazy(() => import('./components/about/AboutUs'));
const Services = lazy(() => import('./components/services/Services'));
const HealthPackages = lazy(() => import('./components/home/packages/healthPackages'));
const OurDoctor = lazy(() => import('./components/home/doctor/OurDoctor'));
const ContactUs = lazy(() => import('./components/contact/ContactUs'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4600); // timeout for loading animation
    return () => clearTimeout(timer); // cleanup timer
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <Router>
          <Header />
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path='/services' element={<Services />} />
              <Route path="/pricing" element={<HealthPackages />} />
              <Route path="/doctors" element={<OurDoctor />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Suspense>
          <Footer />
          <WhatsappButton/>
        </Router>
      )}
    </>
  );
}

export default App;