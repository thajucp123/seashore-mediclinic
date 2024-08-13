import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './healthpackages.module.css';

const packages = [
    {
      name: "Routine Checkup",
      details: [
        "Complete Blood Count (CBC) Hb, Total Count, DC, ESR, Platelet, RBC, PCV, MCV, MCH, MCHC",
        "Blood Sugar (RBS)",
        "Urine Routine Examination (URE), Sugar, Albumin, Microscopy",
      ],
      price: "₹199/-",
    },
    {
      name: "Basic Checkup",
      details: [
        "CBC, ESR",
        "RBS, S.Cholesterol, Triglycerides, S.Creatine, S.Uric Acid, SGPT, URE",
        "ECG, BP, BMI",
        "With Doctor Consultation"
      ],
      price: "₹499/-",
    },
    {
      name: "Full Checkup",
      details: [
        "CBC, ESR",
        "FBS, PPBS, FLP, RFT, LFT, TSH URE",
        "ECG, BP, BMI",
        "With Doctor Consultation"
      ],
      price: "₹999/-",
    }
  ];

const HealthPackages = () => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); //to prevent react router default behaviour of preserving previous scroll position
  }, [location]);

  return (
    <section className={styles.healthCheckupSection}>
        <h3>OUR PACKAGES</h3>
      <h2 className={styles.title}>Our Health Checkup Packages</h2>
      <div className={styles.separator}></div>
      <div className={styles.packagesGrid}>
        {packages.map((pkg, index) => (
          <motion.div key={index} className={styles.packageCard}
          initial={{ y: '35%' }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5 }} 
          >
            <h3 className={styles.name}>{pkg.name}</h3>
            <ul className={styles.details}>
              {pkg.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
            <div className='flexSB'>
            <div className={styles.price}>{pkg.price}</div>
            <Link to="/appointments">
            <button className={styles.bookButton}>BOOK NOW !</button>
            </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HealthPackages;
