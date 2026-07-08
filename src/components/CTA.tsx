export default function CTA() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-deep-700/50 via-deep-800/30 to-deep-700/50 backdrop-blur-sm">
          {/* Background glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyber-cyan/10 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-neon/10 blur-[100px]" />

          <div className="relative z-10 flex flex-col items-center gap-12 px-8 py-20 md:flex-row md:px-16 lg:px-24">
            {/* Left content */}
            <div className="max-w-xl text-center md:text-left">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Ready to{' '}
                <span className="bg-gradient-to-r from-cyber-cyan to-cyber-blue bg-clip-text text-transparent">
                  ship faster?
                </span>
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-400">
                Join hundreds of thousands of developers who already trust Site01.
                Start building for free — no credit card required.
              </p>

              <div className="flex flex-col items-center gap-4 sm:flex-row md:justify-start">
                <a
                  href="#"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-blue px-8 py-3.5 text-base font-semibold text-white shadow-xl shadow-cyber-cyan/25 transition-all duration-300 hover:shadow-2xl hover:shadow-cyber-cyan/30 hover:scale-105"
                >
                  <span className="relative z-10">Start Free Trial</span>
                  <svg className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-[600ms] group-hover:translate-x-full" />
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-500 underline underline-offset-4 decoration-white/10 transition-colors duration-300 hover:text-gray-300 hover:decoration-white/20"
                >
                  Talk to sales
                </a>
              </div>
            </div>

            {/* Right decorative stats */}
            <div className="flex shrink-0 gap-8">
              <div className="text-center">
                <p className="text-3xl font-black text-white">
                  <span className="bg-gradient-to-br from-cyber-cyan to-cyber-blue bg-clip-text text-transparent">10K</span>
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500">Stars on GitHub</p>
              </div>
              <div className="hidden h-16 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent sm:block" />
              <div className="text-center">
                <p className="text-3xl font-black text-white">
                  <span className="bg-gradient-to-br from-neon to-neon-pink bg-clip-text text-transparent">99%</span>
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500">Satisfaction rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
