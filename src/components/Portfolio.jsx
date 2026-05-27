import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { fadeUp, staggerContainer } from './animations'

function Portfolio() {
  return (
    <section id="projects" className="py-24">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-cyan-500">Portfolio</p>
          <h2 className="text-3xl font-bold text-slate-950 md:text-5xl dark:text-white">
            Project concepts made for real business problems.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.14 }}
          variants={staggerContainer}
          className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="glass-card group overflow-hidden rounded-2xl"
            >
              <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0"
                >
                  <div className="absolute left-6 top-6 h-20 w-20 rounded-lg border border-white/35 bg-white/20 backdrop-blur" />
                  <div className="absolute bottom-6 right-6 h-24 w-32 rounded-lg border border-white/25 bg-slate-950/20 backdrop-blur" />
                  <div className="absolute left-24 top-20 h-3 w-40 rounded-full bg-white/45" />
                  <div className="absolute left-24 top-28 h-3 w-28 rounded-full bg-white/25" />
                </motion.div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
                  <ExternalLink className="mt-1 text-cyan-500" size={18} aria-hidden="true" />
                </div>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
