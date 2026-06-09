import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function ExperienceTimeline({ styles, copy }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = copy.experience.items[activeIndex];

  return (
    <AnimatedSection className={`${styles.section} ${styles.experienceSection}`}>
      <div className={styles.sectionHeader}>
        <p className={styles.eyebrow}>{copy.experience.eyebrow}</p>
        <h2>{copy.experience.title}</h2>
      </div>
      <div className={styles.experienceLayout}>
        <div className={styles.experienceRail}>
          {copy.experience.items.map((item, index) => (
            <motion.button
              key={`${item.company}-${item.period}`}
              className={index === activeIndex ? `${styles.experienceTab} ${styles.active}` : styles.experienceTab}
              onClick={() => setActiveIndex(index)}
              type="button"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{item.period}</span>
              <strong>{item.role}</strong>
              <small>{item.company}</small>
            </motion.button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.article
            key={`${active.company}-${active.role}`}
            className={styles.experienceDetail}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.28 }}
          >
            <p className={styles.eyebrow}>{active.period}</p>
            <h3>{active.role}</h3>
            <strong>{active.company}</strong>
            <p>{active.focus}</p>
            <ul>
              {active.proof.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.article>
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}
