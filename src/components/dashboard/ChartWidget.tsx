interface ChartWidgetProps {
  title: string
  subtitle?: string
  data?: number[]
}

const defaultData = [18, 35, 28, 45, 38, 52, 48, 62, 55, 70, 65, 82]

export default function ChartWidget({
  title,
  subtitle,
  data = defaultData,
}: ChartWidgetProps) {
  const width = 400
  const height = 180
  const padding = { top: 20, right: 20, bottom: 30, left: 0 }
  const chartWidth = width - padding.left - padding.right
  const chartHeight = height - padding.top - padding.bottom

  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const stepX = chartWidth / (data.length - 1)

  const points = data.map((d, i) => ({
    x: padding.left + i * stepX,
    y: padding.top + chartHeight - ((d - min) / range) * chartHeight,
  }))

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${padding.top + chartHeight} L ${points[0].x} ${padding.top + chartHeight} Z`

  return (
    <div className="rounded-2xl border border-white/5 bg-deep-700/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-deep-700/60">
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-base font-semibold text-white">{title}</h3>
          {subtitle && <p className="mt-0.5 text-sm text-gray-500">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="h-2 w-2 rounded-full bg-cyber-cyan" />
            Current
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full" preserveAspectRatio="none">
          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
            const y = padding.top + chartHeight - ratio * chartHeight
            return (
              <line
                key={ratio}
                x1={padding.left}
                y1={y}
                x2={width - padding.right}
                y2={y}
                stroke="rgba(255,255,255,0.03)"
                strokeWidth="1"
              />
            )
          })}

          {/* Area fill */}
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(0, 212, 255, 0.15)" />
              <stop offset="100%" stopColor="rgba(0, 212, 255, 0)" />
            </linearGradient>
          </defs>
          <path d={areaPath} fill="url(#chartGradient)" />

          {/* Line */}
          <path
            d={linePath}
            fill="none"
            stroke="#00d4ff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Dots */}
          {points.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r="3"
              fill="#08080e"
              stroke="#00d4ff"
              strokeWidth="2"
              className="opacity-0 transition-opacity duration-200 hover:opacity-100"
              style={{ opacity: i === data.length - 1 ? 1 : 0 }}
            />
          ))}

          {/* Last dot (always visible) */}
          <circle
            cx={points[points.length - 1].x}
            cy={points[points.length - 1].y}
            r="4"
            fill="#00d4ff"
          />
        </svg>

        {/* X-axis labels */}
        <div className="mt-2 flex justify-between px-2">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
            <span key={day} className="text-[10px] text-gray-600">
              {day}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
