import { motion } from 'framer-motion';

export default function Navbar({ styles, navItems, labels, theme, onToggleTheme, onToggleLocale }) {
  return (
    <motion.nav
      className={styles.topbar}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      aria-label="Primary navigation"
    >
      <a className={styles.brand} href="#home" aria-label="Yorzeth portfolio home">
        YM
      </a>
      <div className={styles.navlinks}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>
      <div className={styles.navActions}>
        <button className={styles.themeToggle} onClick={onToggleLocale} type="button">
          {labels.language}
        </button>
        <button className={styles.themeToggle} onClick={onToggleTheme} type="button">
          {theme === 'dark' ? labels.light : labels.dark}
        </button>
      </div>
    </motion.nav>
  );
}
