import { useEffect, useState } from 'react';
import './App.css'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Header from './components/common/header/Header';
import Preloader from './components/loader/Preloader';
import ErrorPage from './components/error/ErrorPage';
import Home from './components/home/Home';
import Appointments from './components/appointment/Appointments';
import AboutUs from './components/about/AboutUs';
import HealthPackages from './components/home/packages/healthPackages';
import OurDoctor from './components/home/doctor/OurDoctor';
import Footer from './components/common/footer/Footer';

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
    {isLoading ?
      (<Preloader/>) : (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/appointments" element={<Appointments/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/pricing" element={<HealthPackages/>}/>
        <Route path="/doctors" element={<OurDoctor/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </Router>
      )
    }
    </>
  )

}

export default App
