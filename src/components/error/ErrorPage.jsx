import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./error.module.css";
const ErrorPage = () => {

  const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0); //to prevent react router default behaviour of preserving previous scroll position
    }, [location]);

    return (

        <section className={styles.errorWrapper}
        >
        <motion.div className={styles.errorContent}
        initial={{ y: '40%' }} 
        whileInView={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5 }} 
        >
          <h1 className={styles.errorCode}>404</h1>
          <h2 className={styles.errorMessage}>Page Not Found!</h2>
          <p className={styles.errorText}>
          We&apos;re sorry, but the page you&apos;re looking for doesn&apos;t exist. 
          It&apos;s possible that the page has been moved or deleted, or that the URL is incorrect. 
          Try searching for the page or checking the URL again.
          </p>
          <div className={styles.errorActions}>
            <Link to="/" className={styles.backButton}>Back To Home</Link>
            <Link to="/contact" className={styles.contactButton}>Contact Us</Link>
          </div>
        </motion.div>
      </section>
    );
};

export default ErrorPage;