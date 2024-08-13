import { Link } from "react-router-dom";
import logo from "../../../assets/logos/seashore logo 1.png";
const Head = () => {
    return (
        <>
        <section className="head">
           <div className="head-container flexSB">
            <div className="logo">
                <Link to="/">
                <img src={logo} alt="" className="logoimg"/>
                </Link>
            </div>
            <div className='social'>
            <a href="#">
            <i className='fab fa-facebook-f icon'></i>
            </a>
            <a href="https://www.instagram.com/seashore_mediclinic/" target="_blank" rel="noopener noreferrer">
            <i className='fab fa-instagram icon'></i>
            </a>
            <a href="#">
            <i className='fab fa-linkedin icon'></i>
            </a>
          </div>
           </div>
        </section>
        </>
    );
};

export default Head;