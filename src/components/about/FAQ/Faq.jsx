import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './faq.module.css';

const faqs = [
  {
    question: "What services does Seashore Mediclinic offer?",
    answer: "Seashore Mediclinic offers a range of medical services, including doctor consultations, laboratory tests, pharmacy services, ECG, Nebulisation and more."
  },
  {
    question: "How do I schedule an appointment with a doctor?",
    answer: <>You can schedule an appointment by calling us directly at +91 9567-622-500. You can find our <Link to="/appointments" style={{color: '#517dc3', textDecoration: 'underline'}}>appointment details here</Link>.</>
  },
  {
    question: "Do you have a pharmacy on site?",
    answer: "Yes, we have a fully-stocked pharmacy on site, offering a wide range of medications and health products."
  },
  {
    question: "Is Seashore Mediclinic wheelchair accessible?",
    answer: "Yes, our clinic is wheelchair accessible and we strive to accommodate all patients' needs."
  },
  {
    question: "How do I provide feedback or make a complaint?",
    answer: "We value your feedback! Please contact us via email or phone to share your concerns or suggestions."
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <div
            className={`${styles.faqQuestion} ${activeIndex === index ? styles.active : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <span>
            {faq.question}
            </span>
            <i className='fa-solid fa-angle-right'></i>
          </div>
          <div className={`${styles.faqAnswer} ${activeIndex === index ? styles.show : ''}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
