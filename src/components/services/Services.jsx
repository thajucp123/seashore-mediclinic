import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./services.module.css";
import {serviceList} from "./ServiceList";

const Services = () => {

    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0); //to prevent react router default behaviour of preserving previous scroll position
    }, [location]);

    return(
        <section className={styles.services}>
            <h3>CARE YOU CAN TRUST</h3>
            <h2 className={styles.mainTitle}>Our Services</h2>
            <div className={styles.separator}></div>
            <div className={styles.servicesContainer}>
            {serviceList.map((service, index) => {
                    return(
                        <div className={styles.serviceCard} key={index}>

                    <img src={new URL(service.image, import.meta.url)} alt={service.servicename}/>
                    <div className={styles.serviceTitle}>
                    <i className={`fa-solid ${service.icon}`}></i>
                    <h2>{service.servicename}</h2>
                    </div>
                    <p>{service.description}</p>
                </div>
                    )
                })
                }
            </div>
        </section>
    )
}
export default Services;