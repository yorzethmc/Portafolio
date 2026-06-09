import { motion } from 'framer-motion';
import { certifications } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';

export default function Certifications({ styles, copy }) {
  return (
    <AnimatedSection className={`${styles.section} ${styles.certificationSection}`}>
      <div className={styles.sectionHeader}>
        <p className={styles.eyebrow}>{copy.certifications.eyebrow}</p>
        <h2>{copy.certifications.title}</h2>
      </div>
      <div className={styles.certGrid}>
        {certifications.map((cert) => (
          <motion.a key={cert.name} className={styles.certCard} href={cert.href} whileHover={{ y: -6 }}>
            <span>{cert.provider}</span>
            <strong>{cert.name}</strong>
          </motion.a>
        ))}
      </div>
    </AnimatedSection>
  );
}
