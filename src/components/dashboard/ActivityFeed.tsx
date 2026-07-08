const activities = [
  {
    user: 'Sarah Chen',
    action: 'deployed',
    target: 'site01-web',
    detail: 'to production',
    time: '2m ago',
    gradient: 'from-cyber-cyan to-cyber-blue',
  },
  {
    user: 'Marcus R.',
    action: 'merged PR',
    target: '#142',
    detail: 'into main',
    time: '8m ago',
    gradient: 'from-neon to-neon-pink',
  },
  {
    user: 'Emily W.',
    action: 'created project',
    target: 'mobile-api',
    detail: '',
    time: '15m ago',
    gradient: 'from-ember to-ember-dark',
  },
  {
    user: 'Alex K.',
    action: 'added secret',
    target: 'STRIPE_KEY',
    detail: 'to analytics-svc',
    time: '32m ago',
    gradient: 'from-cyber-blue to-neon',
  },
  {
    user: 'Jordan T.',
    action: 'rolled back',
    target: 'api-gateway',
    detail: 'to v2.4.1',
    time: '1h ago',
    gradient: 'from-rose-400 to-neon-pink',
  },
]

export default function ActivityFeed() {
  return (
    <div className="rounded-2xl border border-white/5 bg-deep-700/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-deep-700/60">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">Activity Feed</h3>
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyber-cyan/10 text-[10px] text-cyber-cyan">
          {activities.length}
        </span>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-cyber-cyan/20 via-white/5 to-transparent" />

        <ul className="space-y-0">
          {activities.map((item, i) => (
            <li key={i} className="relative flex items-start gap-4 py-3">
              {/* Timeline dot */}
              <div className={`relative z-10 mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${item.gradient} text-[10px] font-bold text-white shadow-lg`}>
                {item.user.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <p className="text-sm text-gray-300">
                  <span className="font-medium text-white">{item.user}</span>{' '}
                  {item.action}{' '}
                  <span className="font-medium text-gray-300">{item.target}</span>{' '}
                  {item.detail && (
                    <span className="text-gray-500">{item.detail}</span>
                  )}
                </p>
                <p className="mt-0.5 text-xs text-gray-600">{item.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
