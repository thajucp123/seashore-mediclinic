import { Link } from "react-router-dom";
import styles from "./hero.module.css";
import { motion } from "framer-motion";
const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heroContent}>
            <h3 className={styles.heroSubTitle}>
                HERE AT SEASHORE MEDICLINIC WE OFFER
            </h3>
            <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeIn'}}
            >
            <h1 className={styles.heroTitle}>
            WORLD CLASS <br/>MEDICAL TREATMENT
            </h1>
            </motion.div>
            <div className={styles.heroSeperator} />
            <p className={styles.heroText}>
            Your health, our priority. Trusted care, advanced diagnostics, and expert teams under one roof. 
            Exceptional healthcare that puts your well-being  above all else.    
          </p>
          <div className={styles.heroButton}>
          <Link to="/about">
          <span>
          READ MORE &nbsp; &nbsp;<i className="fa-solid fa-chevron-right"></i>
            </span>
          </Link>
          </div>
            </div>
        </div>
    )
}

export default Hero;