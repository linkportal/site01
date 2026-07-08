interface StatCardProps {
  label: string
  value: string
  subtitle?: string
  trend?: { value: string; positive: boolean }
  icon: React.ReactNode
  gradient: string
}

export default function StatCard({ label, value, subtitle, trend, icon, gradient }: StatCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-deep-700/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-deep-700/60 hover:shadow-xl hover:shadow-black/10">
      {/* Hover gradient */}
      <div className={`pointer-events-none absolute -inset-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-[0.03] blur-3xl`} />
      </div>

      <div className="relative flex items-start justify-between">
        {/* Icon */}
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg`}>
          {icon}
        </div>

        {/* Trend badge */}
        {trend && (
          <span
            className={`flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[11px] font-medium ${
              trend.positive
                ? 'bg-emerald-400/10 text-emerald-400'
                : 'bg-red-400/10 text-red-400'
            }`}
          >
            <svg className={`h-3 w-3 ${trend.positive ? '' : 'rotate-180'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            {trend.value}
          </span>
        )}
      </div>

      {/* Value */}
      <div className="relative mt-4">
        <p className="text-2xl font-bold tracking-tight text-white">{value}</p>
        <p className="mt-1 text-sm text-gray-500">{label}</p>
        {subtitle && (
          <p className="mt-0.5 text-xs text-gray-600">{subtitle}</p>
        )}
      </div>
    </div>
  )
}
