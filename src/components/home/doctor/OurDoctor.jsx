import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from './ourdoctor.module.css';
import image from "../../../assets/images/doctor.jpg"
const OurDoctor = () => {

  const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0); //to prevent react router default behaviour of preserving previous scroll position
    }, [location]);

  return (
    <section className={styles.doctors}>
      <h3>Trusted Medical Expertise</h3>
      <h2 className={styles.mainTitle}>Our Doctors</h2>
      <div className={styles.separator}></div>
    <div className={styles.ourDoctor}>
      <div className={`${styles.doctorCard}`}>
        <div>
        <img src={image} alt="Dr. Shamnas" className={styles.doctorImage} />
        </div>
        <div className={styles.doctorInfo}>
          <h2 className={styles.doctorName}>Dr. Mohammed Shamnas</h2>
          <p className={styles.doctorSpecialty}>MBBS - General Practitioner</p>
          <p className={styles.doctorDescription}>
          Dr. Mohammed Shamnas is a dedicated and compassionate General Practitioner with a strong foundation in primary care. 
          With a growing experience in treating various medical conditions, Dr. Shamnas is committed to delivering personalized and high-quality care to his patients. 
          He is passionate about preventive medicine and empowering individuals to take charge of their health.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default OurDoctor;
