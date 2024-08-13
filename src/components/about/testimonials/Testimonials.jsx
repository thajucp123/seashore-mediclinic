import styles from './testimonials.module.css';
import { testimonials } from './testimonial';

const Testimonials = () => {
  return (
    <section id="testimonial" className={styles.testimonialSection}>
      <h3>TESTIMONIAL</h3>
      <h2 className={styles.mainTitle}>Our Healthy & Happy Patients</h2>
      <div className={styles.separator}></div>
      <div className={styles.testimonialsGrid}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            <div className={styles.profile}>
              <img src={testimonial.image} alt={testimonial.name} className={styles.profileImage} />
              <div className={styles.profileInfo}>
                <h4 className={styles.name}>{testimonial.name}</h4>
                <a href={testimonial.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                <p className={styles.title}>{testimonial.title}</p>
                </a>
              </div>
            </div>
            <p className={styles.quote}>
              <i className="fas fa-quote-left"></i> {testimonial.quote}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
