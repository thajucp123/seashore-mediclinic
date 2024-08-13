import NewsLetter from "../newsletter/NewsLetter";
import styles from "./footer.module.css";
import logo from "../../../assets/logos/seashore logo white.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <section className= {styles.footer}>
        <NewsLetter/>
        <div className= {styles.footerContainer}>
            <div className={styles.footerAbout}>
                <div className="logo">
                    <Link to="/">
                    <img src={logo} alt="" className="logoimg"/>
                    </Link>
                </div>
                <p>Seashore mediclinic is a hjdbcb aksbfkabfk kasgdkasfk asgdiasgf asgfiuagf asgfiuagf kasgdiuasfg gsfiua </p>
                <div className='social'>
                    <a href="#">
                    <i className={`fab fa-facebook ${styles.ficon}`}></i>
                    </a>
                    <a href="https://www.instagram.com/seashore_mediclinic/" target="_blank" rel="noopener noreferrer">
                    <i className={`fab fa-instagram ${styles.ficon}`}></i>
                    </a>
                    <a href="#">
                    <i className={`fab fa-linkedin ${styles.ficon}`}></i>
                    </a>
                </div>
            </div>
            <div className={styles.footerExplore}>
                <h3>AExplore</h3>
            </div>
            <div className={styles.footerQuickLinks}>
                <h3>Quick Links</h3>
            </div>
            <div className={styles.footerContact}>
                <h3>Have Questions?</h3>
            </div>
        </div>
        </section>
    )
}

export default Footer;