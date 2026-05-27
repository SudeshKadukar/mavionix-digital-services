import { motion } from 'framer-motion'
import { highlights } from '../data/services'
import { fadeUp, staggerContainer } from './animations'

function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <motion.div variants={fadeUp}>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-cyan-500">About MaVionix</p>
            <h2 className="text-3xl font-bold leading-tight text-slate-950 md:text-5xl dark:text-white">
              Building digital foundations for ambitious businesses.
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} className="text-base leading-8 text-slate-600 dark:text-slate-300">
            <p>
              MaVionix is a modern digital services company focused on helping businesses create stronger
              online experiences. Our vision is to bring strategy, design, technology, security, and
              marketing into one reliable place so clients can launch faster and grow with confidence.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12 grid gap-5 md:grid-cols-3"
        >
          {highlights.map((item) => {
            const Icon = item.icon
            return (
              <motion.article key={item.title} variants={fadeUp} className="glass-card rounded-2xl p-6">
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-lg bg-purple-500/12 text-purple-500 dark:text-purple-300">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default About
