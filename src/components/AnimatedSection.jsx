import { motion, useReducedMotion } from 'framer-motion';

export default function AnimatedSection({ children, className = '', delay = 0, ...props }) {
  const reduceMotion = useReducedMotion();

  // Scroll-reveal reusable: cada seccion aparece al entrar en viewport.
  // useReducedMotion respeta usuarios que prefieren menos movimiento.
  return (
    <motion.section
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 34 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-90px' }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.section>
  );
}
