import { useState } from "react";
import styles from "./newsletter.module.css";

const NewsLetter = () => {

    const formInitialData = {
        email: ""
    };

    const [formData, setFormData] = useState(formInitialData);

    const [status, setStatus] = useState({}); // to store the status of API call result
    const [buttonsDisabled, setButtonsDisabled] = useState(false);
    const [sending,  setSending] = useState(false);
  
    const successSound = new Audio('/sound/success.mp3');
    const errorSound = new Audio('/sound/error.mp3');

    const onFormDataUpdate = (key, value) => {
        setFormData({
            ...formData,
            [key]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

    setButtonsDisabled(true);
    setSending(true);

    const abortController = new AbortController();
    const timeoutId = setTimeout(() => abortController.abort(), 10000); // 10 seconds timeout

    // following to avoid removing of new line characters when sending as json
    const formDataWithMarkers = {};
    Object.keys(formData).forEach((key) => {
      formDataWithMarkers[key] = formData[key].replace(/\n/g, '\\n');
    });

    try {
      let response = await Promise.race([
        fetch("https://seashore-mailer.vercel.app/newsletter/", {
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
        setStatus({ success: true, message: 'Sent successfully' });
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
      
      setButtonsDisabled(false);
      setSending(false);
      let timer = setInterval(() => {
        const obj = {}; // empty object
        setStatus(obj); // to clear the status so it no longer shows after 5 secs
        clearInterval(timer);
      }, 5000);
    }
    };

    return(
        <section className= {styles.newsletter}>
            <div className= {styles.newsletterContainer}>
                <div className= {styles.newsletterLeft}>
                    <h1>Subscribe to our email newsletter</h1>
                    <h3>Stay tuned for regular updates right in your email</h3>
                </div>
                <div className= {styles.newsletterRight}>
                <form name="newsletter" onSubmit={(e) => handleSubmit(e)}>
                    <div className= {styles.inputContainer}>
                        <input type="email" name="email" placeholder="Enter your email address..." className= {styles.inputBox} 
                        value={formData.email} 
                        onChange={e => onFormDataUpdate("email", e.target.value)}
                        required
                        />
                        <button type="submit" className={styles.inputBtn} disabled={buttonsDisabled}>
                        {
                          sending ?
                          <i className="fa-solid fa-spinner fa-spin"></i> :
                          <i className="fa-solid fa-paper-plane"></i>
                        }
                        </button>
                        {
                    status.message && (
                        <p className={`${status.success ? 'success' : 'danger'}`}>{status.message}</p>
                    )
                }
                    </div>
                </form>
                </div>
            </div>
        </section>
    )
}

export default NewsLetter;