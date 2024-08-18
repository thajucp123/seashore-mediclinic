import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
    const [active, setActive] = useState('home');
    const [mobile, setMobile] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() =>{
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            scrollTop > 85 ? setScrolled(true) : setScrolled(false);
        };

        window.addEventListener('scroll', handleScroll);
        return() => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[])

    useEffect(() => {
        switch(location.pathname) {
            case '/':
                setActive('home');
                break;
            case '/about':
                setActive('about');
                break;
            case '/services':
                setActive('services');
                break;
            case '/pricing':
                setActive('pricing');
                break;
            case '/doctors':
                setActive('doctors');
                break;
            case '/gallery':
                setActive('gallery');
                break;
            case '/contact':
                setActive('contact');
                break;
            default:
                setActive('home');
                break;
        }
    },[location])

    return(
        <section className="header-container">
         <Head/>
         <header className={scrolled ? "scrolled" : ""}>
            <nav className="flexSB">
                <ul className= {mobile? "mobile-nav" : "flexSB"} onClick={() => setMobile(false)}>
                    <li><Link to="/" className={active === 'home' ?"active":""}>Home</Link></li>
                    <li><Link to="/about" className={active === 'about' ?"active":""}>About Us</Link></li>
                    <li><Link to="/services" className={active === 'services' ?"active":""}>Services</Link></li>
                    <li><Link to="/pricing" className={active === 'pricing' ?"active":""}>Packages</Link></li>
                    <li><Link to="/doctors" className={active === 'doctors' ?"active":""}>Doctors</Link></li>
                    <li><Link to="/gallery" className={active === 'gallery' ?"active":""}>Gallery</Link></li>
                    <li><Link to="/contact" className={active === 'contact' ?"active":""}>Contact Us</Link></li>
                </ul>
                <Link to="/appointments">
                <div className='start'>
                    
                    <div className='button'>BOOK APPOINTMENT</div>
                    
                </div>
                </Link>
                <button className='toggle' onClick={() => setMobile(!mobile)}>
            {mobile ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
            </nav>
            
         </header>
        </section>
    )
}

export default Header;