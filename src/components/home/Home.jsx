import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HAbout from "./HAbout";
import Hero from "./Hero/Hero";
import HServices from "../services/HServices";
import HealthPackages from "./packages/healthPackages";
import OurDoctor from "./doctor/OurDoctor";
import Testimonials from "../about/testimonials/Testimonials";
import Faq from "../about/FAQ/FAQ";

const Home = () => {

    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0); //to prevent react router default behaviour of preserving previous scroll position
    }, [location]);

    return(
        <div className="home">
            <Hero/>
            <HAbout/>
            <HServices/>
            <OurDoctor/>
            <HealthPackages/>
            <Testimonials/>
            <Faq/>
         </div>
    )
}

export default Home;