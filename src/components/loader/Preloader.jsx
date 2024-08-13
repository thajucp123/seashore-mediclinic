import "./loader-styles.css";
import logo from "../../assets/logos/seashore logo black.png";
const Preloader = () => {
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