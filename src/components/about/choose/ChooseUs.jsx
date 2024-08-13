import styles from './chooseus.module.css';

const departments = [
  { name: "Qualified Doctors", icon: "fa-user-doctor", description: "Expert care from experienced doctors, dedicated to staying current with the latest medical advancements." }, 
  { name: "Modern Equipment", icon: "fa-heart-pulse", description: "Our state-of-the-art medical facilities are equipped with the latest technology and equipment to provide accurate diagnoses and effective treatments."},
  { name: "Emergency Help", icon: "fa-kit-medical", description: "We offer prompt and efficient emergency services, providing immediate attention and care when you need it most." },
  { name: "Individual Care", icon: "fa-bed-pulse", description: "We recognize that each patient is unique, and we take personalized approach to medical care, tailoring our services to meet your individual needs and preferences." },
  { name: "In-house Laboratory", icon: "fa-vial-virus", description: "Our in-house laboratory is equipped with the latest technology and equipment to provide accurate and reliable diagnostic results." },
  { name: "Quality & Safety", icon: "fa-shield-virus", description: "We prioritize quality and safety in all aspects of our medical care, adhering to strict standards and protocols to ensure the best possible outcomes." }
];

const ChooseUs = () => {
  return (
    <section className={styles.chooseSection}>
      <h3 className={styles.subtitle}>Your Health in Good Hands</h3>
      <h2 className={styles.title}>Why Choose Us?</h2>
      <div className={styles.separator}></div>
      <div className={styles.chooseGrid}>
        {departments.map((dept, index) => (
          <div key={index} className={styles.chooseCard}>
            <i className={`fas ${dept.icon} ${styles.icon}`}></i>
            <div className={styles.chooseCardContent}>
            <p className={styles.departmentName}>{dept.name.toUpperCase()}</p>
            <p className={styles.departmentDescription}>{dept.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;
