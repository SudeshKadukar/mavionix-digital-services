import { Globe2, MessageCircle, Share2, Users } from 'lucide-react'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-900/10 py-10 dark:border-white/10">
      <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-2xl font-black text-slate-950 dark:text-white">MaVionix</p>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Digital strategy, design, development, and growth in one place.
          </p>
        </div>
        <div className="flex items-center gap-3">
          {[Globe2, Users, Share2, MessageCircle].map((Icon, index) => (
            <a
              key={index}
              href="#home"
              className="grid h-10 w-10 place-items-center rounded-lg border border-slate-900/10 text-slate-700 transition hover:border-cyan-400 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:border-white/15 dark:text-slate-200"
              aria-label="MaVionix social profile"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
      <div className="section-shell mt-8 text-sm text-slate-500 dark:text-slate-400">
        Copyright {year} MaVionix. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
