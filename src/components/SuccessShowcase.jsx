import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import AnimatedSection from './AnimatedSection';

export default function SuccessShowcase({ styles, copy, activeCase, setActiveCase }) {
  const [showDetails, setShowDetails] = useState(false);
  const detailRef = useRef(null);
  const selected = copy.success.cases[activeCase];

  const scrollDetailIntoViewOnMobile = () => {
    if (!window.matchMedia('(max-width: 1040px)').matches) {
      return;
    }

    window.setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
  };

  return (
    <AnimatedSection id="success-cases" className={`${styles.section} ${styles.caseSection}`}>
      <div className={styles.sectionHeader}>
        <p className={styles.eyebrow}>{copy.success.eyebrow}</p>
        <h2>{copy.success.title}</h2>
        <p>{copy.success.intro}</p>
      </div>
      <div className={styles.caseLayout}>
        <div className={styles.timeline} role="list">
          {copy.success.cases.map((item, index) => (
            <motion.button
              key={item.title}
              className={index === activeCase ? `${styles.timelineItem} ${styles.active}` : styles.timelineItem}
              onClick={() => {
                setActiveCase(index);
                setShowDetails(false);
                scrollDetailIntoViewOnMobile();
              }}
              type="button"
              whileHover={{ x: 6 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item.title}</strong>
              <small>{item.eyebrow}</small>
            </motion.button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.article
            ref={detailRef}
            key={selected.title}
            className={styles.caseDetail}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35 }}
          >
            <p className={styles.eyebrow}>{selected.eyebrow}</p>
            <h3>{selected.title}</h3>
            <p>{selected.summary}</p>
            <div className={styles.caseMetricRow}>
              {selected.metrics.map((metric) => (
                <span key={metric}>{metric}</span>
              ))}
            </div>
            <button className={styles.disclosureButton} type="button" onClick={() => setShowDetails((value) => !value)}>
              {showDetails ? copy.success.hideDetails : copy.success.viewDetails}
            </button>
            <AnimatePresence initial={false}>
              {showDetails && (
                <motion.div
                  className={styles.caseColumns}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.28 }}
                >
                  <div>
                    <span>{copy.success.challenge}</span>
                    <p>{selected.challenge}</p>
                  </div>
                  <div>
                    <span>{copy.success.solution}</span>
                    <p>{selected.solution}</p>
                  </div>
                  <div>
                    <span>{copy.success.impact}</span>
                    <p>{selected.impact}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.article>
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}
