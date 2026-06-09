import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';
import AnimatedSection from './AnimatedSection';

export default function LifeDashboard({ styles, copy, onProfileClick }) {
  return (
    <AnimatedSection id="value" className={`${styles.section} ${styles.dashboardSection}`}>
      <div className={styles.sectionHeader}>
        <p className={styles.eyebrow}>{copy.value.eyebrow}</p>
        <h2>{copy.value.title}</h2>
        <p>{copy.value.body}</p>
      </div>
      <div className={styles.dashboardGrid}>
        <motion.button
          className={`${styles.dashboardCard} ${styles.profileCard}`}
          whileHover={{ y: -6 }}
          type="button"
          onClick={onProfileClick}
        >
          <img src={profileImage} alt="Erick Yorzeth Masis Cavero" />
          <div>
            <span>Senior Quality Systems Development Technician</span>
            <strong>{copy.value.availability}</strong>
            <small>{copy.value.photoHint}</small>
          </div>
        </motion.button>
        {copy.value.cards.map((item) => (
          <motion.article
            key={item.title}
            className={styles.dashboardCard}
            whileHover={{ y: -8, rotate: -0.4 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <span>{item.metric}</span>
            <h3>{item.title}</h3>
          </motion.article>
        ))}
        <article className={`${styles.dashboardCard} ${styles.languageCard}`}>
          <span>{copy.languages.eyebrow}</span>
          <h3>{copy.languages.title}</h3>
          <div className={styles.languageList}>
            {copy.languages.items.map((language) => (
              <p key={language.name}>
                <strong>{language.name}</strong>
                {language.level}
              </p>
            ))}
          </div>
        </article>
      </div>
    </AnimatedSection>
  );
}
