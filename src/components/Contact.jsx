import { useState } from 'react'
import { Mail, MapPin, Send, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeLeft, fadeRight } from './animations'

const initialForm = { name: '', email: '', message: '' }

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const nextErrors = {}

    if (!form.name.trim()) nextErrors.name = 'Name is required.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Enter a valid email address.'
    if (!form.message.trim()) nextErrors.message = 'Message is required.'

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setSent(true)
      setForm(initialForm)
    } else {
      setSent(false)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  return (
    <section id="contact" className="py-24">
      <div className="section-shell">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-cyan-500">Contact</p>
          <h2 className="text-3xl font-bold text-slate-950 md:text-5xl dark:text-white">
            Let us build your next digital move.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeLeft}
            transition={{ duration: 0.65 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-6 md:p-8"
            noValidate
          >
            <div className="grid gap-5">
              <label className="grid gap-2">
                <span className="font-semibold text-slate-800 dark:text-slate-100">Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="rounded-lg border border-slate-900/10 bg-white/80 px-4 py-3 text-slate-950 outline-none transition focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/20 dark:border-white/10 dark:bg-white/10 dark:text-white"
                  placeholder="Your name"
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && <span className="text-sm text-red-400">{errors.name}</span>}
              </label>

              <label className="grid gap-2">
                <span className="font-semibold text-slate-800 dark:text-slate-100">Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="rounded-lg border border-slate-900/10 bg-white/80 px-4 py-3 text-slate-950 outline-none transition focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/20 dark:border-white/10 dark:bg-white/10 dark:text-white"
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && <span className="text-sm text-red-400">{errors.email}</span>}
              </label>

              <label className="grid gap-2">
                <span className="font-semibold text-slate-800 dark:text-slate-100">Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  className="resize-none rounded-lg border border-slate-900/10 bg-white/80 px-4 py-3 text-slate-950 outline-none transition focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/20 dark:border-white/10 dark:bg-white/10 dark:text-white"
                  placeholder="Tell us about your project"
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && <span className="text-sm text-red-400">{errors.message}</span>}
              </label>
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 px-6 py-3 font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:shadow-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-300 sm:w-auto"
            >
              Submit <Send size={18} />
            </button>

            {sent && (
              <p className="mt-5 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm font-semibold text-emerald-600 dark:text-emerald-300">
                Thanks! Your message has been submitted successfully.
              </p>
            )}
          </motion.form>

          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeRight}
            transition={{ duration: 0.65 }}
            className="glass-card rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white">Contact Information</h3>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              Share your idea and the MaVionix team will help shape it into a clear digital plan.
            </p>
            <div className="mt-8 grid gap-5">
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-cyan-400/12 text-cyan-500">
                  <Mail size={20} />
                </span>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Email</p>
                  <p className="text-slate-600 dark:text-slate-300">hello@mavionix.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-purple-400/12 text-purple-500">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Location</p>
                  <p className="text-slate-600 dark:text-slate-300">Remote digital delivery</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-emerald-400/12 text-emerald-500">
                  <ShieldCheck size={20} />
                </span>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Response</p>
                  <p className="text-slate-600 dark:text-slate-300">Project guidance within 24 hours</p>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}

export default Contact
