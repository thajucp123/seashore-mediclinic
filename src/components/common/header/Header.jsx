import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
    const [active, setActive] = useState('home');
    const [mobile, setMobile] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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

    return(
        <section className="header-container">
         <Head/>
         <header className={scrolled ? "scrolled" : ""}>
            <nav className="flexSB">
                <ul className= {mobile? "mobile-nav" : "flexSB"} onClick={() => setMobile(false)}>
                    <li><Link to="/" className={active === 'home' ?"active":""} onClick={()=>setActive('home')}>Home</Link></li>
                    <li><Link to="/about" className={active === 'about' ?"active":""} onClick={()=>setActive('about')}>About Us</Link></li>
                    <li><Link to="/services" className={active === 'services' ?"active":""} onClick={()=>setActive('services')}>Services</Link></li>
                    <li><Link to="/pricing" className={active === 'pricing' ?"active":""} onClick={()=>setActive('pricing')}>Packages</Link></li>
                    <li><Link to="/doctors" className={active === 'doctors' ?"active":""} onClick={()=>setActive('doctors')}>Doctors</Link></li>
                    <li><Link to="/gallery" className={active === 'gallery' ?"active":""} onClick={()=>setActive('gallery')}>Gallery</Link></li>
                    <li><Link to="/contact" className={active === 'contact' ?"active":""} onClick={()=>setActive('contact')}>Contact Us</Link></li>
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