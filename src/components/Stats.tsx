import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: '99.99', suffix: '%', label: 'Uptime' },
  { value: '10M+', suffix: '', label: 'Requests per day' },
  { value: '30+', suffix: '', label: 'Global regions' },
  { value: '500K', suffix: '+', label: 'Active developers' },
]

function useCountUp(end: string, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const counted = useRef(false)

  const numericValue = parseFloat(end.replace(/[^0-9.]/g, ''))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true
          const startTime = performance.now()
          const tick = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * numericValue))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [numericValue, duration])

  return { ref, count }
}

function StatCard({ value, suffix, label }: { value: string; suffix: string; label: string }) {
  const { ref, count } = useCountUp(value)
  const hasDecimal = value.includes('.')

  return (
    <div className="group flex flex-col items-center p-8">
      <div className="relative">
        <span className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
          {hasDecimal ? (
            <>
              <span className="bg-gradient-to-br from-cyber-cyan to-cyber-blue bg-clip-text text-transparent">{count}</span>
              <span className="bg-gradient-to-br from-cyber-cyan to-cyber-blue bg-clip-text text-transparent">.</span>
              <span className="bg-gradient-to-br from-cyber-cyan to-cyber-blue bg-clip-text text-transparent">99</span>
            </>
          ) : (
            <span ref={ref} className="bg-gradient-to-br from-cyber-cyan to-cyber-blue bg-clip-text text-transparent">
              {count}
            </span>
          )}
          <span className="bg-gradient-to-br from-cyber-cyan to-cyber-blue bg-clip-text text-transparent">{suffix}</span>
        </span>
        {!hasDecimal && <span ref={ref} className="hidden" />}
      </div>
      <p className="mt-2 text-sm font-medium uppercase tracking-widest text-gray-500">
        {label}
      </p>
    </div>
  )
}

export default function Stats() {
  return (
    <section id="stats" className="relative py-24">
      {/* Divider */}
      <div className="mx-auto mb-16 max-w-7xl px-6">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 divide-x divide-y divide-white/5 border border-white/5 rounded-3xl bg-deep-700/30 backdrop-blur-sm lg:grid-cols-4 lg:divide-y-0">
          {stats.map((stat, i) => (
            <div key={i} className="relative">
              <StatCard {...stat} />
              {i < stats.length - 1 && (
                <div className="absolute right-0 top-1/4 hidden h-1/2 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
