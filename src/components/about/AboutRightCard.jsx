import { motion } from "framer-motion";
import styles from "./aboutrightcard.module.css";
import logo from "../../assets/logos/seashore logo ICON.png";
const AboutRightCard = () => {
    return(

        <motion.div className={styles.aboutRightCard}
            initial={{ y: '60%' }} 
            whileInView={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5 }} 
        >
        <div className={styles.infoBox}>
        <div className={styles.infoBlockTop}>
        <p className={styles.subtitle}> WE ARE ALWAYS</p>
          <h3 className={styles.infoTitle}>GLAD TO HELP</h3>
          <div className={styles.separator}></div>
          <p className={styles.infoDescription}>
          {`"We offer expert medical services with experienced doctors and advanced lab facilities."`}
          </p>
          <p className={styles.subtitle}> SEASHORE MEDICLINIC</p>
          <img src={logo} alt="logo" className={styles.logo} />
        </div>
        
      </div>
        </motion.div>
    )
}

export default AboutRightCard ;