import { motion } from "framer-motion";
import styles from "./appointment.module.css";
const AppointmentCard = () => {
    return(

        <motion.div className={styles.AppointmentCard}
            initial={{ y: '60%' }} 
            whileInView={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5 }} 
        >
        <div className={styles.infoBox}>
        <div className={styles.infoBlockTop}>
          <h3 className={styles.infoTitle}>Book Appointment</h3>
          <p className={styles.phone}><i className="fa-solid fa-phone"></i> +91 9567-622-500</p>
          <p className={styles.infoDescription}>
          {`"We offer expert medical services with experienced doctors and advanced lab facilities."`}
          </p>
        </div>
        <div className={styles.infoBlockBottom}>
          <h3 className={`${styles.infoTitle} ${styles.infoTitleAlt}`}>Opening Hours</h3>
          <ul className={styles.hoursList}>
            <li className={`${styles.borderBottom} flexSB`}><span className={styles.day}>Mon - Sat:</span> <span className={styles.time}>9.00 am – 10.00 pm</span></li>
            <li className={`${styles.borderBottom} flexSB`}><span className={styles.day}>Sunday:</span> <span className={styles.time}>10.00 am – 10.00 pm</span></li>
            <li className="flexSB"><span className={styles.day}>Doctor Appointments:</span> <span className={styles.time}>3.30 pm – 10.00 pm</span></li>
          </ul>
        </div>
      </div>
        </motion.div>
    )
}

export default AppointmentCard;