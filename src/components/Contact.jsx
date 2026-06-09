import { motion } from 'framer-motion';
import { profileLinks } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';

export default function Contact({ styles, copy, contact, setContact, mailtoHref, whatsappHref }) {
  return (
    <AnimatedSection id="contact" className={`${styles.section} ${styles.contactSection}`}>
      <div>
        <p className={styles.eyebrow}>{copy.contact.eyebrow}</p>
        <h2>{copy.contact.title}</h2>
        <p>{copy.contact.body}</p>
        <div className={styles.contactButtons}>
          <a className={styles.secondaryAction} href={profileLinks.cv}>{copy.liveProof.cv}</a>
          <a className={styles.secondaryAction} href={whatsappHref}>{copy.contact.whatsapp}</a>
          <a className={styles.secondaryAction} href={profileLinks.linkedin}>LinkedIn</a>
          <a className={styles.secondaryAction} href={profileLinks.github}>GitHub</a>
        </div>
      </div>
      <form className={styles.contactForm} onSubmit={(event) => event.preventDefault()}>
        <label>
          {copy.contact.name}
          <input
            value={contact.name}
            onChange={(event) => setContact({ ...contact, name: event.target.value })}
            placeholder={copy.contact.namePlaceholder}
          />
        </label>
        <label>
          {copy.contact.email}
          <input
            type="email"
            value={contact.email}
            onChange={(event) => setContact({ ...contact, email: event.target.value })}
            placeholder={copy.contact.emailPlaceholder}
          />
        </label>
        <label>
          {copy.contact.message}
          <textarea
            value={contact.message}
            onChange={(event) => setContact({ ...contact, message: event.target.value })}
            placeholder={copy.contact.messagePlaceholder}
          />
        </label>
        <motion.a className={`${styles.primaryAction} ${styles.formAction}`} href={mailtoHref} whileHover={{ y: -3 }}>
          {copy.contact.sendEmail}
        </motion.a>
      </form>
    </AnimatedSection>
  );
}
