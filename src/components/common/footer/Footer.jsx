import NewsLetter from "../newsletter/NewsLetter";
import styles from "./footer.module.css";
import logo from "../../../assets/logos/seashore logo white.png";
import { Link } from "react-router-dom";
import CopyRight from "../copyright/CopyRight";

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
                <p>Seashore Mediclinic - Your trusted healthcare partner in Ayanikkad, providing comprehensive medical services with care and compassion.</p>
                <div className='social'>
                    <a>
                    <i className={`fab fa-facebook ${styles.ficon}`}></i>
                    </a>
                    <a href="https://www.instagram.com/seashore_mediclinic/" target="_blank" rel="noopener noreferrer">
                    <i className={`fab fa-instagram ${styles.ficon}`}></i>
                    </a>
                    <a>
                    <i className={`fab fa-linkedin ${styles.ficon}`}></i>
                    </a>
                </div>
            </div>
            <div className={styles.footerExplore}>
                <h3>Explore</h3>
                <ul className={styles.linkUl}>
                    <Link to="/">
                    <li>
                    <i className="fa-solid fa-arrow-right"></i>
                        Home
                    </li>
                    </Link>
                    <Link to="/about">
                    <li>
                    <i className="fa-solid fa-arrow-right"></i>
                        About
                    </li>
                    </Link>
                    <Link to="/services">
                    <li>
                    <i className="fa-solid fa-arrow-right"></i>
                        Services
                    </li>
                    </Link>
                    <Link to="/pricing">
                    <li>
                    <i className="fa-solid fa-arrow-right"></i>
                        Packages
                    </li>
                    </Link>
                </ul>
            </div>
            <div className={styles.footerQuickLinks}>
                <h3>Quick Links</h3>
                <ul className={styles.linkUl}>
                    <Link to="/doctors">
                    <li>
                    <i className="fa-solid fa-arrow-right"></i>
                        Doctors
                    </li>
                    </Link>
                    <Link to="/gallery">
                    <li>
                    <i className="fa-solid fa-arrow-right"></i>
                        Gallery
                    </li>
                    </Link>
                    <Link to="/about#testimonial">
                    <li>
                    <i className="fa-solid fa-arrow-right"></i>
                        Testimonial
                    </li>
                    </Link>
                    <Link to="/about#faq">
                    <li>
                    <i className="fa-solid fa-arrow-right"></i>
                        FAQ
                    </li>
                    </Link>
                </ul>
            </div>
            <div className={styles.footerContact}>
                <h3>Have Questions?</h3>
                <ul className={styles.linkUl}>
                    <li style={{maxWidth: '75%', display: 'flex'}}>
                    <i className="fa-solid fa-map-location" style={{fontSize:'1.4rem'}}></i>
                        Aramam Complex, Valluvakuni Thara,
                        Arabic Colege Road, Ayanikkad, Kerala 673521
                    </li>
                    <a href="tel:+91 9567-622-500">
                    <li>
                    <i className="fa-solid fa-phone-volume" style={{fontSize:'1.4rem'}}></i>
                    +91 9567-622-500
                    </li>
                    </a>
                    <a href="mailto:seashoremediclinic@gmail.com">
                    <li>
                    <i className="fa-solid fa-envelope" style={{fontSize:'1.4rem'}}></i>
                    seashoremediclinic@gmail.com
                    </li>
                    </a>
                </ul>
            </div>
        </div>
        <CopyRight/>
        </section>
    )
}

export default Footer;