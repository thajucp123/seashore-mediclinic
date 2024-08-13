import { Link } from "react-router-dom";
import AboutCard from "../about/AboutCard";
import AppointmentCard from "../appointment/AppointmentCard";
import styles from "./habout.module.css";

const HAbout = () => {
  return (
    <section className={styles.aboutSection}>
        <div className={styles.aboutLeft}>
      <AboutCard/>
        <Link to="/about" className={styles.readMoreButton}>
          READ MORE &nbsp; <i className="fa-solid fa-chevron-right"></i>
        </Link>
        </div>
      <AppointmentCard/>
    </section>
  );
};

export default HAbout;
