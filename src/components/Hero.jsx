import { motion } from 'framer-motion';
import heroImage from '../assets/qms-automation-hero.png';
import { profileLinks } from '../data/portfolioData';

export default function Hero({ styles, copy, activePhrase, whatsappHref }) {
  return (
    <section id="home" className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          {copy.hero.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          {copy.hero.name}
        </motion.h1>
        <motion.div
          className={styles.dynamicLine}
          key={copy.heroPhrases[activePhrase]}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          {copy.heroPhrases[activePhrase]}
        </motion.div>
        <motion.p
          className={styles.heroLead}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {copy.hero.lead}
        </motion.p>
        <motion.div
          className={styles.heroActions}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.34 }}
        >
          <motion.a className={styles.primaryAction} href="#success-cases" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
            {copy.hero.primaryCta}
          </motion.a>
          <motion.a className={styles.secondaryAction} href={whatsappHref} whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
            WhatsApp
          </motion.a>
          <motion.a
            className={styles.secondaryAction}
            href={profileLinks.cv}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            {copy.hero.cvCta}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
