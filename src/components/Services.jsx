import { motion } from 'framer-motion'
import { services } from '../data/services'
import ServiceCard from './ServiceCard'
import { fadeUp, staggerContainer } from './animations'

function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-x-0 top-1/3 -z-10 h-72 bg-cyan-400/5 blur-3xl dark:bg-cyan-400/10" />
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-cyan-500">Services</p>
          <h2 className="text-3xl font-bold text-slate-950 md:text-5xl dark:text-white">
            Everything your digital presence needs.
          </h2>
          <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
            From first idea to launch and growth, MaVionix brings core digital skills into a single
            clean delivery process.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
          variants={staggerContainer}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
