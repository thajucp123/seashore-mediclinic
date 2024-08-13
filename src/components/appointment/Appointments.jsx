import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppointmentCard from "./AppointmentCard";
const Appointments = () => {

    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0); //to prevent react router default behaviour of preserving previous scroll position
    }, [location]);

    return(

        <div style={{maxWidth: '75%', margin: '5rem auto'}}>
            <AppointmentCard/>
        </div>
    )
}

export default Appointments;