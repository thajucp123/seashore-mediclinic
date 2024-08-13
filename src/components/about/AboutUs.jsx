import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutCard from "./AboutCard";
import AboutRightCard from "./AboutRightCard";
import styles from "./about.module.css";
import ChooseUs from "./choose/ChooseUs";
import Testimonials from "./testimonials/Testimonials";
import Faq from "./FAQ/FAQ";

const AboutUs = () => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); //to prevent react router default behaviour of preserving previous scroll position
  }, [location]);

    return(
      <section className={styles.about}>
        <div className={styles.aboutSection}>
          <div className={styles.aboutLeft}>
          <AboutCard/>
            </div>
          <AboutRightCard/>
          
        </div>
        <div>
        <ChooseUs/>
        <Testimonials/>
        <Faq/>
        </div>
    </section>
    )
}

export default AboutUs;