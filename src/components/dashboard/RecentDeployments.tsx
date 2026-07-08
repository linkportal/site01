const deployments = [
  { project: 'site01-web', branch: 'main', status: 'live' as const, time: '2 min ago', commit: '8f3d2a1' },
  { project: 'api-gateway', branch: 'staging', status: 'building' as const, time: '5 min ago', commit: 'b7e9c4f' },
  { project: 'site01-web', branch: 'feat/auth', status: 'failed' as const, time: '12 min ago', commit: 'a2d5f8e' },
  { project: 'docs-site', branch: 'main', status: 'live' as const, time: '28 min ago', commit: '3c9e1b7' },
  { project: 'analytics-svc', branch: 'develop', status: 'live' as const, time: '1 hr ago', commit: 'f6a2d8c' },
]

const statusStyles = {
  live: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
  building: 'bg-amber-400/10 text-amber-400 border-amber-400/20',
  failed: 'bg-red-400/10 text-red-400 border-red-400/20',
}

export default function RecentDeployments() {
  return (
    <div className="rounded-2xl border border-white/5 bg-deep-700/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-deep-700/60">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">Recent Deployments</h3>
        <a
          href="#"
          className="text-xs font-medium text-cyber-cyan transition-colors duration-200 hover:text-cyber-blue"
        >
          View all
        </a>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/5 text-xs font-medium uppercase tracking-wider text-gray-600">
              <th className="pb-3 pr-4 font-medium">Project</th>
              <th className="pb-3 pr-4 font-medium">Branch</th>
              <th className="pb-3 pr-4 font-medium">Status</th>
              <th className="pb-3 pr-4 font-medium">Commit</th>
              <th className="pb-3 text-right font-medium">Time</th>
            </tr>
          </thead>
          <tbody>
            {deployments.map((dep, i) => (
              <tr
                key={i}
                className="border-b border-white/[0.02] transition-colors duration-200 last:border-0 hover:bg-white/[0.02]"
              >
                <td className="py-3 pr-4">
                  <span className="font-medium text-gray-300">{dep.project}</span>
                </td>
                <td className="py-3 pr-4">
                  <code className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-gray-500">
                    {dep.branch}
                  </code>
                </td>
                <td className="py-3 pr-4">
                  <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium capitalize ${statusStyles[dep.status]}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${
                      dep.status === 'live' ? 'bg-emerald-400' :
                      dep.status === 'building' ? 'bg-amber-400' : 'bg-red-400'
                    } ${dep.status === 'building' ? 'animate-pulse' : ''}`} />
                    {dep.status}
                  </span>
                </td>
                <td className="py-3 pr-4">
                  <code className="text-xs text-gray-500">{dep.commit}</code>
                </td>
                <td className="py-3 text-right text-gray-500">{dep.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
