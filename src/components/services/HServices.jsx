import styles from './hservices.module.css';

const departments = [
  { name: "Consultation", icon: "fa-stethoscope" }, 
  { name: "Laboratory", icon: "fa-flask" },
  { name: "Pharmacy", icon: "fa-capsules" },
  { name: "Observation", icon: "fa-bed-pulse" },
  { name: "E.C.G", icon: "fa-file-waveform" },
  { name: "Nebulisation", icon: "fa-briefcase-medical" }
];

const HServices = () => {
  return (
    <section className={styles.servicesSection}>
      <h3 className={styles.subtitle}>Care You Can Trust</h3>
      <h2 className={styles.title}>Our Services</h2>
      <div className={styles.separator}></div>
      <div className={styles.serviceGrid}>
        {departments.map((dept, index) => (
          <div key={index} className={styles.serviceCard}>
            <i className={`fas ${dept.icon} ${styles.icon}`}></i>
            <p className={styles.departmentName}>{dept.name.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HServices;
