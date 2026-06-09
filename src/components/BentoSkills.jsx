import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function BentoSkills({ styles, copy }) {
  return (
    <AnimatedSection id="skills" className={`${styles.section} ${styles.bentoSection}`}>
      <div className={styles.sectionHeader}>
        <p className={styles.eyebrow}>{copy.skills.eyebrow}</p>
        <h2>{copy.skills.title}</h2>
      </div>
      <div className={styles.bentoGrid}>
        {copy.skills.levels.map((skill, index) => (
          <motion.article
            key={skill.name}
            className={`${styles.bentoCard} ${index === 0 || index === 3 ? styles.large : ''}`}
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 240, damping: 22 }}
          >
            <span>{skill.level}</span>
            <h3>{skill.name}</h3>
            <p>{skill.note}</p>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}
