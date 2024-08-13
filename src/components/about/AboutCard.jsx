
import styles from "./aboutCard.module.css";
const AboutCard = () => {
    return (
        <div className={styles.content}>
          <h3>A FEW WORDS</h3>
        <h2 className={styles.title}>About Our Clinic</h2>
        <div className={styles.separator}></div>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p className={styles.description}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque.
        </p>
        </div>
    )
}

export default AboutCard;