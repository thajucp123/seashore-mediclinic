import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./contactus.module.css";

const ContactUs = () => {

    const formInitialData = {
        name: "",
        email: "",
        phone: "",
        message: "",
    };

    const [formData, setFormData] = useState(formInitialData);
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState({}); // to store the status of API call result
    const [buttonsDisabled, setButtonsDisabled] = useState(false);
  
    const successSound = new Audio('/sound/success.mp3');
    const errorSound = new Audio('/sound/error.mp3');

    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0); //to prevent react router default behaviour of preserving previous scroll position
    }, [location]);

    const contactDetails = [
        {
            title: "EMAIL",
            info: "seashoremediclinic@gmail.com",
        },
        {
            title: "PHONE",
            info: "+91 9567-622-500",
        },
        {
            title: "ADDRESS",
            info: "Aramam Complex, Valluvakuni Thara, Arabic Colege Road, Ayanikkad, Kerala 673521",
        },
    ];

    const onFormDataUpdate = (key, value) => {
        setFormData({
            ...formData,
            [key]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setButtonText("Sending...");
    setButtonsDisabled(true);

    const abortController = new AbortController();
    const timeoutId = setTimeout(() => abortController.abort(), 10000); // 10 seconds timeout

    // following to avoid removing of new line characters when sending as json
    const formDataWithMarkers = {};
    Object.keys(formData).forEach((key) => {
      formDataWithMarkers[key] = formData[key].replace(/\n/g, '\\n');
    });

    try {
      let response = await Promise.race([
        fetch("https://seashore-mailer.vercel.app/send-email/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(formDataWithMarkers),
          signal: abortController.signal,
        }),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Request timed out")), 20000) // 20 seconds timeout
        ),
      ]);

      clearTimeout(timeoutId);

      let result = await response.json();
      setFormData(formInitialData); // Clear the form data

      if (result.code === 200) {
        setStatus({ success: true, message: 'Message sent successfully' });
        successSound.play();
      } else {
        setStatus({ success: false, message: 'Something went wrong, please try again later.' });
        errorSound.play();
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        setStatus({ success: false, message: 'Request timed out. Please try again later.' });
        errorSound.play();
      } else {
        setStatus({ success: false, message: 'Failed to send message. Please try again later.' });
        errorSound.play();
      }
    } finally {
      setButtonText("Send");
      setButtonsDisabled(false);
      let timer = setInterval(() => {
        const obj = {}; // empty object
        setStatus(obj); // to clear the status so it no longer shows after 5 secs
        clearInterval(timer);
      }, 5000);
    }
    };

    return (
        <section className={styles.contactUs}>
        
        <div className={styles.contactUsContainer}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9297.64417586069!2d75.60368368381017!3d11.539097948824166!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba68519adee27cf%3A0x25b8bd44fb31d86f!2sSea%20shore%20medi%20clinic!5e0!3m2!1sen!2sin!4v1723735860415!5m2!1sen!2sin" 
        width="100%" height="630" style={{border:0, outline: 'none'}} 
        allowfullscreen="true" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        <div className={styles.contactFormContainer}>
            <h1 className={styles.title}>Contact Us</h1>
            <h3 className={styles.subTitle}>Get in touch with us for inquiries, feedback, and support.</h3>
            <div className={styles.contactDetails}>
                {contactDetails.map((item, index) => (
                    <div className={styles.contactDetailsInfo} key={index}>
                        <h3 className={styles.contactDetailsTitle}>{item.title}</h3>
                        <p className={styles.contactDetailsInfo}>{item.info}</p>
                    </div>
                ))}
            </div>
            <form className={styles.contactForm} onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.formElements}>
                    <input type="text" placeholder="Name" value={formData.name} onChange={e => onFormDataUpdate("name", e.target.value)} required/>
                    <div className={styles.emailPhone}>
                    <input type="email" placeholder="Email" value={formData.email} onChange={e => onFormDataUpdate("email", e.target.value)} />
                    <input type="tel" placeholder="Phone" pattern="[0-9]{10}" value={formData.phone} onChange={e=> onFormDataUpdate("phone", e.target.value)}/>
                    </div>
                    <textarea placeholder="Message" value={formData.message}onChange={e => onFormDataUpdate("message", e.target.value)} required/>
                    <div className= {styles.submitBtnContainer}>
                    <button className={styles.contactButton} disabled={buttonsDisabled}>{buttonText}</button>
                    {
                    status.message && (
                        <p className={`${status.success ? 'success' : 'danger'}`}>{status.message}</p>
                    )
                }
                </div>
                </div>
            </form>
        </div>
        </div>
        </section>
    )
}

export default ContactUs;