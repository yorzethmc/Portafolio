import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function EtqGuide({ styles, copy }) {
  return (
    <AnimatedSection id="etq-guide" className={`${styles.section} ${styles.guideSection}`}>
      <div className={styles.sectionHeader}>
        <p className={styles.eyebrow}>{copy.etqGuide.eyebrow}</p>
        <h2>{copy.etqGuide.title}</h2>
        <p>{copy.etqGuide.intro}</p>
      </div>
      <div className={styles.noteRail}>
        {copy.etqGuide.notes.map((note, index) => (
          <motion.article
            key={note}
            className={styles.note}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{note}</p>
          </motion.article>
        ))}
      </div>
      <a className={styles.inlineLink} href="../ETQ Scripts Personal documentation/README.md">
        {copy.etqGuide.cta}
      </a>
    </AnimatedSection>
  );
}
