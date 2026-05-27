import { motion } from 'framer-motion'
import { fadeUp } from './animations'

function ServiceCard({ service }) {
  const Icon = service.icon

  return (
    <motion.article
      variants={fadeUp}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -12, scale: 1.03 }}
      className="glass-card group rounded-2xl p-6 transition hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20"
    >
      <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-cyan-400/12 text-cyan-500 transition group-hover:bg-cyan-400/20 dark:text-cyan-300">
        <Icon size={24} aria-hidden="true" />
      </div>
      <h3 className="text-xl font-bold text-slate-950 dark:text-white">{service.title}</h3>
      <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{service.description}</p>
    </motion.article>
  )
}

export default ServiceCard
