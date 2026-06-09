import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { githubUsername, profileLinks } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';

export default function LiveProof({ styles, copy, mailtoHref, whatsappHref }) {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState('loading');
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    let cancelled = false;

    fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('GitHub unavailable');
        }
        return response.json();
      })
      .then((data) => {
        if (cancelled) return;
        setRepos(Array.isArray(data) ? data.slice(0, 4) : []);
        setStatus(Array.isArray(data) && data.length > 0 ? 'ready' : 'empty');
      })
      .catch(() => {
        if (!cancelled) {
          setStatus('error');
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const costaRicaTime = useMemo(
    () =>
      new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Costa_Rica',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).format(now),
    [now]
  );

  return (
    <AnimatedSection id="live-proof" className={`${styles.section} ${styles.liveProofSection}`}>
      <div className={styles.sectionHeader}>
        <p className={styles.eyebrow}>{copy.liveProof.eyebrow}</p>
        <h2>{copy.liveProof.title}</h2>
      </div>
      <div className={styles.liveProofGrid}>
        <article className={`${styles.liveCard} ${styles.githubCard}`}>
          <span>{copy.liveProof.githubTitle}</span>
          {status === 'loading' && <p>{copy.liveProof.githubLoading}</p>}
          {status === 'empty' && <p>{copy.liveProof.githubEmpty}</p>}
          {status === 'error' && <p>{copy.liveProof.githubError}</p>}
          {status === 'ready' && (
            <div className={styles.repoList}>
              {repos.map((repo) => (
                <a key={repo.id} href={repo.html_url}>
                  <strong>{repo.name}</strong>
                  <small>{repo.language || 'Repository'} · {repo.stargazers_count} stars</small>
                </a>
              ))}
            </div>
          )}
          <p>{copy.liveProof.university}</p>
        </article>
        <article className={styles.liveCard}>
          <span>{copy.liveProof.timeTitle}</span>
          <strong className={styles.clock}>{costaRicaTime}</strong>
          <p>America/Costa_Rica</p>
        </article>
        <article className={styles.liveCard}>
          <span>Fast actions</span>
          <div className={styles.quickLinks}>
            <motion.a href={profileLinks.cv} whileHover={{ y: -3 }}>{copy.liveProof.cv}</motion.a>
            <motion.a href="/documents/certificates/etqscript-certificate.pdf" whileHover={{ y: -3 }}>
              {copy.liveProof.certificates}
            </motion.a>
            <motion.a href={mailtoHref} whileHover={{ y: -3 }}>{copy.liveProof.email}</motion.a>
            <motion.a href={whatsappHref} whileHover={{ y: -3 }}>{copy.liveProof.whatsapp}</motion.a>
          </div>
        </article>
      </div>
    </AnimatedSection>
  );
}
