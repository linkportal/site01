const testimonials = [
  {
    quote: "Site01 completely transformed our deployment workflow. What used to take hours now happens in seconds. The real-time collaboration features are a game changer.",
    author: 'Sarah Chen',
    role: 'CTO, Meridian',
    avatar: 'SC',
    gradient: 'from-cyber-cyan to-cyber-blue',
  },
  {
    quote: "We migrated our entire infrastructure to Site01 in less than a week. The developer experience is unmatched — everything just works out of the box.",
    author: 'Marcus Rivera',
    role: 'Lead Engineer, Astral',
    avatar: 'MR',
    gradient: 'from-neon to-neon-pink',
  },
  {
    quote: "The AI-powered insights alone saved us countless hours. Site01 catches issues before they reach production and suggests optimizations we never considered.",
    author: 'Emily Watson',
    role: 'VP Engineering, Nova',
    avatar: 'EW',
    gradient: 'from-ember to-ember-dark',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32">
      {/* Section header */}
      <div className="mx-auto mb-20 max-w-3xl px-6 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/5 px-4 py-1.5 text-xs font-medium text-amber-400 backdrop-blur-sm">
          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.166 11 15c0 1.933-1.566 3.5-3.5 3.5-1.604 0-2.648-.733-2.917-1.179zm11 0C14.553 16.227 14 15 14 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C20.591 11.69 22 13.166 22 15c0 1.933-1.566 3.5-3.5 3.5-1.604 0-2.648-.733-2.917-1.179z" />
          </svg>
          What developers say
        </span>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Loved by{' '}
          <span className="bg-gradient-to-r from-amber-400 to-ember bg-clip-text text-transparent">
            developers worldwide
          </span>
        </h2>
      </div>

      {/* Testimonials grid */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-white/5 bg-deep-700/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/10 hover:bg-deep-700/50 hover:-translate-y-1"
            >
              {/* Quote icon */}
              <svg className="mb-4 h-8 w-8 text-white/10 transition-colors duration-300 group-hover:text-white/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.166 11 15c0 1.933-1.566 3.5-3.5 3.5-1.604 0-2.648-.733-2.917-1.179zm11 0C14.553 16.227 14 15 14 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C20.591 11.69 22 13.166 22 15c0 1.933-1.566 3.5-3.5 3.5-1.604 0-2.648-.733-2.917-1.179z" />
              </svg>

              {/* Quote */}
              <p className="mb-6 text-sm leading-relaxed text-gray-400">
                "{item.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${item.gradient} text-xs font-bold text-white`}>
                  {item.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{item.author}</p>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
