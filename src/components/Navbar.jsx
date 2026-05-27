import { useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { motion } from 'framer-motion'

const navLinks = ['Home', 'About', 'Services', 'Case Studies', 'Projects', 'Contact']

function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false)

  const handleNavClick = (label) => {
    setOpen(false)
    const target = label === 'Home' ? 'home' : label.toLowerCase().replaceAll(' ', '-')
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-900/10 bg-white/75 backdrop-blur-xl dark:border-white/10 dark:bg-[#050914]/72"
    >
      <nav className="section-shell flex h-20 items-center justify-between" aria-label="Main navigation">
        <button
          type="button"
          onClick={() => handleNavClick('Home')}
          className="flex items-center gap-3 text-left"
          aria-label="Go to home section"
        >
          <span className="grid h-11 w-11 place-items-center rounded-lg border border-cyan-300/40 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 text-lg font-black text-white shadow-lg shadow-cyan-500/20">
            M
          </span>
          <span>
            <span className="block text-xl font-bold tracking-wide">MaVionix</span>
            <span className="block text-xs font-medium uppercase tracking-[0.22em] text-cyan-500 dark:text-cyan-300">
              Digital Services
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <button
              key={link}
              type="button"
              onClick={() => handleNavClick(link)}
              className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-900/5 hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-cyan-300"
            >
              {link}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setDarkMode((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-lg border border-slate-900/10 bg-white/80 text-slate-800 transition hover:border-cyan-400 hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:text-cyan-300"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-lg border border-slate-900/10 bg-white/80 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 md:hidden dark:border-white/15 dark:bg-white/10 dark:text-white"
            aria-label="Toggle mobile menu"
            aria-expanded={open}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-slate-900/10 bg-white/95 px-4 py-4 shadow-xl md:hidden dark:border-white/10 dark:bg-[#071020]/95"
        >
          <div className="section-shell grid gap-2">
            {navLinks.map((link) => (
              <button
                key={link}
                type="button"
                onClick={() => handleNavClick(link)}
                className="rounded-lg px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-cyan-500/10 dark:text-slate-100"
              >
                {link}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Navbar
