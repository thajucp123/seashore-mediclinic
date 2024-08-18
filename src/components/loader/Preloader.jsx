import { useEffect } from "react";
import "./loader-styles.css";
import logo from "../../assets/logos/seashore logo black.png";
const Preloader = () => {

    useEffect(() => {
      window.scrollTo(0, 0); //to prevent react router default behaviour of preserving previous scroll position
    }, []);


  return (
    <div className="preloader">
        <h3>Loading..</h3>
        <br/>
        <br/>
      <img src={logo} alt="" className="logoimg loader"/>
    </div>
  );
};

export default Preloader;