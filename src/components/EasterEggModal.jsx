import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function playOriginalCongaStyleLoop() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return () => {};

  const context = new AudioContext();
  let step = 0;

  const playHit = (frequency, duration, gainValue) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(frequency, context.currentTime);
    gain.gain.setValueAtTime(gainValue, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + duration);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + duration);
  };

  const interval = window.setInterval(() => {
    const pattern = [180, 260, 210, 320, 240, 210, 290, 380];
    playHit(pattern[step % pattern.length], step % 4 === 0 ? 0.16 : 0.09, step % 4 === 0 ? 0.16 : 0.1);
    step += 1;
  }, 170);

  return () => {
    window.clearInterval(interval);
    context.close();
  };
}

export default function EasterEggModal({ styles, copy, open, onClose }) {
  useEffect(() => {
    if (!open) return undefined;
    return playOriginalCongaStyleLoop();
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.modalBackdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.funModal}
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
          >
            <div className={styles.blobStage} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <h3>{copy.easterEgg.title}</h3>
            <p>{copy.easterEgg.body}</p>
            <button className={styles.primaryAction} type="button" onClick={onClose}>
              {copy.easterEgg.close}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
