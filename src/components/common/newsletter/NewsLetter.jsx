import styles from "./newsletter.module.css";

const NewsLetter = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    alert (`Thank you for subscribing to our newsletter, ${email}`);
  }

    return(
        <section className= {styles.newsletter}>
            <div className= {`${styles.newsletterContainer} flexSB`}>
                <div className= {styles.newsletterLeft}>
                    <h1>Subscribe to our email newsletter</h1>
                    <h3>Stay tuned for regular updates right in your email</h3>
                </div>
                <div className= {styles.newsletterRight}>
                <form name="newsletter" onSubmit={(e) => handleSubmit(e)}>
                    <div className= {styles.inputContainer}>
                        <input type="email" name="email" placeholder="Enter your email address..." className= {styles.inputBox}/>
                        <button type="submit" className={styles.inputBtn}>
                        <i className="fa-solid fa-paper-plane"></i>
                        </button>
                    </div>
                </form>
                </div>
            </div>
        </section>
    )
}

export default NewsLetter;