import { useState } from 'react'
import { Bot, MessageCircle, Send, Sparkles, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const quickPrompts = [
  'Tell me about services',
  'Need a website',
  'AI solution help',
]

const starterMessages = [
  {
    role: 'assistant',
    text: 'Hi, I am Mavi AI. Ask me about MaVionix services, project ideas, or how to get started.',
  },
]

function getAssistantReply(message) {
  const text = message.toLowerCase()

  if (text.includes('web') || text.includes('website')) {
    return 'MaVionix can build a fast, responsive business website with SEO-friendly pages, animations, and contact flows.'
  }

  if (text.includes('ai') || text.includes('chatbot') || text.includes('automation')) {
    return 'For AI solutions, MaVionix can plan chatbots, workflow automation, smart dashboards, and customer-support assistants.'
  }

  if (text.includes('service')) {
    return 'Core services include Web Development, App Development, AI Solutions, Cybersecurity, UI/UX Design, and Digital Marketing.'
  }

  if (text.includes('price') || text.includes('cost')) {
    return 'Pricing depends on project size and features. Share your goal in the contact form and the team can suggest a practical plan.'
  }

  return 'That sounds like a good digital project. MaVionix can help with strategy, design, development, security, and launch support.'
}

function AIChatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState(starterMessages)

  const sendMessage = (value = input) => {
    const trimmed = value.trim()
    if (!trimmed) return

    setMessages((current) => [
      ...current,
      { role: 'user', text: trimmed },
      { role: 'assistant', text: getAssistantReply(trimmed) },
    ])
    setInput('')
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-4 z-50 w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-2xl border border-cyan-300/30 bg-white/95 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl dark:border-cyan-300/20 dark:bg-[#071020]/95 dark:shadow-cyan-500/10"
            aria-label="MaVionix AI chatbot"
          >
            <div className="flex items-center justify-between border-b border-slate-900/10 bg-gradient-to-r from-cyan-400/15 via-blue-500/10 to-purple-500/15 p-4 dark:border-white/10">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/30">
                  <Bot size={22} />
                </span>
                <div>
                  <h2 className="text-base font-bold text-slate-950 dark:text-white">Mavi AI</h2>
                  <p className="text-xs font-medium text-cyan-700 dark:text-cyan-200">Digital service assistant</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-lg text-slate-600 transition hover:bg-slate-900/5 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                aria-label="Close AI chatbot"
              >
                <X size={18} />
              </button>
            </div>

            <div className="max-h-80 space-y-3 overflow-y-auto p-4">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <p
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                      message.role === 'user'
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-200'
                    }`}
                  >
                    {message.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid gap-3 border-t border-slate-900/10 p-4 dark:border-white/10">
              <div className="flex flex-wrap gap-2">
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => sendMessage(prompt)}
                    className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-700 transition hover:border-cyan-400 dark:text-cyan-200"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  sendMessage()
                }}
                className="flex gap-2"
              >
                <label className="sr-only" htmlFor="ai-chat-message">
                  Ask Mavi AI
                </label>
                <input
                  id="ai-chat-message"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about MaVionix..."
                  className="min-w-0 flex-1 rounded-lg border border-slate-900/10 bg-white px-3 py-2 text-sm text-slate-950 outline-none transition focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/20 dark:border-white/10 dark:bg-white/10 dark:text-white"
                />
                <button
                  type="submit"
                  className="grid h-10 w-10 place-items-center rounded-lg bg-cyan-400 text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                  aria-label="Send message"
                >
                  <Send size={17} />
                </button>
              </form>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((value) => !value)}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        className="fixed bottom-6 left-6 z-50 flex h-14 items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 px-4 font-bold text-white shadow-xl shadow-cyan-500/30 transition hover:shadow-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label={open ? 'Hide AI chatbot' : 'Open AI chatbot'}
      >
        {open ? <X size={21} /> : <MessageCircle size={21} />}
        <span className="hidden sm:inline-flex items-center gap-2">
          Mavi AI <Sparkles size={15} />
        </span>
      </motion.button>
    </>
  )
}

export default AIChatbot
