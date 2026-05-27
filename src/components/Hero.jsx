import { ArrowRight, Play, ShieldCheck, Sparkles, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden pt-32 dark:bg-[#050914]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.26),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.24),transparent_28%),linear-gradient(135deg,#f8fafc,#eef7ff)] dark:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.28),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.24),transparent_28%),linear-gradient(135deg,#050914,#091225_55%,#11102a)]" />
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-6 top-24 -z-10 h-40 w-40 rounded-full bg-blue-500/30 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 26, 0], x: [0, -18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-24 right-4 -z-10 h-52 w-52 rounded-full bg-purple-500/25 blur-3xl"
      />

      <div className="section-shell grid min-h-[calc(100vh-8rem)] items-center gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-700 dark:text-cyan-200"
          >
            <Sparkles size={16} /> Future-ready digital services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-4xl font-bold leading-tight text-slate-950 md:text-6xl dark:text-white"
          >
            All Digital Services at <span className="gradient-text">One Place</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-700 md:text-lg dark:text-slate-300"
          >
            MaVionix helps businesses grow with Web Development, AI Solutions, Cybersecurity,
            UI/UX Design and Digital Marketing.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 px-6 py-3 font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:shadow-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
              Get Started <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-900/10 bg-white/70 px-6 py-3 font-bold text-slate-900 transition hover:border-cyan-400 hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:text-cyan-200"
            >
              <Play size={18} /> View Services
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card relative mx-auto w-full max-w-[460px] rounded-2xl p-6"
          aria-label="Animated digital services dashboard illustration"
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-300">MaVionix Console</p>
              <h2 className="mt-1 text-2xl font-bold text-slate-950 dark:text-white">Launch System</h2>
            </div>
            <span className="grid h-12 w-12 place-items-center rounded-lg bg-cyan-400/15 text-cyan-500">
              <Zap />
            </span>
          </div>
          <div className="grid gap-4">
            {['Web Platform', 'AI Workflow', 'Security Layer'].map((item, index) => (
              <motion.div
                key={item}
                animate={{ opacity: [0.72, 1, 0.72], x: [0, index % 2 ? -8 : 8, 0] }}
                transition={{ duration: 3.5 + index, repeat: Infinity, ease: 'easeInOut' }}
                className="rounded-lg border border-white/15 bg-white/60 p-4 dark:bg-white/8"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-semibold text-slate-800 dark:text-slate-100">{item}</span>
                  <ShieldCheck className="text-cyan-500" size={18} />
                </div>
                <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                    style={{ width: `${76 + index * 7}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
