
import styles from "./aboutCard.module.css";
const AboutCard = () => {
    return (
        <div className={styles.content}>
          <h3>A FEW WORDS</h3>
        <h2 className={styles.title}>About Our Clinic</h2>
        <div className={styles.separator}></div>
        <p className={styles.description}>
        At Seashore Mediclinic, located in the heart of Ayanikkad on Arabic College road, we are dedicated to providing comprehensive medical care to our community. 
        Our state-of-the-art facility offers a wide range of services, including consultations with experienced doctors, laboratory tests, pharmacy services, ECG, nebulisation, and more. 
        Our team of healthcare professionals is committed to delivering exceptional patient care with compassion and expertise.
        </p>
        <p className={styles.description}>
        We strive to create a welcoming and comfortable environment for our patients, ensuring they receive personalized attention and care. 
        Our mission is to provide accessible, high-quality medical services to individuals and families in our community. 
        With a focus on preventive care and early intervention, we aim to improve health outcomes and enhance the well-being of those we serve. 
        At Seashore Mediclinic, we are dedicated to making a positive impact on the health and lives of our patients.
        </p>
        </div>
    )
}

export default AboutCard;