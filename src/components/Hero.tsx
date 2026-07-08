import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const roles = ['Developers', 'Creators', 'Teams', 'Innovators']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % roles.length)
        setFade(true)
      }, 300)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 pb-24">
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-cyber-cyan/10 blur-[100px] animate-pulse-glow" />
        <div className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-neon/10 blur-[80px]" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/4 h-72 w-72 rounded-full bg-ember/10 blur-[80px]" style={{ animationDelay: '4s' }} />
      </div>

      {/* Floating grid cards */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[10%] top-[20%] h-40 w-40 rounded-xl border border-white/5 bg-white/[0.02] shadow-xl backdrop-blur-sm" style={{ animation: 'float 6s ease-in-out infinite' }} />
        <div className="absolute left-[8%] top-[35%] h-32 w-32 rounded-xl border border-white/5 bg-white/[0.02] shadow-xl backdrop-blur-sm" style={{ animation: 'float 8s ease-in-out infinite' }} />
        <div className="absolute right-[15%] bottom-[25%] h-28 w-28 rounded-xl border border-white/5 bg-white/[0.02] shadow-xl backdrop-blur-sm" style={{ animation: 'float 7s ease-in-out infinite' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyber-cyan/20 bg-cyber-cyan/5 px-4 py-1.5 text-xs font-medium text-cyber-cyan backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-cyber-cyan animate-pulse" />
          Now in public beta
        </div>

        {/* Headline */}
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Built for{' '}
          <span className={`inline-block min-w-[180px] text-center transition-opacity duration-300 sm:min-w-[220px] ${fade ? 'opacity-100' : 'opacity-0'}`}>
            <span className="bg-gradient-to-r from-cyber-cyan via-cyber-blue to-neon bg-clip-text text-transparent">
              {roles[roleIndex]}
            </span>
          </span>
          <br />
          <span className="text-gray-300">Ship faster. Scale smarter.</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gray-500 md:text-xl">
          The modern platform that gives you everything you need to build, deploy,
          and scale your applications — without the complexity.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/dashboard"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-blue px-8 py-3.5 text-base font-semibold text-white shadow-xl shadow-cyber-cyan/25 transition-all duration-300 hover:shadow-2xl hover:shadow-cyber-cyan/30 hover:scale-105"
          >
            <span className="relative z-10">Start Building Free</span>
            <svg className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-[600ms] group-hover:translate-x-full" />
          </Link>
          <a
            href="#features"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-base font-medium text-gray-300 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            See how it works
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <p className="text-xs font-medium uppercase tracking-widest text-gray-600">
            Trusted by teams from
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-40 grayscale">
            {['Vercel', 'Netflix', 'Spotify', 'Figma', 'Linear'].map((name) => (
              <span key={name} className="text-lg font-bold tracking-tight text-gray-400">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-900 to-transparent" />
    </section>
  )
}
