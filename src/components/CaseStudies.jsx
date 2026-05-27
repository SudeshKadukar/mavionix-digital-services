import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { caseStudies } from '../data/caseStudies'
import { fadeUp, staggerContainer } from './animations'

function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-24">
      <div className="absolute inset-x-0 top-20 -z-10 h-80 bg-purple-500/5 blur-3xl dark:bg-purple-500/10" />
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-cyan-500">Case Studies</p>
          <h2 className="text-3xl font-bold text-slate-950 md:text-5xl dark:text-white">
            Practical digital wins for real business goals.
          </h2>
          <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
            These sample case studies show how MaVionix can turn business problems into focused digital solutions.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="mt-12 grid gap-5 lg:grid-cols-3"
        >
          {caseStudies.map((study) => (
            <motion.article
              key={study.title}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card group overflow-hidden rounded-2xl"
            >
              <div className={`relative min-h-44 bg-gradient-to-br ${study.gradient} p-6 text-white`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_28%)]" />
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">{study.client}</p>
                    <h3 className="mt-4 text-2xl font-bold leading-tight">{study.title}</h3>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white/20 backdrop-blur transition group-hover:bg-white/30">
                    <ArrowUpRight size={21} />
                  </span>
                </div>
                <div className="relative mt-8 inline-flex items-end gap-2 rounded-lg bg-slate-950/20 px-4 py-3 backdrop-blur">
                  <span className="text-3xl font-black">{study.metric}</span>
                  <span className="pb-1 text-sm font-semibold text-white/80">{study.label}</span>
                </div>
              </div>

              <div className="grid gap-5 p-6">
                <div>
                  <p className="text-sm font-bold text-cyan-600 dark:text-cyan-300">Challenge</p>
                  <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-purple-600 dark:text-purple-300">Solution</p>
                  <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{study.solution}</p>
                </div>
                <div className="flex gap-3 rounded-lg border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <CheckCircle2 className="mt-1 shrink-0 text-emerald-500" size={20} />
                  <p className="leading-7 text-slate-700 dark:text-slate-200">{study.result}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudies
