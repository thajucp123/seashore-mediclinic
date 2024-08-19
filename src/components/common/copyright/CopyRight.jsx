import styles from "./copyright.module.css";
const CopyRight = () => {
    const currentYear = new Date().getFullYear();
    return (
        <section className={styles.copyright}>
            <span className={styles.copyrightText}>
            &copy; Copyright {currentYear} Seashore Mediclinic. All Rights Reserved
            </span>
            <span>|</span>
            <span className={styles.creator}>
                Developed by &nbsp;<a href="https://thaju-cp.vercel.app/" target="_blank" rel="noopener noreferrer">Thaju C P</a> .
            </span>
        </section>
    )
}
export default CopyRight;